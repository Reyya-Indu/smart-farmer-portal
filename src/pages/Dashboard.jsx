import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { currentWeather, forecast } from '../data/weather.js'
import { marketPrices } from '../data/prices.js'
import { crops } from '../data/crops.js'

const quickActions = [
  { icon: '🌾', label: 'Crop Info', link: '/crops', color: 'bg-green-100 text-green-700' },
  { icon: '🌤️', label: 'Weather', link: '/weather', color: 'bg-blue-100 text-blue-700' },
  { icon: '📊', label: 'Prices', link: '/market-prices', color: 'bg-amber-100 text-amber-700' },
  { icon: '🏛️', label: 'Schemes', link: '/government-schemes', color: 'bg-purple-100 text-purple-700' },
  { icon: '🤖', label: 'AI Help', link: '/ai-assistant', color: 'bg-rose-100 text-rose-700' },
  { icon: '📞', label: 'Contact', link: '/contact', color: 'bg-teal-100 text-teal-700' },
]

const notifications = [
  {
    id: 1,
    type: 'warning',
    title: 'Heavy Rainfall Alert',
    message: 'Heavy rainfall expected in next 48 hours. Ensure proper drainage.',
    time: '2 hours ago',
    icon: '🌧️',
  },
  {
    id: 2,
    type: 'success',
    title: 'PM-KISAN Installment',
    message: '₹2,000 credited to your account for the 14th installment.',
    time: '1 day ago',
    icon: '💰',
  },
  {
    id: 3,
    type: 'info',
    title: 'New Scheme Launched',
    message: 'PM-KUSUM solar pump scheme applications now open.',
    time: '2 days ago',
    icon: '☀️',
  },
  {
    id: 4,
    type: 'alert',
    title: 'Pest Outbreak Warning',
    message: 'Fall armyworm reported in neighboring districts. Monitor your crops.',
    time: '3 days ago',
    icon: '🐛',
  },
]

const recentActivities = [
  { id: 1, action: 'Viewed crop information for Wheat', time: '2 hours ago', icon: '🌾', category: 'Research' },
  { id: 2, action: 'Checked weather forecast for next 7 days', time: '5 hours ago', icon: '🌤️', category: 'Planning' },
  { id: 3, action: 'Updated farm profile details', time: '1 day ago', icon: '📝', category: 'Profile' },
  { id: 4, action: 'Asked AI assistant about pest control', time: '2 days ago', icon: '🤖', category: 'AI Query' },
  { id: 5, action: 'Viewed market prices for Rice', time: '3 days ago', icon: '📊', category: 'Market' },
  { id: 6, action: 'Applied for PMFBY crop insurance', time: '5 days ago', icon: '🛡️', category: 'Scheme' },
]

const myCrops = [
  { ...crops[0], progress: 75, status: 'Growing', health: 'Good' },
  { ...crops[1], progress: 45, status: 'Growing', health: 'Excellent' },
  { ...crops[2], progress: 90, status: 'Ready', health: 'Good' },
]

export default function Dashboard() {
  const { user } = useAuth()

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }

  const getNotificationStyle = (type) => {
    switch (type) {
      case 'warning': return 'border-l-amber-500 bg-amber-50'
      case 'success': return 'border-l-green-500 bg-green-50'
      case 'info': return 'border-l-blue-500 bg-blue-50'
      case 'alert': return 'border-l-red-500 bg-red-50'
      default: return 'border-l-gray-500 bg-gray-50'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===== WELCOME HEADER ===== */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {getGreeting()}, {user?.name || 'Farmer'}! 👋
              </h1>
              <p className="text-gray-600 mt-1">Here's what's happening on your farm today</p>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                to="/ai-assistant"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                <span className="mr-2">🤖</span>
                Ask AI
              </Link>
            </div>
          </div>
        </div>

        {/* ===== STATS ROW ===== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Crops</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">🌾</div>
            </div>
            <p className="text-xs text-green-600 mt-2">+1 from last month</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Farm Size</p>
                <p className="text-2xl font-bold text-gray-900">10 <span className="text-sm font-normal text-gray-500">acres</span></p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">🏞️</div>
            </div>
            <p className="text-xs text-gray-500 mt-2">Irrigated: 8 acres</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Expected Yield</p>
                <p className="text-2xl font-bold text-gray-900">28 <span className="text-sm font-normal text-gray-500">q/acre</span></p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl">📈</div>
            </div>
            <p className="text-xs text-green-600 mt-2">Above average</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Income (Est.)</p>
                <p className="text-2xl font-bold text-gray-900">₹4.2L</p>
              </div>
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-2xl">💰</div>
            </div>
            <p className="text-xs text-green-600 mt-2">+12% from last season</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ===== MAIN CONTENT (2 columns) ===== */}
          <div className="lg:col-span-2 space-y-8">
            {/* ===== WEATHER CARD ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center">
                    <span className="mr-2">🌤️</span> Weather Overview
                  </h2>
                  <Link to="/weather" className="text-sm text-green-600 font-medium hover:text-green-700">
                    Full Forecast →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  {/* Current Weather */}
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <span className="text-6xl">{currentWeather.icon}</span>
                      <p className="text-4xl font-bold text-gray-900 mt-2">{currentWeather.temp}°C</p>
                      <p className="text-gray-500">{currentWeather.condition}</p>
                      <p className="text-sm text-gray-400">{currentWeather.city}</p>
                    </div>
                    <div className="h-20 w-px bg-gray-200 hidden sm:block"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-xl p-3 text-center">
                        <p className="text-xs text-blue-600">Humidity</p>
                        <p className="text-lg font-bold text-blue-700">{currentWeather.humidity}%</p>
                      </div>
                      <div className="bg-cyan-50 rounded-xl p-3 text-center">
                        <p className="text-xs text-cyan-600">Wind</p>
                        <p className="text-lg font-bold text-cyan-700">{currentWeather.wind} km/h</p>
                      </div>
                      <div className="bg-indigo-50 rounded-xl p-3 text-center">
                        <p className="text-xs text-indigo-600">Rain</p>
                        <p className="text-lg font-bold text-indigo-700">{currentWeather.rain}%</p>
                      </div>
                      <div className="bg-orange-50 rounded-xl p-3 text-center">
                        <p className="text-xs text-orange-600">UV Index</p>
                        <p className="text-lg font-bold text-orange-700">{currentWeather.uv}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 7-Day Forecast */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700 mb-4">7-Day Forecast</p>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {forecast.map((day) => (
                      <div key={day.day} className="text-center p-3 rounded-xl hover:bg-gray-50 transition-colors">
                        <p className="text-xs text-gray-500 mb-2">{day.day.slice(0, 3)}</p>
                        <span className="text-2xl">{day.icon}</span>
                        <p className="text-sm font-bold text-gray-900 mt-2">{day.high}°</p>
                        <p className="text-xs text-gray-400">{day.low}°</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ===== MY CROPS ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center">
                    <span className="mr-2">🌾</span> My Crops
                  </h2>
                  <Link to="/crops" className="text-sm text-green-600 font-medium hover:text-green-700">
                    Manage Crops →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {myCrops.map((crop) => (
                    <div key={crop.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                        {crop.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900 truncate">{crop.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            crop.status === 'Ready' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {crop.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{crop.season} • {crop.duration}</p>
                        <div className="flex items-center space-x-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${crop.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{crop.progress}%</span>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm text-gray-500">Health</p>
                        <p className={`font-semibold ${
                          crop.health === 'Excellent' ? 'text-green-600' : 'text-blue-600'
                        }`}>
                          {crop.health}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== MARKET PRICES ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center">
                    <span className="mr-2">📊</span> Market Prices
                  </h2>
                  <Link to="/market-prices" className="text-sm text-green-600 font-medium hover:text-green-700">
                    View All →
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {marketPrices.slice(0, 6).map((price) => (
                    <div key={price.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{price.icon}</span>
                        <div>
                          <h3 className="font-semibold text-gray-900">{price.crop}</h3>
                          <p className="text-xs text-gray-500">{price.market}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">₹{price.price.toLocaleString()}</p>
                        <p className={`text-sm font-medium ${
                          price.change >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {price.change >= 0 ? '↑' : '↓'} {Math.abs(price.change)}%
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== RECENT ACTIVITY ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <span className="mr-2">📋</span> Recent Activity
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                        {activity.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.action}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-400">{activity.time}</span>
                          <span className="text-xs text-gray-300">•</span>
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{activity.category}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ===== SIDEBAR (1 column) ===== */}
          <div className="space-y-8">
            {/* ===== QUICK ACTIONS ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <span className="mr-2">⚡</span> Quick Actions
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      to={action.link}
                      className="flex flex-col items-center p-4 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center text-2xl mb-2`}>
                        {action.icon}
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== NOTIFICATIONS ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center">
                    <span className="mr-2">🔔</span> Notifications
                  </h2>
                  <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">4</span>
                </div>
              </div>
              <div className="p-4 space-y-3 max-h-[400px] overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-xl border-l-4 ${getNotificationStyle(notification.type)} hover:shadow-sm transition-shadow cursor-pointer`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-xl flex-shrink-0">{notification.icon}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm">{notification.title}</h3>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-100">
                <button className="w-full text-center text-sm text-green-600 font-medium hover:text-green-700">
                  View All Notifications
                </button>
              </div>
            </div>

            {/* ===== FARMING TIP ===== */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">💡</span>
                <h3 className="font-bold text-lg">Daily Tip</h3>
              </div>
              <p className="text-green-100 text-sm leading-relaxed mb-4">
                Apply nitrogen fertilizer in split doses for better uptake and reduced losses.
                Apply 50% at sowing and remaining 50% at tillering stage for optimal results.
              </p>
              <Link
                to="/ai-assistant"
                className="inline-flex items-center text-sm font-semibold text-white hover:text-green-100 transition-colors"
              >
                Get more tips from AI →
              </Link>
            </div>

            {/* ===== PROFILE SUMMARY ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  👨‍🌾
                </div>
                <h3 className="font-bold text-lg text-gray-900">{user?.name || 'Demo Farmer'}</h3>
                <p className="text-sm text-gray-500">{user?.email || 'farmer@example.com'}</p>
                <p className="text-sm text-gray-500">{user?.phone || '+91 98765 43210'}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">{user?.state || 'Punjab'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Member Since</p>
                    <p className="font-semibold text-gray-900">Jan 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
