import { Navigate, Route, Routes } from 'react-router-dom'
import RedeemPage from './pages/RedeemPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RedeemPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
