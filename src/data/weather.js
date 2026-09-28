export const currentWeather = {
  city: 'New Delhi',
  date: 'September 27, 2026',
  temp: 32,
  condition: 'Partly Cloudy',
  icon: '⛅',
  humidity: 65,
  wind: 12,
  rain: 20,
  uv: 7,
  pressure: 1012,
  visibility: 10,
  sunrise: '6:12 AM',
  sunset: '6:18 PM',
}

export const forecast = [
  { day: 'Today', icon: '⛅', high: 33, low: 24, condition: 'Partly Cloudy', humidity: 65, wind: 12, rain: 20 },
  { day: 'Tomorrow', icon: '🌧️', high: 29, low: 23, condition: 'Light Rain', humidity: 78, wind: 18, rain: 65 },
  { day: 'Monday', icon: '🌧️', high: 28, low: 22, condition: 'Moderate Rain', humidity: 82, wind: 22, rain: 80 },
  { day: 'Tuesday', icon: '⛅', high: 31, low: 23, condition: 'Partly Cloudy', humidity: 60, wind: 10, rain: 15 },
  { day: 'Wednesday', icon: '☀️', high: 34, low: 24, condition: 'Sunny', humidity: 55, wind: 8, rain: 5 },
  { day: 'Thursday', icon: '☀️', high: 35, low: 25, condition: 'Sunny', humidity: 50, wind: 6, rain: 0 },
  { day: 'Friday', icon: '⛅', high: 33, low: 24, condition: 'Partly Cloudy', humidity: 58, wind: 10, rain: 10 },
]

export const weatherAlerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Heavy Rainfall Alert',
    message: 'Heavy rainfall expected in the next 48 hours. Ensure proper drainage in fields and avoid irrigation.',
    severity: 'Moderate',
    validUntil: 'September 29, 2026',
    icon: '🌧️',
  },
  {
    id: 2,
    type: 'info',
    title: 'Temperature Drop',
    message: 'Temperature expected to drop by 3-4°C over the next two days. Protect sensitive crops.',
    severity: 'Low',
    validUntil: 'September 28, 2026',
    icon: '🌡️',
  },
  {
    id: 3,
    type: 'success',
    title: 'Favorable Conditions',
    message: 'Weather conditions are favorable for sowing Rabi crops. Plan your sowing schedule accordingly.',
    severity: 'Info',
    validUntil: 'October 5, 2026',
    icon: '🌱',
  },
  {
    id: 4,
    type: 'alert',
    title: 'Strong Wind Warning',
    message: 'Wind speed may reach 25-30 km/h tomorrow. Secure any loose structures and avoid spraying pesticides.',
    severity: 'Moderate',
    validUntil: 'September 28, 2026',
    icon: '💨',
  },
]

export const farmingAdvice = [
  {
    id: 1,
    icon: '💧',
    title: 'Irrigation Advisory',
    advice: 'Delay irrigation for the next 2-3 days due to expected rainfall. Monitor soil moisture levels before irrigating.',
    priority: 'High',
    category: 'Water Management',
  },
  {
    id: 2,
    icon: '🌱',
    title: 'Sowing Recommendation',
    advice: 'Current weather is ideal for sowing wheat and other Rabi crops. Ensure proper seed treatment before sowing.',
    priority: 'Medium',
    category: 'Crop Planning',
  },
  {
    id: 3,
    icon: '🐛',
    title: 'Pest Management',
    advice: 'High humidity may increase pest activity. Regularly monitor crops for pests and diseases. Use pheromone traps for monitoring.',
    priority: 'High',
    category: 'Crop Protection',
  },
  {
    id: 4,
    icon: '🧪',
    title: 'Fertilizer Application',
    advice: 'Avoid applying fertilizers just before heavy rainfall. Wait for clear weather to prevent nutrient runoff.',
    priority: 'Medium',
    category: 'Nutrition',
  },
  {
    id: 5,
    icon: '🌾',
    title: 'Harvest Planning',
    advice: 'Plan harvest of mature crops before the expected rainfall. Ensure proper drying and storage facilities.',
    priority: 'Low',
    category: 'Harvest',
  },
  {
    id: 6,
    icon: '🛡️',
    title: 'Crop Protection',
    advice: 'Strong winds may damage tall crops. Provide staking support and consider windbreaks where possible.',
    priority: 'Medium',
    category: 'Protection',
  },
]

export const hourlyForecast = [
  { time: '6 AM', temp: 24, icon: '🌅', humidity: 80 },
  { time: '9 AM', temp: 27, icon: '☀️', humidity: 70 },
  { time: '12 PM', temp: 31, icon: '☀️', humidity: 55 },
  { time: '3 PM', temp: 33, icon: '⛅', humidity: 50 },
  { time: '6 PM', temp: 30, icon: '🌤️', humidity: 60 },
  { time: '9 PM', temp: 27, icon: '🌙', humidity: 70 },
]

export const soilMoisture = [
  { region: 'North Zone', moisture: 72, status: 'Good', trend: 'up' },
  { region: 'South Zone', moisture: 58, status: 'Moderate', trend: 'down' },
  { region: 'East Zone', moisture: 81, status: 'Good', trend: 'up' },
  { region: 'West Zone', moisture: 45, status: 'Low', trend: 'down' },
  { region: 'Central Zone', moisture: 63, status: 'Moderate', trend: 'stable' },
]

export const uvIndexData = {
  current: 7,
  level: 'High',
  description: 'Take extra precautions during midday hours',
  recommendations: [
    'Wear protective clothing',
    'Use sunscreen SPF 30+',
    'Work in fields during early morning or late evening',
    'Stay hydrated',
  ],
}

export const windData = {
  speed: 12,
  direction: 'North-East',
  gusts: 18,
  forecast: 'Increasing to 25 km/h by tomorrow evening',
}
