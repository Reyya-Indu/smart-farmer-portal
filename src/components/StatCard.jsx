export default function StatCard({ icon, title, value, subtitle, color = 'primary' }) {
  const colorMap = {
    primary: 'bg-primary-100 text-primary-700',
    blue: 'bg-blue-100 text-blue-700',
    amber: 'bg-amber-100 text-amber-700',
    purple: 'bg-purple-100 text-purple-700',
    rose: 'bg-rose-100 text-rose-700',
    cyan: 'bg-cyan-100 text-cyan-700',
  }

  return (
    <div className="card p-6">
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${colorMap[color] || colorMap.primary}`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}
