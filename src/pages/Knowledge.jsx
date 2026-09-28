import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { articles, articleCategories } from '../data/articles'
import { Search, Clock, ArrowRight, BookOpen } from 'lucide-react'

export default function Knowledge() {
  const { t, language } = useLanguage()
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = !categoryFilter || article.category === categoryFilter
      return matchesSearch && matchesCategory
    })
  }, [search, categoryFilter])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t('knowledgeTitle')}</h1>
        <p className="text-gray-600 mt-2">{t('knowledgeSubtitle')}</p>
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
              placeholder="Search articles..."
              className="input-field pl-10"
            />
          </div>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="input-field">
            <option value="">{t('categories')}</option>
            {articleCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No articles found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map(article => (
            <div key={article.id} className="card overflow-hidden group hover:scale-[1.02] transition-transform">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-earth-100 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary-400" />
              </div>
              <div className="p-5">
                <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium">
                  {language === 'te' ? article.categoryTe : article.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
                  {language === 'te' ? article.titleTe : article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {language === 'te' ? article.excerptTe : article.excerpt}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {language === 'te' ? article.readTimeTe : article.readTime}
                  </span>
                  <Link
                    to={`/knowledge/${article.id}`}
                    className="flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:gap-2 transition-all"
                  >
                    {t('readMore')}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
