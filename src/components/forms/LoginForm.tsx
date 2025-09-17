import React, { useState } from 'react'
import Button from '@components/ui/Button'
import Card from '@components/ui/Card'
import Input from '@components/ui/Input'

interface LoginFormData {
  username: string
  password: string
}

interface LoginFormErrors {
  username?: string
  password?: string
  general?: string
}

interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => void
  isLoading?: boolean
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: ''
  })
  
  const [errors, setErrors] = useState<LoginFormErrors>({})
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  const validateField = (name: keyof LoginFormData, value: string): string | undefined => {
    switch (name) {
      case 'username':
        if (!value.trim()) {
          return '用户名不能为空'
        }
        if (value.length < 3) {
          return '用户名至少需要3个字符'
        }
        if (value.length > 20) {
          return '用户名不能超过20个字符'
        }
        if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          return '用户名只能包含字母、数字和下划线'
        }
        break
      
      case 'password':
        if (!value) {
          return '密码不能为空'
        }
        if (value.length < 6) {
          return '密码至少需要6个字符'
        }
        if (value.length > 50) {
          return '密码不能超过50个字符'
        }
        if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(value)) {
          return '密码必须包含至少一个字母和一个数字'
        }
        break
      
      default:
        break
    }
    return undefined
  }

  const validateForm = (): boolean => {
    const newErrors: LoginFormErrors = {}
    
    Object.keys(formData).forEach(key => {
      const fieldName = key as keyof LoginFormData
      const error = validateField(fieldName, formData[fieldName])
      if (error) {
        newErrors[fieldName] = error
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const fieldName = name as keyof LoginFormData
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(fieldName, value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const fieldName = name as keyof LoginFormData
    
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    const error = validateField(fieldName, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Mark all fields as touched
    setTouched({
      username: true,
      password: true
    })

    if (validateForm()) {
      setErrors(prev => ({ ...prev, general: undefined }))
      onSubmit?.(formData)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">登录</h2>
        <p className="text-gray-600 mt-2">请输入您的账户信息</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="username"
          label="用户名"
          type="text"
          placeholder="请输入用户名"
          value={formData.username}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          error={touched.username ? errors.username : undefined}
          disabled={isLoading}
          autoComplete="username"
        />

        <Input
          name="password"
          label="密码"
          type="password"
          placeholder="请输入密码"
          value={formData.password}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          error={touched.password ? errors.password : undefined}
          disabled={isLoading}
          autoComplete="current-password"
        />

        {errors.general && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">{errors.general}</p>
          </div>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? '登录中...' : '登录'}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          还没有账户？{' '}
          <a href="#" className="text-blue-600 hover:text-blue-500 font-medium">
            立即注册
          </a>
        </p>
      </div>
    </Card>
  )
}

export default LoginForm
