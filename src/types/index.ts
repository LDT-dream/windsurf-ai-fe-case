export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'user' | 'moderator'
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
  timestamp: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface FormField {
  id: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select'
  required: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
}

export interface NavigationItem {
  name: string
  href: string
  icon?: string
  badge?: number
  children?: NavigationItem[]
}

export interface Theme {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
}
