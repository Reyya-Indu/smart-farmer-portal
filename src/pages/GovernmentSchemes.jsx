import { useState } from 'react'
import SchemeCard from '../components/SchemeCard.jsx'
import { governmentSchemes } from '../data/schemes.js'

export default function GovernmentSchemes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMinistry, setSelectedMinistry] = useState('All')

  const ministries = ['All', ...new Set(governmentSchemes.map(s => s.ministry))]

  const filteredSchemes = governmentSchemes.filter((scheme) => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMinistry = selectedMinistry === 'All' || scheme.ministry === selectedMinistry
    return matchesSearch && matchesMinistry
  })

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="section-title">Government Schemes</h1>
          <p className="section-subtitle mx-auto">
            Explore central and state government schemes, subsidies, and support programs for farmers
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search schemes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />
          </div>
          <select
            value={selectedMinistry}
            onChange={(e) => setSelectedMinistry(e.target.value)}
            className="input-field sm:w-64"
          >
            {ministries.map((ministry) => (
              <option key={ministry} value={ministry}>
                {ministry === 'All' ? 'All Ministries' : ministry}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing {filteredSchemes.length} of {governmentSchemes.length} schemes
        </p>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredSchemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <div className="text-center py-12">
            <span className="text-5xl">🔍</span>
            <h3 className="text-xl font-semibold text-gray-700 mt-4">No schemes found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
          </div>
        )}

        {/* How to Apply */}
        <div className="card p-8 bg-primary-50 border border-primary-200">
          <h2 className="text-2xl font-bold text-primary-900 mb-6">📋 How to Apply for Schemes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Check Eligibility</h3>
              <p className="text-sm text-gray-600">Review the eligibility criteria for the scheme you want to apply for</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Gather Documents</h3>
              <p className="text-sm text-gray-600">Collect required documents like Aadhaar, land records, bank details</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Apply Online/Offline</h3>
              <p className="text-sm text-gray-600">Submit application through official portal or nearest CSC center</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Track Status</h3>
              <p className="text-sm text-gray-600">Monitor your application status and receive benefits directly</p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 card p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-lg text-gray-900">Need Help with Scheme Application?</h3>
              <p className="text-gray-600">Contact your nearest Krishi Vigyan Kendra (KVK) or Common Service Center (CSC)</p>
            </div>
            <div className="flex gap-3">
              <a href="tel:1800-180-1551" className="btn-primary">📞 Helpline: 1800-180-1551</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
