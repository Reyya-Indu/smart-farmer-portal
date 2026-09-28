export default function PriceCard({ price }) {
  const isPositive = price.change >= 0

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{price.icon}</span>
          <div>
            <h3 className="font-bold text-gray-900">{price.crop}</h3>
            <p className="text-xs text-gray-500">{price.market}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {isPositive ? '▲' : '▼'} {Math.abs(price.change)}%
        </span>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900">₹{price.price.toLocaleString()}</p>
          <p className="text-xs text-gray-500">per quintal</p>
        </div>
        <div className="text-right text-xs text-gray-500">
          <p>Min: ₹{price.min.toLocaleString()}</p>
          <p>Max: ₹{price.max.toLocaleString()}</p>
        </div>
      </div>
    </div>
  )
}
