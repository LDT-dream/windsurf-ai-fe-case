import { Routes, Route } from 'react-router-dom'

import Layout from '@components/layout/Layout'
import HomePage from '@pages/Home'
import AboutPage from '@pages/About'
import LoginPage from '@pages/Login'
import NotFoundPage from '@pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
