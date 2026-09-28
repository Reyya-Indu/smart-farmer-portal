import { useState } from 'react'
import PriceCard from '../components/PriceCard.jsx'
import { marketPrices, priceTrends } from '../data/prices.js'

export default function MarketPrices() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const filteredPrices = marketPrices
    .filter((price) => price.crop.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') return a.crop.localeCompare(b.crop)
      if (sortBy === 'price') return b.price - a.price
      if (sortBy === 'change') return b.change - a.change
      return 0
    })

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="section-title">Market Prices</h1>
          <p className="section-subtitle mx-auto">
            Real-time mandi prices and market trends to help you get the best value for your produce
          </p>
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search crops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSortBy('name')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                sortBy === 'name' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Name
            </button>
            <button
              onClick={() => setSortBy('price')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                sortBy === 'price' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Price
            </button>
            <button
              onClick={() => setSortBy('change')}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                sortBy === 'change' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Change
            </button>
          </div>
        </div>

        {/* Price Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredPrices.map((price) => (
            <PriceCard key={price.id} price={price} />
          ))}
        </div>

        {filteredPrices.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl">🔍</span>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">No crops found</h3>
            <p className="text-gray-500 mt-2">Try a different search term</p>
          </div>
        )}

        {/* Price Trends Chart */}
        <div className="card p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Price Trends (Last 6 Months)</h2>
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              {/* Simple bar chart representation */}
              <div className="flex items-end justify-between h-64 gap-4 mb-4">
                {priceTrends.map((trend) => (
                  <div key={trend.month} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex items-end justify-center gap-1 h-48">
                      <div
                        className="w-4 bg-primary-500 rounded-t"
                        style={{ height: `${(trend.wheat / 5000) * 100}%` }}
                        title={`Wheat: ₹${trend.wheat}`}
                      ></div>
                      <div
                        className="w-4 bg-amber-500 rounded-t"
                        style={{ height: `${(trend.rice / 5000) * 100}%` }}
                        title={`Rice: ₹${trend.rice}`}
                      ></div>
                      <div
                        className="w-4 bg-green-500 rounded-t"
                        style={{ height: `${(trend.maize / 5000) * 100}%` }}
                        title={`Maize: ₹${trend.maize}`}
                      ></div>
                    </div>
                    <p className="text-sm font-medium text-gray-600 mt-2">{trend.month}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary-500 rounded"></div>
                  <span className="text-gray-600">Wheat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-amber-500 rounded"></div>
                  <span className="text-gray-600">Rice</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-gray-600">Maize</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">📈 Top Gainers</h3>
            <div className="space-y-3">
              {marketPrices.filter(p => p.change > 2).map((price) => (
                <div key={price.id} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{price.icon} {price.crop}</span>
                  <span className="text-sm font-medium text-green-600">+{price.change}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">📉 Top Losers</h3>
            <div className="space-y-3">
              {marketPrices.filter(p => p.change < 0).map((price) => (
                <div key={price.id} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{price.icon} {price.crop}</span>
                  <span className="text-sm font-medium text-red-600">{price.change}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3">💡 Market Tips</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Onion prices trending up - consider holding stock</li>
              <li>• Tomato prices dropped - explore processing options</li>
              <li>• Cotton demand strong - good time to sell</li>
              <li>• Monitor MSP before selling wheat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
