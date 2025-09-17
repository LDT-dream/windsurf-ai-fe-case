import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
