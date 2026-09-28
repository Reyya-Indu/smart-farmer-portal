import { Link } from 'react-router-dom'

export default function CropCard({ crop }) {
  return (
    <Link to={`/crops/${crop.id}`} className="group block">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
        {/* Header with Icon */}
        <div className="h-40 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-200 transition-colors relative">
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{crop.icon}</span>
          <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${
            crop.category === 'Kharif' ? 'bg-amber-100 text-amber-700' :
            crop.category === 'Rabi' ? 'bg-blue-100 text-blue-700' :
            'bg-green-100 text-green-700'
          }`}>
            {crop.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
            {crop.name}
          </h3>
          <p className="text-xs text-gray-500 italic mb-4">{crop.scientificName}</p>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Season:</span>
              <span className="font-medium text-gray-700">{crop.season}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Duration:</span>
              <span className="font-medium text-gray-700">{crop.duration}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Water Need:</span>
              <span className="font-medium text-gray-700">{crop.water}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Yield:</span>
              <span className="font-medium text-green-600">{crop.yield}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm text-gray-500">Market Price</span>
            <span className="text-sm font-bold text-green-600">{crop.marketPrice.split(' - ')[0]}+</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
