import { useState, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { mockDiseaseService } from '../services/mockServices'
import { Upload, Camera, Loader2, AlertTriangle, CheckCircle, RefreshCw, Bot, Sprout } from 'lucide-react'

export default function DiseaseDetection() {
  const { t, language } = useLanguage()
  const fileInputRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [dragOver, setDragOver] = useState(false)

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) processFile(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) processFile(file)
  }

  const processFile = (file) => {
    setError('')
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('Image size should be less than 10MB')
      return
    }
    setSelectedImage(file)
    const reader = new FileReader()
    reader.onloadend = () => setImagePreview(reader.result)
    reader.readAsDataURL(file)
  }

  const handleAnalyze = async () => {
    if (!selectedImage) return
    setAnalyzing(true)
    setError('')
    setResult(null)
    try {
      const detectionResult = await mockDiseaseService.detect(selectedImage)
      setResult(detectionResult)
    } catch (err) {
      setError('Analysis failed. Please try again.')
    } finally {
      setAnalyzing(false)
    }
  }

  const handleReset = () => {
    setSelectedImage(null)
    setImagePreview(null)
    setResult(null)
    setError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('diseaseDetectionTitle')}</h1>
        <p className="text-gray-600 mt-2">{t('diseaseDetectionDesc')}</p>
      </div>

      {/* Upload Area */}
      {!result && (
        <div className="card p-8 mb-6">
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-2xl p-12 text-center transition-colors ${
              dragOver ? 'border-primary-500 bg-primary-50' : 'border-gray-300'
            }`}
          >
            {imagePreview ? (
              <div>
                <img src={imagePreview} alt="Preview" className="max-h-64 mx-auto rounded-xl mb-4" />
                <p className="text-sm text-gray-600">{selectedImage?.name}</p>
                <button onClick={handleReset} className="mt-2 text-sm text-red-600 hover:text-red-700">
                  Remove
                </button>
              </div>
            ) : (
              <div>
                <Upload className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-900 mb-2">{t('dragDrop')}</p>
                <p className="text-sm text-gray-500 mb-6">JPG, PNG up to 10MB</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Upload className="w-5 h-5" />
                    Browse Image
                  </button>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <Camera className="w-5 h-5" />
                    Take Photo
                  </button>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            )}
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              {error}
            </div>
          )}

          {imagePreview && !analyzing && (
            <div className="mt-6 text-center">
              <button onClick={handleAnalyze} className="btn-primary text-lg px-8 py-4">
                {t('analyzeImage')}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Analyzing */}
      {analyzing && (
        <div className="card p-12 text-center">
          <Loader2 className="w-16 h-16 text-primary-600 animate-spin mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900">{t('analyzing')}</h3>
          <p className="text-gray-600 mt-2">This may take a few moments...</p>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-6">
          <div className="card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{t('possibleResult')}</h2>
                <p className="text-gray-600">
                  {language === 'te' ? result.disease.nameTe : result.disease.name}
                </p>
              </div>
            </div>

            {/* Confidence */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">{t('confidenceLevel')}</span>
                <span className="font-semibold text-gray-900">{result.confidence}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000"
                  style={{ width: `${result.confidence}%` }}
                />
              </div>
            </div>

            {/* Symptoms */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">{t('symptoms')}</h3>
              <p className="text-gray-600">{result.disease.symptoms}</p>
            </div>

            {/* Management */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">{t('management')}</h3>
              <p className="text-gray-600">{result.disease.management}</p>
            </div>

            {/* Prevention */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">{t('preventionTips')}</h3>
              <p className="text-gray-600">{result.disease.prevention}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <button onClick={handleReset} className="btn-secondary flex items-center gap-2">
                <RefreshCw className="w-5 h-5" />
                {t('analyzeAnother')}
              </button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">{t('diseaseDisclaimer')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
