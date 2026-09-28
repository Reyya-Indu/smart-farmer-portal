import { Navigate } from 'react-router-dom'

export default function AdminRoute({ children }) {
  // In a real app, check for admin authentication
  // For demo purposes, we'll allow access
  const isAdmin = true

  if (!isAdmin) {
    return <Navigate to="/login" replace />
  }

  return children
}
