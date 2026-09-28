// Mock Services - Demo data services that simulate API responses
// Replace these with real API calls when backend is connected

import { crops } from '../data/crops'
import { diseases } from '../data/diseases'
import { articles } from '../data/articles'
import { schemes } from '../data/schemes'
import { notifications } from '../data/notifications'
import { marketPrices, priceHistory } from '../data/marketPrices'
import { weatherData } from '../data/weather'
import { fertilizerData } from '../data/fertilizer'

// Simulate network delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms))

// Mock Auth Service
export const mockAuthService = {
  async login(credentials) {
    await delay(800)
    // Demo: accept any credentials
    const user = {
      id: 'user-' + Date.now(),
      name: 'Demo Farmer',
      email: credentials.email || 'demo@example.com',
      mobile: credentials.mobile || '9876543210',
      district: 'Krishna',
      state: 'Andhra Pradesh',
      language: 'en',
      crops: ['Rice', 'Tomato', 'Cotton'],
      role: 'farmer',
      createdAt: new Date(),
    }
    return { user, token: 'demo-jwt-token-' + Date.now() }
  },

  async register(userData) {
    await delay(1000)
    const user = {
      id: 'user-' + Date.now(),
      ...userData,
      role: 'farmer',
      createdAt: new Date(),
    }
    return { user, token: 'demo-jwt-token-' + Date.now() }
  },

  async getProfile() {
    await delay(300)
    const stored = localStorage.getItem('sf_user')
    return stored ? JSON.parse(stored) : null
  },
}

// Mock Weather Service
export const mockWeatherService = {
  async getCurrentWeather(location) {
    await delay(600)
    return weatherData.current
  },

  async getForecast(location) {
    await delay(600)
    return weatherData.forecast
  },

  async getFarmingAdvice(location) {
    await delay(400)
    return weatherData.farmingAdvice
  },
}

// Mock Market Service
export const mockMarketService = {
  async getPrices(filters = {}) {
    await delay(700)
    let results = [...marketPrices]
    if (filters.crop) {
      results = results.filter(p => p.crop.toLowerCase().includes(filters.crop.toLowerCase()))
    }
    if (filters.market) {
      results = results.filter(p => p.market.toLowerCase().includes(filters.market.toLowerCase()))
    }
    return results
  },

  async getPriceHistory(crop) {
    await delay(500)
    return priceHistory
  },
}

// Mock AI Service
export const mockAIService = {
  async sendMessage(message, language = 'en') {
    await delay(1500)
    
    // Simple keyword-based responses for demo
    const responses = {
      irrigation: language === 'te' 
        ? "వరి సారీపోసణ: వరికి సగటు పంట దశలో 2-5 సెం.మీ నీటి స్థాయి నిర్వహించండి. పూత దశలో తగినంత నీరు ఇవ్వండి. వేసవిలో వేర్లు ఎండిపోకుండా చూసుకోండి."
        : "Rice Irrigation: Maintain 2-5 cm water level during vegetative stage. Ensure adequate water during flowering. In summer, keep roots moist.",
      disease: language === 'te'
        ? "పంట వ్యాధుల నివారణ: నిరోధక రకాలను ఉపయోగించండి, పంట భ్రమణం చేయండి, సరైన అంతరం నిర్వహించండి. వ్యాధి లక్షణాలు కనిపిస్తే సాగు నిపుణులను సంప్రదించండి."
        : "Crop Disease Prevention: Use resistant varieties, practice crop rotation, maintain proper spacing. Consult agricultural experts if symptoms appear.",
      soil: language === 'te'
        ? "నేల ఆరోగ్యం: ప్రతి 2-3 సంవత్సరాలకు నేలను పరీక్షించండి. సేంద్రీయ ఎరువులు మరియు కంపోస్ట్ ఉపయోగించండి. పంట భ్రమణం చేయండి."
        : "Soil Health: Test soil every 2-3 years. Use organic fertilizers and compost. Practice crop rotation.",
      default: language === 'te'
        ? "మీ ప్రశ్నకు ధన్యవాదాలు. మేము సాధారణ వ్యవసాయ సమాచారాన్ని అందిస్తున్నాము. మరింత సహాయం కోసం స్థానిక వ్యవసాయ కార్యాలయాన్ని సంప్రదించండి."
        : "Thank you for your question. We provide general agricultural information. For more specific help, please consult your local agriculture office."
    }

    const lowerMsg = message.toLowerCase()
    let response = responses.default
    if (lowerMsg.includes('irrigate') || lowerMsg.includes('water') || lowerMsg.includes('సారీపోసణ') || lowerMsg.includes('నీరు')) {
      response = responses.irrigation
    } else if (lowerMsg.includes('disease') || lowerMsg.includes('వ్యాధి') || lowerMsg.includes('ఆకు')) {
      response = responses.disease
    } else if (lowerMsg.includes('soil') || lowerMsg.includes('నేల') || lowerMsg.includes('fertilizer') || lowerMsg.includes('ఎరువు')) {
      response = responses.soil
    }

    return {
      response,
      timestamp: new Date(),
    }
  },

  getSuggestions() {
    return [
      "How can I improve soil health?",
      "What are common rice diseases?",
      "What should I check before spraying pesticides?",
      "నా పంటకు వర్షం వల్ల ఎలాంటి జాగ్రత్తలు తీసుకోవాలి?",
    ]
  },
}

// Mock Disease Detection Service
export const mockDiseaseService = {
  async detect(imageFile) {
    await delay(3000)
    
    // Simulate detection results
    const possibleDiseases = [
      { name: "Leaf Blight", confidence: 85, crop: "Rice" },
      { name: "Powdery Mildew", confidence: 72, crop: "Chilli" },
      { name: "Bacterial Blight", confidence: 68, crop: "Cotton" },
    ]
    
    const result = possibleDiseases[Math.floor(Math.random() * possibleDiseases.length)]
    const diseaseInfo = diseases.find(d => d.name.toLowerCase().includes(result.name.toLowerCase())) || diseases[0]
    
    return {
      disease: diseaseInfo,
      confidence: result.confidence,
      crop: result.crop,
      timestamp: new Date(),
    }
  },
}

// Mock Data Service
export const mockDataService = {
  getCrops: () => crops,
  getCropById: (id) => crops.find(c => c.id === id),
  getDiseases: () => diseases,
  getDiseaseById: (id) => diseases.find(d => d.id === id),
  getArticles: () => articles,
  getArticleById: (id) => articles.find(a => a.id === id),
  getSchemes: () => schemes,
  getNotifications: () => notifications,
  getMarketPrices: () => marketPrices,
  getWeatherData: () => weatherData,
  getFertilizerData: () => fertilizerData,
}

export default {
  auth: mockAuthService,
  weather: mockWeatherService,
  market: mockMarketService,
  ai: mockAIService,
  disease: mockDiseaseService,
  data: mockDataService,
}
