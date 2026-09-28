export const adminCrops = [
  { id: 1, name: 'Rice (Paddy)', scientificName: 'Oryza sativa', season: 'Kharif', status: 'Active', icon: '🌾' },
  { id: 2, name: 'Cotton', scientificName: 'Gossypium hirsutum', season: 'Kharif', status: 'Active', icon: '☁️' },
  { id: 3, name: 'Tomato', scientificName: 'Solanum lycopersicum', season: 'Year-round', status: 'Active', icon: '🍅' },
  { id: 4, name: 'Maize (Corn)', scientificName: 'Zea mays', season: 'Kharif', status: 'Active', icon: '🌽' },
  { id: 5, name: 'Groundnut', scientificName: 'Arachis hypogaea', season: 'Kharif', status: 'Inactive', icon: '🥜' },
  { id: 6, name: 'Chilli', scientificName: 'Capsicum annuum', season: 'Year-round', status: 'Active', icon: '🌶️' },
]

export const adminSchemes = [
  { id: 1, name: 'PM-KISAN', ministry: 'Ministry of Agriculture', benefit: '₹6,000/year', status: 'Active', applicants: '2.5L+' },
  { id: 2, name: 'PMFBY', ministry: 'Ministry of Agriculture', benefit: 'Insurance Coverage', status: 'Active', applicants: '1.8L+' },
  { id: 3, name: 'Kisan Credit Card', ministry: 'Ministry of Agriculture', benefit: 'Credit at 4%', status: 'Active', applicants: '3.2L+' },
  { id: 4, name: 'PM-KUSUM', ministry: 'Ministry of New & Renewable Energy', benefit: '60% Subsidy', status: 'Active', applicants: '50K+' },
  { id: 5, name: 'PM-AASHA', ministry: 'Ministry of Agriculture', benefit: 'MSP Guarantee', status: 'Inactive', applicants: '1.2L+' },
]

export const adminArticles = [
  { id: 1, title: 'Best Practices for Kharif Crop Cultivation', author: 'Dr. Rajesh Kumar', category: 'Crop Guide', status: 'Published', date: '2026-09-15', views: '12.5K' },
  { id: 2, title: 'Understanding Soil Health and Fertility', author: 'Priya Sharma', category: 'Soil Management', status: 'Published', date: '2026-09-10', views: '8.3K' },
  { id: 3, title: 'Drip Irrigation: A Complete Guide', author: 'Amit Patel', category: 'Irrigation', status: 'Draft', date: '2026-09-08', views: '0' },
  { id: 4, title: 'Pest Management in Cotton Crops', author: 'Dr. Sunita Devi', category: 'Pest Control', status: 'Published', date: '2026-09-05', views: '15.2K' },
  { id: 5, title: 'Government Schemes for Small Farmers', author: 'Admin', category: 'Schemes', status: 'Review', date: '2026-09-01', views: '0' },
]

export const adminUsers = [
  { id: 1, name: 'Ramesh Kumar', email: 'ramesh@example.com', phone: '+91 98765 43210', state: 'Punjab', status: 'Active', joinDate: '2024-01-15' },
  { id: 2, name: 'Priya Sharma', email: 'priya@example.com', phone: '+91 98765 43211', state: 'Haryana', status: 'Active', joinDate: '2024-02-20' },
  { id: 3, name: 'Amit Patel', email: 'amit@example.com', phone: '+91 98765 43212', state: 'Gujarat', status: 'Active', joinDate: '2024-03-10' },
  { id: 4, name: 'Sunita Devi', email: 'sunita@example.com', phone: '+91 98765 43213', state: 'UP', status: 'Inactive', joinDate: '2024-04-05' },
  { id: 5, name: 'Vikram Singh', email: 'vikram@example.com', phone: '+91 98765 43214', state: 'Rajasthan', status: 'Active', joinDate: '2024-05-12' },
  { id: 6, name: 'Anita Gupta', email: 'anita@example.com', phone: '+91 98765 43215', state: 'MP', status: 'Suspended', joinDate: '2024-06-18' },
]

export const adminStats = {
  totalUsers: 250000,
  totalCrops: 150,
  totalSchemes: 25,
  totalArticles: 500,
  activeUsers: 180000,
  pendingArticles: 12,
  newUsersToday: 156,
}
