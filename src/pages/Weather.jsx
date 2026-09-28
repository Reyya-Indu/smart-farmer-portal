import { currentWeather, forecast, weatherAlerts, farmingAdvice, hourlyForecast, soilMoisture, uvIndexData, windData } from '../data/weather.js'

export default function Weather() {
  const getAlertStyle = (type) => {
    switch (type) {
      case 'warning': return 'border-l-amber-500 bg-amber-50'
      case 'success': return 'border-l-green-500 bg-green-50'
      case 'info': return 'border-l-blue-500 bg-blue-50'
      case 'alert': return 'border-l-red-500 bg-red-50'
      default: return 'border-l-gray-500 bg-gray-50'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-700'
      case 'Medium': return 'bg-amber-100 text-amber-700'
      case 'Low': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Weather Updates
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Weather Forecast
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accurate weather predictions and farming advisories to help you plan your agricultural activities
          </p>
        </div>

        {/* ===== CURRENT WEATHER ===== */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* Left - Main Info */}
              <div className="text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">📍</span>
                  <span className="text-lg font-medium">{currentWeather.city}</span>
                </div>
                <p className="text-blue-100 text-sm mb-4">{currentWeather.date}</p>
                <div className="flex items-center space-x-6">
                  <span className="text-8xl">{currentWeather.icon}</span>
                  <div>
                    <p className="text-7xl font-bold">{currentWeather.temp}°C</p>
                    <p className="text-xl text-blue-100">{currentWeather.condition}</p>
                  </div>
                </div>
              </div>

              {/* Right - Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <span className="text-2xl">💧</span>
                  <p className="text-blue-100 text-xs mt-1">Humidity</p>
                  <p className="text-white font-bold text-lg">{currentWeather.humidity}%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <span className="text-2xl">💨</span>
                  <p className="text-blue-100 text-xs mt-1">Wind</p>
                  <p className="text-white font-bold text-lg">{currentWeather.wind} km/h</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <span className="text-2xl">🌧️</span>
                  <p className="text-blue-100 text-xs mt-1">Rain Chance</p>
                  <p className="text-white font-bold text-lg">{currentWeather.rain}%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <span className="text-2xl">☀️</span>
                  <p className="text-blue-100 text-xs mt-1">UV Index</p>
                  <p className="text-white font-bold text-lg">{currentWeather.uv}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <span className="text-2xl">🌡️</span>
                  <p className="text-blue-100 text-xs mt-1">Pressure</p>
                  <p className="text-white font-bold text-lg">{currentWeather.pressure} hPa</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <span className="text-2xl">👁️</span>
                  <p className="text-blue-100 text-xs mt-1">Visibility</p>
                  <p className="text-white font-bold text-lg">{currentWeather.visibility} km</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <span className="text-2xl">🌅</span>
                  <p className="text-blue-100 text-xs mt-1">Sunrise</p>
                  <p className="text-white font-bold text-lg">{currentWeather.sunrise}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <span className="text-2xl">🌇</span>
                  <p className="text-blue-100 text-xs mt-1">Sunset</p>
                  <p className="text-white font-bold text-lg">{currentWeather.sunset}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ===== MAIN CONTENT (2 columns) ===== */}
          <div className="lg:col-span-2 space-y-8">
            {/* ===== 5-DAY FORECAST ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <span className="mr-2">📅</span> 5-Day Forecast
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                  {forecast.slice(0, 5).map((day) => (
                    <div key={day.day} className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-4 text-center border border-blue-100 hover:shadow-md transition-shadow">
                      <p className="text-sm font-semibold text-gray-900 mb-3">{day.day}</p>
                      <span className="text-4xl block mb-3">{day.icon}</span>
                      <p className="text-2xl font-bold text-gray-900">{day.high}°</p>
                      <p className="text-sm text-gray-500">{day.low}°</p>
                      <div className="mt-3 pt-3 border-t border-gray-100 space-y-1">
                        <p className="text-xs text-gray-500">{day.condition}</p>
                        <div className="flex items-center justify-center space-x-1 text-xs">
                          <span>💧</span>
                          <span className="text-gray-600">{day.humidity}%</span>
                        </div>
                        <div className="flex items-center justify-center space-x-1 text-xs">
                          <span>🌧️</span>
                          <span className="text-gray-600">{day.rain}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== HOURLY FORECAST ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <span className="mr-2">⏰</span> Today's Hourly Forecast
                </h2>
              </div>
              <div className="p-6">
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {hourlyForecast.map((hour) => (
                    <div key={hour.time} className="flex-shrink-0 text-center p-4 bg-gray-50 rounded-xl min-w-[100px]">
                      <p className="text-sm text-gray-500 mb-2">{hour.time}</p>
                      <span className="text-3xl block mb-2">{hour.icon}</span>
                      <p className="text-lg font-bold text-gray-900">{hour.temp}°</p>
                      <p className="text-xs text-blue-600">💧 {hour.humidity}%</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== WEATHER ALERTS ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center">
                    <span className="mr-2">⚠️</span> Weather Alerts
                  </h2>
                  <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">4 Active</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {weatherAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-5 rounded-xl border-l-4 ${getAlertStyle(alert.type)} hover:shadow-sm transition-shadow`}
                  >
                    <div className="flex items-start space-x-4">
                      <span className="text-3xl flex-shrink-0">{alert.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-gray-900">{alert.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            alert.severity === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                            alert.severity === 'High' ? 'bg-red-100 text-red-700' :
                            alert.severity === 'Low' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {alert.severity}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{alert.message}</p>
                        <p className="text-xs text-gray-400">Valid until: {alert.validUntil}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== FARMING ADVICE ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <span className="mr-2">🌾</span> Farming Advisory
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {farmingAdvice.map((advice) => (
                    <div key={advice.id} className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <span className="text-3xl flex-shrink-0">{advice.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-gray-900">{advice.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(advice.priority)}`}>
                              {advice.priority}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{advice.advice}</p>
                          <span className="inline-block mt-3 text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">
                            {advice.category}
                          </span>
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
            {/* ===== UV INDEX ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <span className="mr-2">☀️</span> UV Index
                </h2>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-4xl font-bold text-white">{uvIndexData.current}</span>
                  </div>
                  <p className="font-bold text-gray-900">{uvIndexData.level}</p>
                  <p className="text-sm text-gray-500">{uvIndexData.description}</p>
                </div>
                <div className="space-y-2">
                  {uvIndexData.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <span className="w-5 h-5 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs">✓</span>
                      <span className="text-gray-600">{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ===== WIND CONDITIONS ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <span className="mr-2">💨</span> Wind Conditions
                </h2>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                    <div className="absolute inset-2 border-4 border-blue-200 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-4xl block">🧭</span>
                        <p className="text-sm font-bold text-gray-900">{windData.speed} km/h</p>
                        <p className="text-xs text-gray-500">{windData.direction}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Current Speed</span>
                    <span className="font-bold text-gray-900">{windData.speed} km/h</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-600">Gusts</span>
                    <span className="font-bold text-gray-900">{windData.gusts} km/h</span>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-xs text-blue-700">{windData.forecast}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== SOIL MOISTURE ===== */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <span className="mr-2">🌱</span> Soil Moisture by Region
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {soilMoisture.map((region) => (
                  <div key={region.region} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{region.region}</span>
                      <span className="text-sm font-bold text-gray-700">{region.moisture}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          region.moisture >= 70 ? 'bg-green-500' :
                          region.moisture >= 50 ? 'bg-amber-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${region.moisture}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                        region.status === 'Good' ? 'bg-green-100 text-green-700' :
                        region.status === 'Moderate' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {region.status}
                      </span>
                      <span className="text-xs text-gray-500">
                        {region.trend === 'up' ? '↑ Rising' : region.trend === 'down' ? '↓ Falling' : '→ Stable'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== QUICK TIPS ===== */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">💡</span>
                <h3 className="font-bold text-lg">Weather Tips</h3>
              </div>
              <ul className="space-y-3 text-sm text-blue-100">
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Check weather forecast daily before planning field activities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Avoid pesticide spraying during rainy or windy conditions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Use weather data to optimize irrigation scheduling</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span>•</span>
                  <span>Store harvested produce in dry conditions to prevent spoilage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
