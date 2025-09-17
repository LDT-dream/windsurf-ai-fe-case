import { Link } from 'react-router-dom'

import Button from '@components/ui/Button'
import Card from '@components/ui/Card'

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="text-center max-w-md">
        <div className="text-6xl mb-4">🔍</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link to="/">
          <Button>
            Go Back Home
          </Button>
        </Link>
      </Card>
    </div>
  )
}

export default NotFoundPage
