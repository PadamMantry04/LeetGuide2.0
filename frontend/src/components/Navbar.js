import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
// import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 no-underline">LeetGuide</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-600 no-underline">Home</Link>
        <button className="flex items-center space-x-2 no-underline">
          <Link className="no-underline" to="/api/user/auth/">
          <FcGoogle className="w-5 h-5 inline m-2" />
          <span className="text-gray-600 hover:text-blue-600">Sign up</span>
          </Link> 
        </button>
      </div>
    </nav>
  )
}

export default Navbar