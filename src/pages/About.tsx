import Card from '@components/ui/Card'
import InfoCard from '@components/ui/InfoCard'

const AboutPage = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn more about this React TypeScript application
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Frontend</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• React 18 with TypeScript</li>
                <li>• Vite for fast development</li>
                <li>• Tailwind CSS for styling</li>
                <li>• React Router for navigation</li>
                <li>• React Query for data fetching</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Development Tools</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• ESLint for code linting</li>
                <li>• Prettier for code formatting</li>
                <li>• Vitest for unit testing</li>
                <li>• Redux Toolkit for state management</li>
                <li>• React Hook Form for forms</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Modern Development Setup</h3>
              <p className="text-gray-600">
                Built with the latest tools and best practices for React development,
                including TypeScript for type safety and Vite for lightning-fast builds.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Responsive Design</h3>
              <p className="text-gray-600">
                Fully responsive layout using Tailwind CSS utilities,
                ensuring great user experience across all devices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Code Quality</h3>
              <p className="text-gray-600">
                Configured with ESLint and Prettier for consistent code style,
                plus comprehensive testing setup with Vitest.
              </p>
            </div>
          </div>
        </Card>

        {/* InfoCard 组件展示 */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">InfoCard Components</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            这些是使用 styled-components 创建的 InfoCard 组件，展示了现代 CSS-in-JS 的强大功能。
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
