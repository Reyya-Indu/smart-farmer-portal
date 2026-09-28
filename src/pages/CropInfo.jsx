import { useState, useMemo } from 'react'
import CropCard from '../components/CropCard.jsx'
import { crops } from '../data/crops.js'

const categories = ['All', 'Kharif', 'Rabi', 'Year-round']
const waterLevels = ['All', 'Low', 'Low-Medium', 'Medium', 'High']

export default function CropInfo() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedWater, setSelectedWater] = useState('All')
  const [sortBy, setSortBy] = useState('name')

  const filteredCrops = useMemo(() => {
    return crops
      .filter((crop) => {
        const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crop.scientificName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crop.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === 'All' || crop.category === selectedCategory
        const matchesWater = selectedWater === 'All' || crop.water === selectedWater
        return matchesSearch && matchesCategory && matchesWater
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name)
        if (sortBy === 'duration') return parseInt(a.duration) - parseInt(b.duration)
        if (sortBy === 'water') {
          const waterOrder = { 'Low': 1, 'Low-Medium': 2, 'Medium': 3, 'High': 4 }
          return waterOrder[a.water] - waterOrder[b.water]
        }
        return 0
      })
  }, [searchTerm, selectedCategory, selectedWater, sortBy])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Crop Database
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Crop Information
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive database of crops with cultivation details, seasons, and best practices
          </p>
        </div>

        {/* ===== SEARCH & FILTERS ===== */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Crops</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                <input
                  type="text"
                  placeholder="Search by name, scientific name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
                ))}
              </select>
            </div>

            {/* Water Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Water Requirement</label>
              <select
                value={selectedWater}
                onChange={(e) => setSelectedWater(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all bg-white"
              >
                {waterLevels.map((level) => (
                  <option key={level} value={level}>{level === 'All' ? 'All Levels' : level}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort & Results Count */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-900">{filteredCrops.length}</span> of {crops.length} crops
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
              >
                <option value="name">Name</option>
                <option value="duration">Duration</option>
                <option value="water">Water Need</option>
              </select>
            </div>
          </div>
        </div>

        {/* ===== CROP GRID ===== */}
        {filteredCrops.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCrops.map((crop) => (
              <CropCard key={crop.id} crop={crop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-6xl">🔍</span>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">No crops found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
                setSelectedWater('All')
              }}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* ===== CROP CLASSIFICATION INFO ===== */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">🌱 Crop Classification</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h3 className="font-bold text-amber-800 mb-3 flex items-center">
                <span className="mr-2">☀️</span> Kharif Crops
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sown with the beginning of monsoon (June-July) and harvested in autumn (September-October).
                These crops require warm weather and adequate rainfall.
              </p>
              <div className="mt-3 text-sm text-amber-700 font-medium">
                Examples: Rice, Maize, Cotton, Groundnut
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="font-bold text-blue-800 mb-3 flex items-center">
                <span className="mr-2">❄️</span> Rabi Crops
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sown in winter (October-November) and harvested in spring (March-April).
                These crops grow well in cooler temperatures with moderate irrigation.
              </p>
              <div className="mt-3 text-sm text-blue-700 font-medium">
                Examples: Wheat, Chickpea, Mustard, Potato
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <h3 className="font-bold text-green-800 mb-3 flex items-center">
                <span className="mr-2">🌍</span> Year-round Crops
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Can be grown throughout the year with proper irrigation and management.
                These crops require consistent care and monitoring.
              </p>
              <div className="mt-3 text-sm text-green-700 font-medium">
                Examples: Tomato, Onion, Chilli, Sugarcane
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
