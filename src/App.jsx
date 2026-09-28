import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AdminRoute from './components/AdminRoute.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import CropInfo from './pages/CropInfo.jsx'
import CropDetails from './pages/CropDetails.jsx'
import Weather from './pages/Weather.jsx'
import MarketPrices from './pages/MarketPrices.jsx'
import GovernmentSchemes from './pages/GovernmentSchemes.jsx'
import AIAssistant from './pages/AIAssistant.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import AdminCrops from './pages/AdminCrops.jsx'
import AdminSchemes from './pages/AdminSchemes.jsx'
import AdminArticles from './pages/AdminArticles.jsx'
import AdminUsers from './pages/AdminUsers.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="crops" element={<CropInfo />} />
        <Route path="crops/:id" element={<CropDetails />} />
        <Route path="weather" element={<Weather />} />
        <Route path="market-prices" element={<MarketPrices />} />
        <Route path="government-schemes" element={<GovernmentSchemes />} />
        <Route path="ai-assistant" element={<AIAssistant />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/admin" element={
        <AdminRoute>
          <AdminLayout />
        </AdminRoute>
      }>
        <Route index element={<AdminDashboard />} />
        <Route path="crops" element={<AdminCrops />} />
        <Route path="schemes" element={<AdminSchemes />} />
        <Route path="articles" element={<AdminArticles />} />
        <Route path="users" element={<AdminUsers />} />
      </Route>
    </Routes>
  )
}
