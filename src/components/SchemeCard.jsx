export default function SchemeCard({ scheme }) {
  return (
    <div className="card p-6">
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
          <span className="text-2xl">{scheme.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 mb-1">{scheme.name}</h3>
          <p className="text-sm text-gray-600 mb-3">{scheme.description}</p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-primary-600 font-medium">Eligibility:</span>
              <span className="text-gray-600">{scheme.eligibility}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-primary-600 font-medium">Benefit:</span>
              <span className="text-gray-600">{scheme.benefit}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-primary-600 font-medium">Deadline:</span>
              <span className="text-gray-600">{scheme.deadline}</span>
            </div>
          </div>
          <button className="mt-4 text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  )
}
