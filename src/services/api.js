// API Service Layer - Replace mock data with real API calls when backend is connected
// This module provides a clean interface for swapping between demo and production modes

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

// Helper function for API calls
async function apiCall(endpoint, options = {}) {
  try {
    const url = `${API_BASE_URL}${endpoint}`
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    // Add auth token if available
    const token = localStorage.getItem('sf_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    const response = await fetch(url, config)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'API request failed')
    }

    return data
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}

// Auth API
export const authAPI = {
  login: (credentials) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  register: (userData) => apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  getProfile: () => apiCall('/auth/profile'),
  updateProfile: (data) => apiCall('/auth/profile', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
}

// Weather API
export const weatherAPI = {
  getCurrentWeather: (location) => apiCall(`/weather/current?location=${location}`),
  getForecast: (location) => apiCall(`/weather/forecast?location=${location}`),
}

// Market API
export const marketAPI = {
  getPrices: (filters) => apiCall(`/market/prices?${new URLSearchParams(filters)}`),
  getPriceHistory: (crop) => apiCall(`/market/history?crop=${crop}`),
}

// AI API
export const aiAPI = {
  sendMessage: (message, language) => apiCall('/ai/chat', {
    method: 'POST',
    body: JSON.stringify({ message, language }),
  }),
  getSuggestions: () => apiCall('/ai/suggestions'),
}

// Disease Detection API
export const diseaseAPI = {
  detect: (imageFile) => {
    const formData = new FormData()
    formData.append('image', imageFile)
    return apiCall('/disease/detect', {
      method: 'POST',
      body: formData,
      headers: {}, // Let browser set content-type for FormData
    })
  },
}

// Admin API
export const adminAPI = {
  getStats: () => apiCall('/admin/stats'),
  getFarmers: () => apiCall('/admin/farmers'),
  deleteFarmer: (id) => apiCall(`/admin/farmers/${id}`, { method: 'DELETE' }),
  getCrops: () => apiCall('/admin/crops'),
  addCrop: (data) => apiCall('/admin/crops', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  updateCrop: (id, data) => apiCall(`/admin/crops/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  deleteCrop: (id) => apiCall(`/admin/crops/${id}`, { method: 'DELETE' }),
}

export default apiCall
