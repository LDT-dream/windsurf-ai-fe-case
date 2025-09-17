# React TypeScript Vite App

A modern React application built with TypeScript, Vite, Tailwind CSS, and ESLint. This project provides a comprehensive setup for large-scale frontend development with best practices and modern tooling.

## 🚀 Features

- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast development and builds
- **Tailwind CSS** for utility-first styling
- **ESLint & Prettier** for code quality and formatting
- **Redux Toolkit** for state management
- **React Query** for data fetching and caching
- **React Router** for client-side routing
- **React Hook Form** with Zod validation
- **Vitest** for unit testing
- **Path aliases** for clean imports

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Header, Footer, Sidebar)
│   └── ui/             # Basic UI components (Button, Card, etc.)
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── store/              # Redux store and slices
│   └── slices/         # Redux slices
├── services/           # API services and configurations
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles and CSS
└── test/               # Test utilities and setup
```

## 🛠️ Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run coverage` - Generate test coverage

## 🎨 Styling

This project uses Tailwind CSS for styling with custom configurations:

- Custom color palette (primary, secondary)
- Extended spacing and typography
- Custom animations and keyframes
- Responsive design utilities

## 🔧 Configuration

### Path Aliases

The following path aliases are configured:

- `@/*` - src/*
- `@components/*` - src/components/*
- `@pages/*` - src/pages/*
- `@hooks/*` - src/hooks/*
- `@utils/*` - src/utils/*
- `@types/*` - src/types/*
- `@store/*` - src/store/*
- `@services/*` - src/services/*
- `@assets/*` - src/assets/*
- `@styles/*` - src/styles/*

### ESLint Configuration

Configured with:
- TypeScript support
- React and React Hooks rules
- Import sorting and organization
- Accessibility checks (jsx-a11y)
- Prettier integration

## 🧪 Testing

Testing setup includes:
- Vitest for unit testing
- React Testing Library
- Jest DOM matchers
- Coverage reporting

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## 📝 Environment Variables

Copy `.env.example` to `.env` and configure:

- `VITE_API_BASE_URL` - API base URL
- `VITE_NODE_ENV` - Environment (development/production)
- `VITE_ENABLE_ANALYTICS` - Enable analytics
- `VITE_ENABLE_DEBUG` - Enable debug mode

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
