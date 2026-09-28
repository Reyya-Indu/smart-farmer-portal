import { Link } from 'react-router-dom'

const team = [
  { name: 'Dr. Rajesh Kumar', role: 'Founder & CEO', icon: '👨‍💼', desc: 'Agricultural scientist with 20+ years of experience' },
  { name: 'Priya Sharma', role: 'CTO', icon: '👩‍💻', desc: 'Expert in agri-tech solutions and AI' },
  { name: 'Amit Patel', role: 'Head of Research', icon: '👨‍🔬', desc: 'Specialist in crop science and soil health' },
  { name: 'Sunita Devi', role: 'Farmer Relations', icon: '👩‍🌾', desc: 'Bridge between technology and farmers' },
]

const values = [
  { icon: '🌱', title: 'Sustainability', desc: 'Promoting eco-friendly farming practices for future generations' },
  { icon: '🤝', title: 'Accessibility', desc: 'Making technology accessible to farmers across all regions' },
  { icon: '💡', title: 'Innovation', desc: 'Leveraging AI and data for smarter farming decisions' },
  { icon: '📈', title: 'Empowerment', desc: 'Empowering farmers with knowledge and market access' },
]

export default function About() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="section-title">About Smart Farmer</h1>
          <p className="section-subtitle mx-auto">
            We are on a mission to empower farmers with technology, information, and AI-driven insights
            for sustainable and profitable agriculture.
          </p>
        </div>

        {/* Mission */}
        <div className="card p-8 mb-12 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-5xl">🌾</span>
            <h2 className="text-2xl font-bold text-primary-900 mt-4 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To bridge the gap between agricultural research and farming practice by providing
              timely, accurate, and actionable information to every farmer. We believe that with
              the right knowledge and tools, farmers can make informed decisions that improve
              productivity, sustainability, and livelihoods.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card p-6 text-center">
                <span className="text-4xl">{value.icon}</span>
                <h3 className="font-bold text-lg text-gray-900 mt-3 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card p-6 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{member.icon}</span>
                </div>
                <h3 className="font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary-600 font-medium">{member.role}</p>
                <p className="text-sm text-gray-500 mt-2">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="card p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-bold text-primary-600">2.5L+</p>
              <p className="text-gray-600">Farmers Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600">500+</p>
              <p className="text-gray-600">Mandis Connected</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600">150+</p>
              <p className="text-gray-600">Crops Covered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary-600">28</p>
              <p className="text-gray-600">States Reached</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join the Smart Farmer Community</h2>
          <p className="text-gray-600 mb-6">Be part of the agricultural revolution in India</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-primary">Get Started Today</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
