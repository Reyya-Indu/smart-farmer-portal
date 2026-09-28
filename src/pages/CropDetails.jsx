import { useParams, Link, useNavigate } from 'react-router-dom'
import { crops } from '../data/crops.js'

export default function CropDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const crop = crops.find((c) => c.id === parseInt(id))

  if (!crop) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl">🌾</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-4">Crop Not Found</h2>
          <p className="text-gray-600 mt-2">The crop you're looking for doesn't exist.</p>
          <Link to="/crops" className="mt-4 inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
            Back to Crops
          </Link>
        </div>
      </div>
    )
  }

  const relatedCrops = crops.filter((c) => c.category === crop.category && c.id !== crop.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===== BREADCRUMB ===== */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/crops" className="hover:text-green-600 transition-colors">Crops</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{crop.name}</span>
        </nav>

        {/* ===== BACK BUTTON ===== */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-600 font-medium hover:text-green-700 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Crops
        </button>

        {/* ===== HERO SECTION ===== */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center text-6xl backdrop-blur-sm">
                {crop.icon}
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{crop.name}</h1>
                <p className="text-green-100 italic text-lg">{crop.scientificName}</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                    {crop.season}
                  </span>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                    {crop.duration}
                  </span>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                    {crop.water} Water
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 mb-1">Expected Yield</p>
              <p className="text-xl font-bold text-green-600">{crop.yield}</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 mb-1">Temperature</p>
              <p className="text-xl font-bold text-gray-900">{crop.temperature}</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 mb-1">Rainfall</p>
              <p className="text-xl font-bold text-gray-900">{crop.rainfall}</p>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-gray-500 mb-1">Market Price</p>
              <p className="text-xl font-bold text-green-600">{crop.marketPrice.split(' - ')[0]}+</p>
            </div>
          </div>
        </div>

        {/* ===== DESCRIPTION ===== */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">📖</span> About {crop.name}
          </h2>
          <p className="text-gray-600 leading-relaxed">{crop.description}</p>
        </div>

        {/* ===== CULTIVATION DETAILS ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sowing & Harvesting */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">📅</span> Sowing & Harvesting
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌱</span>
                  <span className="font-medium text-gray-700">Sowing Time</span>
                </div>
                <span className="font-bold text-green-700">{crop.sowingTime}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌾</span>
                  <span className="font-medium text-gray-700">Harvest Time</span>
                </div>
                <span className="font-bold text-amber-700">{crop.harvestTime}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">⏱️</span>
                  <span className="font-medium text-gray-700">Duration</span>
                </div>
                <span className="font-bold text-blue-700">{crop.duration}</span>
              </div>
            </div>
          </div>

          {/* Soil & Climate */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">🌍</span> Soil & Climate Requirements
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🪨</span>
                  <span className="font-medium text-gray-700">Soil Type</span>
                </div>
                <span className="font-bold text-amber-700 text-right">{crop.soilType}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌡️</span>
                  <span className="font-medium text-gray-700">Temperature</span>
                </div>
                <span className="font-bold text-red-700">{crop.temperature}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-cyan-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🌧️</span>
                  <span className="font-medium text-gray-700">Rainfall</span>
                </div>
                <span className="font-bold text-cyan-700">{crop.rainfall}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== NUTRIENTS & VARIETIES ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Nutrients */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">🧪</span> Nutrient Requirements
            </h2>
            <div className="flex flex-wrap gap-3">
              {crop.nutrients.split(', ').map((nutrient) => (
                <span key={nutrient} className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  {nutrient}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-xl">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-green-700">Tip:</span> Apply fertilizers based on soil test results for optimal growth and yield.
              </p>
            </div>
          </div>

          {/* Varieties */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">🌾</span> Recommended Varieties
            </h2>
            <div className="space-y-3">
              {crop.varieties.split(', ').map((variety) => (
                <div key={variety} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="font-medium text-gray-700">{variety}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== PESTS & DISEASES ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Pests */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">🐛</span> Common Pests
            </h2>
            <div className="space-y-3">
              {crop.pests.split(', ').map((pest) => (
                <div key={pest} className="flex items-center space-x-3 p-3 bg-red-50 rounded-xl border border-red-100">
                  <span className="text-xl">⚠️</span>
                  <span className="font-medium text-red-700">{pest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diseases */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="mr-2">🦠</span> Common Diseases
            </h2>
            <div className="space-y-3">
              {crop.diseases.split(', ').map((disease) => (
                <div key={disease} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl border border-orange-100">
                  <span className="text-xl">⚠️</span>
                  <span className="font-medium text-orange-700">{disease}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== FARMING TIPS ===== */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8 mb-8">
          <h2 className="text-xl font-bold text-green-900 mb-6 flex items-center">
            <span className="mr-2">💡</span> Expert Farming Tips for {crop.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {crop.tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl">
                <span className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RELATED CROPS ===== */}
        {relatedCrops.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Crops</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedCrops.map((relatedCrop) => (
                <Link
                  key={relatedCrop.id}
                  to={`/crops/${relatedCrop.id}`}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{relatedCrop.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{relatedCrop.name}</h3>
                      <p className="text-sm text-gray-500">{relatedCrop.season} • {relatedCrop.duration}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ===== CTA ===== */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="text-green-100 mb-6">Ask our AI Assistant for personalized advice about {crop.name} cultivation</p>
          <Link
            to="/ai-assistant"
            className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-colors"
          >
            <span className="mr-2">🤖</span>
            Ask AI Assistant
          </Link>
        </div>
      </div>
    </div>
  )
}
