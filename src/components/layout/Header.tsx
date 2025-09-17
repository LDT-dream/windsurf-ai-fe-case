import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '@components/ui/Button'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    const storedUsername = localStorage.getItem('username') || ''
    setIsLoggedIn(loggedIn)
    setUsername(storedUsername)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    setIsLoggedIn(false)
    setUsername('')
    navigate('/login')
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              React App
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              首页
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              关于
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <span className="text-sm text-gray-600">
                  欢迎, {username}
                </span>
                <Button 
                  variant="outline" 
                  onClick={handleLogout}
                  className="px-4 py-2"
                >
                  退出登录
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => navigate('/login')}
                className="px-4 py-2"
              >
                登录
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
