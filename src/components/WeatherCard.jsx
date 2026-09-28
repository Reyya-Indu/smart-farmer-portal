export default function WeatherCard({ weather }) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-900">{weather.city}</h3>
          <p className="text-sm text-gray-500">{weather.date}</p>
        </div>
        <span className="text-4xl">{weather.icon}</span>
      </div>
      <div className="text-center mb-4">
        <p className="text-4xl font-bold text-gray-900">{weather.temp}°C</p>
        <p className="text-gray-500">{weather.condition}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-gray-500">Humidity</p>
          <p className="font-semibold text-gray-700">{weather.humidity}%</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-gray-500">Wind</p>
          <p className="font-semibold text-gray-700">{weather.wind} km/h</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-gray-500">Rain</p>
          <p className="font-semibold text-gray-700">{weather.rain}%</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-gray-500">UV Index</p>
          <p className="font-semibold text-gray-700">{weather.uv}</p>
        </div>
      </div>
    </div>
  )
}
