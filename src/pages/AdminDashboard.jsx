import { Link } from 'react-router-dom'
import { adminStats, adminUsers, adminArticles } from '../data/adminData.js'

const statCards = [
  { label: 'Total Users', value: '2.5L+', icon: '👥', color: 'bg-blue-500', change: '+12%' },
  { label: 'Active Users', value: '1.8L+', icon: '✅', color: 'bg-green-500', change: '+8%' },
  { label: 'Total Crops', value: '150+', icon: '🌾', color: 'bg-amber-500', change: '+5' },
  { label: 'Total Schemes', value: '25', icon: '🏛️', color: 'bg-purple-500', change: '+2' },
  { label: 'Articles', value: '500+', icon: '📝', color: 'bg-rose-500', change: '+15' },
  { label: 'New Users Today', value: '156', icon: '🆕', color: 'bg-cyan-500', change: '+23' },
]

const recentUsers = adminUsers.slice(0, 5)
const pendingArticles = adminArticles.filter(a => a.status === 'Draft' || a.status === 'Review')

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center text-2xl`}>
                {stat.icon}
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Users */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-lg text-gray-900">Recent Users</h3>
            <Link to="/admin/users" className="text-sm text-green-600 font-medium hover:text-green-700">
              View All →
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {recentUsers.map((user) => (
              <div key={user.id} className="p-4 flex items-center space-x-4 hover:bg-gray-50">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">
                  {user.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{user.name}</p>
                  <p className="text-sm text-gray-500 truncate">{user.email}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  user.status === 'Active' ? 'bg-green-100 text-green-700' :
                  user.status === 'Inactive' ? 'bg-gray-100 text-gray-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Articles */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-lg text-gray-900">Pending Articles</h3>
            <Link to="/admin/articles" className="text-sm text-green-600 font-medium hover:text-green-700">
              View All →
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {pendingArticles.length > 0 ? pendingArticles.map((article) => (
              <div key={article.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{article.title}</p>
                    <p className="text-sm text-gray-500 mt-1">By {article.author}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${
                    article.status === 'Draft' ? 'bg-gray-100 text-gray-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {article.status}
                  </span>
                </div>
              </div>
            )) : (
              <div className="p-8 text-center text-gray-500">
                <span className="text-4xl">✅</span>
                <p className="mt-2">No pending articles</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link to="/admin/crops" className="p-4 bg-green-50 rounded-xl text-center hover:bg-green-100 transition-colors">
            <span className="text-2xl">🌾</span>
            <p className="text-sm font-medium text-gray-700 mt-2">Add Crop</p>
          </Link>
          <Link to="/admin/schemes" className="p-4 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition-colors">
            <span className="text-2xl">🏛️</span>
            <p className="text-sm font-medium text-gray-700 mt-2">Add Scheme</p>
          </Link>
          <Link to="/admin/articles" className="p-4 bg-rose-50 rounded-xl text-center hover:bg-rose-100 transition-colors">
            <span className="text-2xl">📝</span>
            <p className="text-sm font-medium text-gray-700 mt-2">New Article</p>
          </Link>
          <Link to="/admin/users" className="p-4 bg-blue-50 rounded-xl text-center hover:bg-blue-100 transition-colors">
            <span className="text-2xl">👥</span>
            <p className="text-sm font-medium text-gray-700 mt-2">Manage Users</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
