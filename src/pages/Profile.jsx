import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import { crops } from '../data/crops'
import { User, Phone, Mail, MapPin, Globe, Sprout, Edit2, Save, X } from 'lucide-react'

export default function Profile() {
  const { t, language } = useLanguage()
  const { user, updateUser } = useAuth()
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    mobile: user?.mobile || '',
    email: user?.email || '',
    district: user?.district || '',
    state: user?.state || '',
    language: user?.language || 'en',
  })

  const handleSave = () => {
    updateUser(formData)
    setEditing(false)
  }

  const recentDiseaseChecks = [
    { crop: 'Rice', disease: 'Leaf Blight', date: '2024-03-15', confidence: '85%' },
    { crop: 'Tomato', disease: 'Early Blight', date: '2024-03-10', confidence: '72%' },
  ]

  const recentAIQuestions = [
    { question: 'How often should I irrigate rice?', date: '2024-03-18' },
    { question: 'What are common cotton pests?', date: '2024-03-12' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('profile')}</h1>

      {/* Profile Card */}
      <div className="card p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-primary-600" />
            </div>
            <div>
              {editing ? (
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field text-xl font-bold"
                />
              ) : (
                <h2 className="text-2xl font-bold text-gray-900">{user?.name}</h2>
              )}
              <p className="text-gray-600">Farmer ID: {user?.id?.slice(0, 8)}</p>
            </div>
          </div>
          <div>
            {editing ? (
              <div className="flex gap-2">
                <button onClick={handleSave} className="btn-primary py-2 px-4 flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  {t('saveChanges')}
                </button>
                <button onClick={() => setEditing(false)} className="btn-outline py-2 px-4">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button onClick={() => setEditing(true)} className="btn-secondary py-2 px-4 flex items-center gap-2">
                <Edit2 className="w-4 h-4" />
                {t('editProfile')}
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">{t('mobileNumber')}</p>
                {editing ? (
                  <input type="tel" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="input-field" />
                ) : (
                  <p className="font-medium text-gray-900">{user?.mobile}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">{t('email')}</p>
                {editing ? (
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="input-field" />
                ) : (
                  <p className="font-medium text-gray-900">{user?.email}</p>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">{t('district')}, {t('state')}</p>
                {editing ? (
                  <div className="flex gap-2">
                    <input type="text" value={formData.district} onChange={(e) => setFormData({ ...formData, district: e.target.value })} className="input-field" placeholder="District" />
                    <input type="text" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className="input-field" placeholder="State" />
                  </div>
                ) : (
                  <p className="font-medium text-gray-900">{user?.district}, {user?.state}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-600">{t('preferredLanguage')}</p>
                {editing ? (
                  <select value={formData.language} onChange={(e) => setFormData({ ...formData, language: e.target.value })} className="input-field">
                    <option value="en">English</option>
                    <option value="te">Telugu</option>
                  </select>
                ) : (
                  <p className="font-medium text-gray-900">{user?.language === 'te' ? 'Telugu' : 'English'}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* My Crops */}
      <div className="card p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Sprout className="w-5 h-5 text-primary-600" />
          {t('myCropsSection')}
        </h3>
        <div className="flex flex-wrap gap-3">
          {(user?.crops || []).map((crop, idx) => (
            <span key={idx} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium">
              {crop}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Disease Checks */}
      <div className="card p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('recentDiseaseChecks')}</h3>
        <div className="space-y-3">
          {recentDiseaseChecks.map((check, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <div>
                <p className="font-medium text-gray-900">{check.crop} - {check.disease}</p>
                <p className="text-sm text-gray-600">{check.date}</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                {check.confidence}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent AI Questions */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('recentAIQuestions')}</h3>
        <div className="space-y-3">
          {recentAIQuestions.map((q, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <p className="font-medium text-gray-900">{q.question}</p>
              <span className="text-sm text-gray-600">{q.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
