// Application constants

export const APP_NAME = 'Smart Farmer'
export const APP_TAGLINE = 'Smart Information for Better Farming'

export const CROP_TYPES = [
  'Cereal', 'Fiber', 'Oilseed', 'Spice', 'Vegetable', 'Fruit', 'Cash Crop', 'Legume'
]

export const SEASONS = ['Kharif', 'Rabi', 'Zaid', 'Year-round']

export const SOIL_TYPES = [
  'Clay Loam', 'Loamy', 'Sandy Loam', 'Black Cotton Soil', 'Red', 'Alluvial'
]

export const NOTIFICATION_TYPES = {
  weather: { icon: 'CloudRain', color: 'blue' },
  crop: { icon: 'Sprout', color: 'green' },
  scheme: { icon: 'Landmark', color: 'purple' },
  market: { icon: 'TrendingUp', color: 'orange' },
  announcement: { icon: 'Megaphone', color: 'red' },
}

export const PRIORITY_COLORS = {
  high: 'bg-red-100 text-red-800 border-red-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  low: 'bg-green-100 text-green-800 border-green-200',
}

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
]

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Telangana', 'Tamil Nadu', 'Karnataka',
  'Maharashtra', 'Punjab', 'Haryana', 'Uttar Pradesh',
  'Rajasthan', 'Gujarat', 'Madhya Pradesh', 'Bihar',
  'West Bengal', 'Odisha', 'Kerala', 'Assam',
]
