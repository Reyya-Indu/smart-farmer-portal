import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { notifications as initialNotifications } from '../data/notifications'
import {
  CloudRain, Sprout, Landmark, TrendingUp, Megaphone,
  CheckCheck, Bell, AlertTriangle, Info
} from 'lucide-react'

export default function Notifications() {
  const { t, language } = useLanguage()
  const [notifications, setNotifications] = useState(initialNotifications)
  const [filter, setFilter] = useState('all')

  const getTypeIcon = (type) => {
    switch (type) {
      case 'weather': return <CloudRain className="w-5 h-5 text-blue-500" />
      case 'crop': return <Sprout className="w-5 h-5 text-green-500" />
      case 'scheme': return <Landmark className="w-5 h-5 text-purple-500" />
      case 'market': return <TrendingUp className="w-5 h-5 text-orange-500" />
      case 'announcement': return <Megaphone className="w-5 h-5 text-red-500" />
      default: return <Bell className="w-5 h-5 text-gray-500" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50'
      case 'medium': return 'border-yellow-200 bg-yellow-50'
      case 'low': return 'border-green-200 bg-green-50'
      default: return 'border-gray-200 bg-gray-50'
    }
  }

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  const filtered = filter === 'all' ? notifications :
    filter === 'unread' ? notifications.filter(n => !n.read) :
    notifications.filter(n => n.type === filter)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{t('notificationsTitle')}</h1>
          <p className="text-gray-600 mt-1">{t('notificationsSubtitle')}</p>
        </div>
        <button onClick={markAllRead} className="btn-secondary flex items-center gap-2">
          <CheckCheck className="w-4 h-4" />
          {t('markAllRead')}
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['all', 'unread', 'weather', 'crop', 'scheme', 'market', 'announcement'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === type
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type === 'all' ? 'All' : type === 'unread' ? 'Unread' : t(type)}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">{t('noNotifications')}</p>
          </div>
        ) : filtered.map(notif => (
          <div
            key={notif.id}
            className={`card p-5 border-l-4 ${getPriorityColor(notif.priority)} ${
              !notif.read ? 'ring-2 ring-primary-200' : ''
            }`}
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                {getTypeIcon(notif.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`font-semibold ${!notif.read ? 'text-gray-900' : 'text-gray-700'}`}>
                      {language === 'te' ? notif.titleTe : notif.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === 'te' ? notif.messageTe : notif.message}
                    </p>
                  </div>
                  {!notif.read && (
                    <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-2"></span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xs text-gray-500">{notif.date}</span>
                  <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                    notif.priority === 'high' ? 'bg-red-100 text-red-700' :
                    notif.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {notif.priority}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
