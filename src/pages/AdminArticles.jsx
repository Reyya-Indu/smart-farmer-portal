import { useState } from 'react'
import { adminArticles } from '../data/adminData.js'

const emptyForm = { title: '', author: '', category: 'Crop Guide', status: 'Draft' }

export default function AdminArticles() {
  const [articles, setArticles] = useState(adminArticles)
  const [showModal, setShowModal] = useState(false)
  const [editingArticle, setEditingArticle] = useState(null)
  const [formData, setFormData] = useState(emptyForm)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'All' || article.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const openAddModal = () => {
    setEditingArticle(null)
    setFormData(emptyForm)
    setShowModal(true)
  }

  const openEditModal = (article) => {
    setEditingArticle(article)
    setFormData(article)
    setShowModal(true)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setArticles(articles.filter(a => a.id !== id))
    }
  }

  const handleStatusChange = (id, newStatus) => {
    setArticles(articles.map(a => a.id === id ? { ...a, status: newStatus } : a))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingArticle) {
      setArticles(articles.map(a => a.id === editingArticle.id ? { ...formData, id: editingArticle.id } : a))
    } else {
      setArticles([...articles, { ...formData, id: Date.now(), date: new Date().toISOString().split('T')[0], views: '0' }])
    }
    setShowModal(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-700'
      case 'Draft': return 'bg-gray-100 text-gray-700'
      case 'Review': return 'bg-amber-100 text-amber-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manage Articles</h2>
          <p className="text-gray-500">Create and manage farming articles and guides</p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-xl font-medium hover:bg-rose-700 transition-colors"
        >
          <span className="mr-2">+</span> New Article
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            <option value="All">All Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Review">Under Review</option>
          </select>
        </div>
      </div>

      {/* Articles List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Title</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Author</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Category</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Views</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredArticles.map((article) => (
                <tr key={article.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900 max-w-xs truncate">{article.title}</p>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{article.author}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={article.status}
                      onChange={(e) => handleStatusChange(article.id, e.target.value)}
                      className={`px-3 py-1 rounded-full text-xs font-medium border-0 cursor-pointer ${getStatusColor(article.status)}`}
                    >
                      <option value="Published">Published</option>
                      <option value="Draft">Draft</option>
                      <option value="Review">Review</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{article.date}</td>
                  <td className="px-6 py-4 text-gray-600 text-sm">{article.views}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => openEditModal(article)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors mr-2"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredArticles.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            <span className="text-4xl">📝</span>
            <p className="mt-2">No articles found</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">
                {editingArticle ? 'Edit Article' : 'Create New Article'}
              </h3>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option value="Crop Guide">Crop Guide</option>
                    <option value="Soil Management">Soil Management</option>
                    <option value="Irrigation">Irrigation</option>
                    <option value="Pest Control">Pest Control</option>
                    <option value="Schemes">Schemes</option>
                    <option value="Market">Market</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Review">Under Review</option>
                    <option value="Published">Published</option>
                  </select>
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
                  className="flex-1 px-4 py-3 bg-rose-600 text-white rounded-xl font-medium hover:bg-rose-700 transition-colors"
                >
                  {editingArticle ? 'Update' : 'Create'} Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
