import { useParams, Link, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { articles } from '../data/articles'
import { ArrowLeft, Clock, User, BookOpen } from 'lucide-react'

export default function KnowledgeArticle() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, language } = useLanguage()
  const article = articles.find(a => a.id === id)

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Article not found</h2>
        <Link to="/knowledge" className="btn-primary mt-4 inline-block">Back to Articles</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        {t('back')}
      </button>

      <article className="card p-8">
        {/* Header */}
        <div className="mb-8">
          <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
            {language === 'te' ? article.categoryTe : article.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            {language === 'te' ? article.titleTe : article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {language === 'te' ? article.authorTe : article.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {language === 'te' ? article.readTimeTe : article.readTime}
            </span>
            <span>{article.createdAt}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {(language === 'te' ? article.contentTe : article.content).split('\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={idx} className="text-xl font-semibold text-gray-900 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>
            }
            if (paragraph.startsWith('- ')) {
              return <li key={idx} className="ml-4 text-gray-700">{paragraph.replace('- ', '')}</li>
            }
            if (paragraph.match(/^\d+\./)) {
              return <li key={idx} className="ml-4 text-gray-700 list-decimal">{paragraph.replace(/^\d+\.\s/, '')}</li>
            }
            if (paragraph.trim()) {
              return <p key={idx} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
            }
            return null
          })}
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between">
          <Link to="/knowledge" className="btn-secondary">
            {t('back')} to Articles
          </Link>
        </div>
      </article>
    </div>
  )
}
