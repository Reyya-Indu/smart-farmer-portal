import { useState, useMemo } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { schemes, schemeCategories } from '../data/schemes'
import { Search, ExternalLink, FileText, Users, CheckCircle, AlertCircle } from 'lucide-react'

export default function Schemes() {
  const { t, language } = useLanguage()
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [expandedScheme, setExpandedScheme] = useState(null)

  const filteredSchemes = useMemo(() => {
    return schemes.filter(scheme => {
      const matchesSearch = scheme.name.toLowerCase().includes(search.toLowerCase()) ||
        scheme.description.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = !categoryFilter || scheme.category === categoryFilter
      return matchesSearch && matchesCategory
    })
  }, [search, categoryFilter])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('schemesTitle')}</h1>
        <p className="text-gray-600 mt-2">{t('schemesSubtitle')}</p>
        <div className="flex items-center gap-2 mt-2 text-amber-600">
          <AlertCircle className="w-4 h-4" />
          <p className="text-sm">{t('schemesDisclaimer')}</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search schemes..."
              className="input-field pl-10"
            />
          </div>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="input-field">
            <option value="">All Categories</option>
            {schemeCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Schemes List */}
      <div className="space-y-4">
        {filteredSchemes.map(scheme => (
          <div key={scheme.id} className="card overflow-hidden">
            <div
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedScheme(expandedScheme === scheme.id ? null : scheme.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {language === 'te' ? scheme.nameTe : scheme.name}
                    </h3>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                      {language === 'te' ? scheme.categoryTe : scheme.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {language === 'te' ? scheme.descriptionTe : scheme.description}
                  </p>
                </div>
                <span className="text-primary-600 font-medium">
                  {expandedScheme === scheme.id ? 'Less' : 'More'}
                </span>
              </div>
            </div>

            {expandedScheme === scheme.id && (
              <div className="border-t border-gray-100 p-6 bg-gray-50 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Eligibility */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      {t('eligibility')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'te' ? scheme.eligibilityTe : scheme.eligibility}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {t('benefits')}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'te' ? scheme.benefitsTe : scheme.benefits}
                    </p>
                  </div>

                  {/* Documents */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-purple-500" />
                      {t('requiredDocuments')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {(language === 'te' ? scheme.documentsTe : scheme.documents).map((doc, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How to Apply */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t('howToApply')}</h4>
                    <p className="text-sm text-gray-600">
                      {language === 'te' ? scheme.applicationProcessTe : scheme.applicationProcess}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a
                    href={scheme.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    {t('officialWebsite')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No schemes found matching your search.</p>
        </div>
      )}
    </div>
  )
}
