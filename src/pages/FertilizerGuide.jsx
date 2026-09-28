import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { fertilizerData, growthStages, irrigationTypes } from '../data/fertilizer'
import { crops } from '../data/crops'
import { FlaskConical, AlertTriangle, CheckCircle, Leaf } from 'lucide-react'

export default function FertilizerGuide() {
  const { t, language } = useLanguage()
  const [selectedCrop, setSelectedCrop] = useState('')
  const [soilType, setSoilType] = useState('')
  const [growthStage, setGrowthStage] = useState('')
  const [irrigationType, setIrrigationType] = useState('')
  const [showResult, setShowResult] = useState(false)

  const data = selectedCrop ? fertilizerData[selectedCrop.toLowerCase().replace(' ', '')] || fertilizerData[selectedCrop.toLowerCase()] : null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedCrop) setShowResult(true)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('fertilizerTitle')}</h1>
        <p className="text-gray-600 mt-2">{t('fertilizerSubtitle')}</p>
      </div>

      {/* Form */}
      <div className="card p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('selectCrop')}</label>
              <select
                value={selectedCrop}
                onChange={(e) => { setSelectedCrop(e.target.value); setShowResult(false) }}
                className="input-field"
                required
              >
                <option value="">Select Crop</option>
                {crops.map(c => (
                  <option key={c.id} value={c.name}>{language === 'te' ? c.nameTe : c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('soilType')}</label>
              <select value={soilType} onChange={(e) => setSoilType(e.target.value)} className="input-field" required>
                <option value="">Select Soil Type</option>
                <option value="clay">Clay</option>
                <option value="loamy">Loamy</option>
                <option value="sandy">Sandy</option>
                <option value="silt">Silt</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('growthStage')}</label>
              <select value={growthStage} onChange={(e) => setGrowthStage(e.target.value)} className="input-field" required>
                <option value="">Select Growth Stage</option>
                {growthStages.map(stage => <option key={stage} value={stage}>{stage}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('irrigationType')}</label>
              <select value={irrigationType} onChange={(e) => setIrrigationType(e.target.value)} className="input-field" required>
                <option value="">Select Irrigation Type</option>
                {irrigationTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary w-full py-4 text-lg">
            {t('getGuidance')}
          </button>
        </form>
      </div>

      {/* Results */}
      {showResult && data && (
        <div className="space-y-6 animate-fade-in-up">
          {/* Nutrient Requirements */}
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-primary-600" />
              {t('nutrientRequirements')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(data.nutrients).map(([key, value]) => (
                <div key={key} className="p-4 bg-primary-50 rounded-xl">
                  <p className="text-sm text-gray-600 capitalize">{key}</p>
                  <p className="text-lg font-semibold text-gray-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fertilizer Categories */}
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('fertilizerCategories')}</h2>
            <div className="flex flex-wrap gap-3">
              {data.categories.map((cat, idx) => (
                <span key={idx} className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Application Timing */}
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('applicationTiming')}</h2>
            <div className="space-y-3">
              {data.timing.map((time, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Soil Health Tips */}
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-500" />
              {t('soilHealthTips')}
            </h2>
            <div className="space-y-3">
              {data.soilTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Precautions */}
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              {t('precautions')}
            </h2>
            <div className="space-y-3">
              {data.precautions.map((precaution, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{precaution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">{t('fertilizerDisclaimer')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
