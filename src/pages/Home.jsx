import { Link } from 'react-router-dom'
import { crops } from '../data/crops.js'
import { marketPrices } from '../data/prices.js'

const features = [
  {
    icon: '🌾',
    title: 'Crop Information',
    desc: 'Comprehensive database of 150+ crops with cultivation guides, season details, soil requirements, and yield expectations.',
    link: '/crops',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: '🌤️',
    title: 'Weather Forecast',
    desc: 'Accurate 7-day weather predictions, rainfall alerts, and farming advisories tailored to your region and crops.',
    link: '/weather',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: '📊',
    title: 'Market Prices',
    desc: 'Real-time mandi prices from 500+ markets across India. Track trends and make informed selling decisions.',
    link: '/market-prices',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: '🏛️',
    title: 'Government Schemes',
    desc: 'Complete information on PM-KISAN, PMFBY, KCC, and other subsidies. Check eligibility and apply online.',
    link: '/government-schemes',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: '🤖',
    title: 'AI Assistant',
    desc: 'Get instant answers to farming questions. AI-powered insights on crops, pests, soil, and best practices.',
    link: '/ai-assistant',
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: '📋',
    title: 'Dashboard',
    desc: 'Personalized dashboard to track crops, weather, prices, and farming activities all in one place.',
    link: '/dashboard',
    color: 'from-teal-500 to-green-600',
  },
]

const farmingTips = [
  {
    icon: '💧',
    title: 'Smart Irrigation',
    tip: 'Use drip irrigation to save 40-60% water while increasing crop yield by 20-50%. Schedule irrigation early morning or late evening.',
    category: 'Water Management',
  },
  {
    icon: '🌱',
    title: 'Soil Health',
    tip: 'Test your soil every 2-3 years. Maintain pH between 6.0-7.0 and add organic matter regularly for optimal fertility.',
    category: 'Soil Management',
  },
  {
    icon: '🐛',
    title: 'Pest Control',
    tip: 'Use Integrated Pest Management (IPM). Install pheromone traps and use neem-based pesticides for eco-friendly control.',
    category: 'Crop Protection',
  },
  {
    icon: '🌾',
    title: 'Crop Rotation',
    tip: 'Rotate Kharif and Rabi crops to maintain soil fertility, break pest cycles, and reduce disease incidence.',
    category: 'Planning',
  },
  {
    icon: '📊',
    title: 'Market Timing',
    tip: 'Track market prices regularly. Store produce when prices are low and sell during peak demand periods for better returns.',
    category: 'Marketing',
  },
  {
    icon: '🧪',
    title: 'Fertilizer Use',
    tip: 'Apply fertilizers based on soil test results. Use split doses of nitrogen for better absorption and reduced losses.',
    category: 'Nutrition',
  },
]

const stats = [
  { value: '2.5L+', label: 'Farmers Registered', icon: '👨‍🌾' },
  { value: '150+', label: 'Crops Covered', icon: '🌾' },
  { value: '500+', label: 'Mandis Connected', icon: '📊' },
  { value: '28', label: 'States Reached', icon: '🗺️' },
  { value: '10K+', label: 'AI Queries Daily', icon: '🤖' },
  { value: '₹50Cr+', label: 'Income Impact', icon: '💰' },
]

export default function Home() {
  const featuredCrops = crops.slice(0, 4)
  const topPrices = marketPrices.slice(0, 4)

  return (
    <div className="overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-green-800 via-emerald-700 to-teal-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-9xl animate-pulse">🌾</div>
          <div className="absolute top-40 right-20 text-7xl animate-pulse" style={{ animationDelay: '1s' }}>🌿</div>
          <div className="absolute bottom-20 left-1/4 text-8xl animate-pulse" style={{ animationDelay: '2s' }}>🌽</div>
          <div className="absolute bottom-40 right-1/3 text-6xl animate-pulse" style={{ animationDelay: '0.5s' }}>🍅</div>
          <div className="absolute top-1/3 left-1/2 text-7xl animate-pulse" style={{ animationDelay: '1.5s' }}>🥬</div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-yellow-400 mr-2">⭐</span>
                <span className="text-sm font-medium">India's #1 Smart Farming Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Empowering Farmers with
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">
                  Smart Technology
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-green-100 leading-relaxed max-w-xl">
                Your one-stop portal for crop information, weather updates, market prices,
                government schemes, and AI-powered farming assistance. Transform your farming
                with data-driven decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <span className="mr-2">🚀</span>
                  Get Started Free
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white/50 hover:bg-white/10 transition-all duration-300"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white flex items-center justify-center text-xs">👨‍🌾</div>
                    <div className="w-8 h-8 bg-emerald-400 rounded-full border-2 border-white flex items-center justify-center text-xs">👩‍🌾</div>
                    <div className="w-8 h-8 bg-teal-400 rounded-full border-2 border-white flex items-center justify-center text-xs">🧑‍🌾</div>
                  </div>
                  <span className="text-sm text-green-200">2.5L+ Farmers</span>
                </div>
                <div className="h-8 w-px bg-white/30"></div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-green-200">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right Content - Floating Cards */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      🌾
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">Wheat Crop</h3>
                      <p className="text-green-200 text-sm">Rabi Season • Ready for Harvest</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-green-200 text-xs">Expected Yield</p>
                      <p className="text-white font-bold text-lg">28 q/acre</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-green-200 text-xs">Market Price</p>
                      <p className="text-white font-bold text-lg">₹2,150/q</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-green-200 text-xs">Weather</p>
                      <p className="text-white font-bold text-lg">☀️ 32°C</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-green-200 text-xs">Soil Moisture</p>
                      <p className="text-white font-bold text-lg">68%</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1 */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">📈</span>
                    <div>
                      <p className="text-xs text-gray-500">Price Trend</p>
                      <p className="text-sm font-bold text-green-600">+2.3% ↑</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🤖</span>
                    <div>
                      <p className="text-xs text-gray-500">AI Insight</p>
                      <p className="text-sm font-bold text-gray-800">Optimal sowing time!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ===== STATISTICS SECTION ===== */}
      <section className="py-16 bg-white relative -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <p className="text-2xl sm:text-3xl font-extrabold text-green-700">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Everything You Need to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> Farm Smarter</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools and information to help you make better farming decisions and maximize your yields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Top Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}></div>

                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.desc}
                </p>
                <span className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700">
                  Explore
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FARMING TIPS SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
              Expert Advice
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Daily Farming
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500"> Tips</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical tips from agricultural experts to improve your farming practices and boost productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {farmingTips.map((tip, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{tip.icon}</span>
                  <span className="px-3 py-1 bg-white/80 text-amber-700 rounded-full text-xs font-semibold">
                    {tip.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/ai-assistant"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className="mr-2">🤖</span>
              Ask AI Assistant for More Tips
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MARKET PRICES PREVIEW ===== */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                Live Market Data
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                Today's Market Prices
              </h2>
              <p className="text-gray-600">Latest mandi rates for major crops</p>
            </div>
            <Link
              to="/market-prices"
              className="mt-4 md:mt-0 inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View All Prices
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPrices.map((price) => (
              <div
                key={price.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{price.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{price.crop}</h3>
                    <p className="text-xs text-gray-500">{price.market}</p>
                  </div>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-2xl font-extrabold text-gray-900">₹{price.price.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">per quintal</p>
                  </div>
                  <span className={`px-2 py-1 rounded-lg text-sm font-bold ${
                    price.change >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {price.change >= 0 ? '↑' : '↓'} {Math.abs(price.change)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR CROPS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                Crop Database
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                Popular Crops
              </h2>
              <p className="text-gray-600">Essential crop information for this season</p>
            </div>
            <Link
              to="/crops"
              className="mt-4 md:mt-0 inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
            >
              View All Crops
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCrops.map((crop) => (
              <Link
                key={crop.id}
                to="/crops"
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-40 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center group-hover:from-green-200 group-hover:to-emerald-200 transition-colors">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{crop.icon}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{crop.name}</h3>
                  <p className="text-xs text-gray-500 mb-3 italic">{crop.scientificName}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{crop.season}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      crop.category === 'Kharif' ? 'bg-amber-100 text-amber-700' :
                      crop.category === 'Rabi' ? 'bg-blue-100 text-blue-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {crop.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION SECTION ===== */}
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl">🌾</div>
          <div className="absolute bottom-10 right-10 text-9xl">🌿</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px]">🚜</div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            Join the Revolution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Transform Your
            <span className="block text-yellow-300">Farming Future?</span>
          </h2>
          <p className="text-lg sm:text-xl text-green-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 2.5 lakh+ farmers who are using Smart Farmer Portal to increase productivity,
            reduce costs, and earn better incomes. Start your journey today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-green-700 font-bold text-lg rounded-xl hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <span className="mr-2">🚀</span>
              Create Free Account
            </Link>
            <Link
              to="/ai-assistant"
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white/50 hover:bg-white/10 transition-all duration-300"
            >
              <span className="mr-2">🤖</span>
              Try AI Assistant
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-green-200">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Free Forever</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Available in Regional Languages</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-4xl">🌾</span>
                <span className="font-bold text-2xl">Smart Farmer</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering farmers with technology, information, and AI-driven insights for sustainable agriculture.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span>📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span>🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span>📸</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span>▶️</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/crops" className="text-gray-400 hover:text-white transition-colors">Crop Information</Link></li>
                <li><Link to="/weather" className="text-gray-400 hover:text-white transition-colors">Weather Forecast</Link></li>
                <li><Link to="/market-prices" className="text-gray-400 hover:text-white transition-colors">Market Prices</Link></li>
                <li><Link to="/government-schemes" className="text-gray-400 hover:text-white transition-colors">Govt Schemes</Link></li>
                <li><Link to="/ai-assistant" className="text-gray-400 hover:text-white transition-colors">AI Assistant</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                <li><Link to="/dashboard" className="text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link></li>
                <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Register</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="text-gray-400">info@smartfarmer.com</p>
                    <p className="text-gray-400">support@smartfarmer.com</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="text-gray-400">+91 1800-XXX-XXXX</p>
                    <p className="text-gray-400">Toll Free Helpline</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-xl">📍</span>
                  <p className="text-gray-400">Krishi Bhawan, New Delhi - 110001</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Smart Farmer Information Portal. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
