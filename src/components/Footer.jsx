import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🌾</span>
              <span className="font-bold text-xl">Smart Farmer</span>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              Empowering farmers with technology, information, and AI-driven insights for sustainable agriculture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-200 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/crops" className="text-primary-200 hover:text-white transition-colors text-sm">Crop Information</Link></li>
              <li><Link to="/weather" className="text-primary-200 hover:text-white transition-colors text-sm">Weather Forecast</Link></li>
              <li><Link to="/market-prices" className="text-primary-200 hover:text-white transition-colors text-sm">Market Prices</Link></li>
              <li><Link to="/government-schemes" className="text-primary-200 hover:text-white transition-colors text-sm">Govt Schemes</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/ai-assistant" className="text-primary-200 hover:text-white transition-colors text-sm">AI Assistant</Link></li>
              <li><Link to="/dashboard" className="text-primary-200 hover:text-white transition-colors text-sm">Dashboard</Link></li>
              <li><Link to="/about" className="text-primary-200 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-200 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-primary-200 text-sm">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <span>info@smartfarmer.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <span>+91 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center text-primary-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Smart Farmer Information Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
