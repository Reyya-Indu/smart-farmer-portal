import { useState, useRef, useEffect } from 'react'
import { translations, getAIResponse } from '../data/chatResponses.js'
import VoiceAssistant from '../components/VoiceAssistant.jsx'

export default function AIAssistant() {
  const [language, setLanguage] = useState('en')
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showVoice, setShowVoice] = useState(false)
  const messagesEndRef = useRef(null)

  const t = translations[language]

  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: t.welcome,
        isUser: false,
        timestamp: new Date(),
      },
    ])
  }, [language])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const handleSend = async (text = input) => {
    if (!text.trim()) return

    const userMessage = {
      id: Date.now(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1500))

    const aiResponse = {
      id: Date.now() + 1,
      text: getAIResponse(text, language),
      isUser: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, aiResponse])
    setIsTyping(false)
  }

  const handleVoiceResult = (userText, botResponse) => {
    const userMessage = {
      id: Date.now(),
      text: userText,
      isUser: true,
      timestamp: new Date(),
    }
    const botMessage = {
      id: Date.now() + 1,
      text: botResponse,
      isUser: false,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage, botMessage])
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            AI-Powered Assistance
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            AI Farmer Assistant
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get instant answers to your farming questions powered by AI
          </p>
        </div>

        {/* ===== LANGUAGE & VOICE TOGGLE ===== */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <div className="inline-flex bg-white rounded-xl p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setLanguage('en')}
              className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                language === 'en'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => setLanguage('te')}
              className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                language === 'te'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🇮🇳 తెలుగు
            </button>
          </div>
          <button
            onClick={() => setShowVoice(!showVoice)}
            className={`inline-flex items-center px-6 py-2 rounded-xl font-medium text-sm transition-all ${
              showVoice
                ? 'bg-purple-600 text-white shadow-md'
                : 'bg-white text-purple-600 border-2 border-purple-200 hover:bg-purple-50'
            }`}
          >
            <span className="mr-2">🎤</span>
            {showVoice ? 'Hide Voice' : 'Voice Assistant'}
          </button>
        </div>

        {/* ===== VOICE ASSISTANT ===== */}
        {showVoice && (
          <div className="mb-6">
            <VoiceAssistant language={language} onResult={handleVoiceResult} />
          </div>
        )}

        {/* ===== CHAT CONTAINER ===== */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">Smart Farmer AI</h3>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                  <span className="text-sm text-green-100">{t.online}</span>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-xs text-green-100">{t.alwaysHere}</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-[450px] overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`flex items-end space-x-2 max-w-[85%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser ? 'bg-green-600' : 'bg-gray-200'
                  }`}>
                    <span className="text-sm">{message.isUser ? '👨‍🌾' : '🤖'}</span>
                  </div>
                  {/* Message Bubble */}
                  <div>
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        message.isUser
                          ? 'bg-green-600 text-white rounded-br-md'
                          : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    </div>
                    <p className={`text-xs text-gray-400 mt-1 ${message.isUser ? 'text-right' : 'text-left'}`}>
                      {formatTime(message.timestamp)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-sm">🤖</span>
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length <= 2 && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">{t.suggestedTitle}</p>
              <div className="flex flex-wrap gap-2">
                {t.quickTips.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(question)}
                    className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm border border-gray-200 hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t.placeholder}
                  rows={1}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none transition-all"
                  style={{ minHeight: '48px', maxHeight: '120px' }}
                />
              </div>
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center space-x-2"
              >
                {isTyping ? (
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    <span>{t.send}</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ===== FEATURES ===== */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {t.features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="font-bold text-gray-900 mt-3 mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* ===== INFO CARD ===== */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="flex items-start space-x-4">
            <span className="text-3xl">💡</span>
            <div>
              <h3 className="font-bold text-green-900 mb-2">
                {language === 'en' ? 'How to use AI Assistant' : 'AI అసిస్టెంట్‌ను ఎలా ఉపయోగించాలి'}
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>{language === 'en' ? 'Ask questions about crops, weather, prices, schemes' : 'పంటలు, వాతావరణం, ధరలు, పథకాల గురించి ప్రశ్నలు అడగండి'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>{language === 'en' ? 'Get instant AI-powered responses' : 'తక్షణ AI-ఆధారిత ప్రతిస్పందనలు పొందండి'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>{language === 'en' ? 'Switch between English and Telugu' : 'ఆంగ్లం మరియు తెలుగు మధ్య మారండి'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>{language === 'en' ? 'Use voice assistant for hands-free interaction' : 'హ్యాండ్స్-ఫ్రీ ఇంటర్యాక్షన్ కోసం వాయిస్ అసిస్టెంట్ ఉపయోగించండి'}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>{language === 'en' ? 'Use suggested questions for quick start' : 'త్వరిత ప్రారంభం కోసం సూచించిన ప్రశ్నలను ఉపయోగించండి'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
