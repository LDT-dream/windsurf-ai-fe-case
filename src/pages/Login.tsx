import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '@components/forms/LoginForm'

interface LoginFormData {
  username: string
  password: string
}

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true)
    
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // 模拟登录验证
      if (data.username === 'admin' && data.password === 'admin123') {
        // 登录成功
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('username', data.username)
        
        // 跳转到首页
        navigate('/')
      } else {
        // 登录失败
        throw new Error('用户名或密码错误')
      }
    } catch (error) {
      console.error('Login error:', error)
      // 这里可以显示错误消息
      alert(error instanceof Error ? error.message : '登录失败，请重试')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            欢迎回来
          </h1>
          <p className="text-gray-600">
            登录到您的账户继续使用
          </p>
        </div>
        
        <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            测试账户: admin / admin123
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
