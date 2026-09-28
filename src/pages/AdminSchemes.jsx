import { useState } from 'react'
import { adminSchemes } from '../data/adminData.js'

const emptyForm = { name: '', ministry: '', benefit: '', status: 'Active', applicants: '' }

export default function AdminSchemes() {
  const [schemes, setSchemes] = useState(adminSchemes)
  const [showModal, setShowModal] = useState(false)
  const [editingScheme, setEditingScheme] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredSchemes = schemes.filter(scheme =>
    scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scheme.ministry.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const openAddModal = () => {
    setEditingScheme(null)
    setFormData(emptyForm)
    setShowModal(true)
  }

  const openEditModal = (scheme) => {
    setEditingScheme(scheme)
    setFormData(scheme)
    setShowModal(true)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this scheme?')) {
      setSchemes(schemes.filter(s => s.id !== id))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingScheme) {
      setSchemes(schemes.map(s => s.id === editingScheme.id ? { ...formData, id: editingScheme.id } : s))
    } else {
      setSchemes([...schemes, { ...formData, id: Date.now() }])
    }
    setShowModal(false)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manage Schemes</h2>
          <p className="text-gray-500">Add, edit, and manage government schemes</p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
        >
          <span className="mr-2">+</span> Add Scheme
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search schemes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchemes.map((scheme) => (
          <div key={scheme.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                🏛️
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                scheme.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {scheme.status}
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">{scheme.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{scheme.ministry}</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Benefit:</span>
                <span className="font-medium text-gray-900">{scheme.benefit}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Applicants:</span>
                <span className="font-medium text-gray-900">{scheme.applicants}</span>
              </div>
            </div>
            <div className="flex gap-2 pt-4 border-t border-gray-100">
              <button
                onClick={() => openEditModal(scheme)}
                className="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDelete(scheme.id)}
                className="flex-1 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="bg-white rounded-2xl p-12 text-center text-gray-500 shadow-sm border border-gray-100">
          <span className="text-4xl">🏛️</span>
          <p className="mt-2">No schemes found</p>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">
                {editingScheme ? 'Edit Scheme' : 'Add New Scheme'}
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Scheme Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ministry</label>
                <input
                  type="text"
                  value={formData.ministry}
                  onChange={(e) => setFormData({ ...formData, ministry: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Benefit</label>
                <input
                  type="text"
                  value={formData.benefit}
                  onChange={(e) => setFormData({ ...formData, benefit: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Applicants</label>
                  <input
                    type="text"
                    value={formData.applicants}
                    onChange={(e) => setFormData({ ...formData, applicants: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors"
                >
                  {editingScheme ? 'Update' : 'Add'} Scheme
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
