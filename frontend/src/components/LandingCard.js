import AnimatedLogo from './AnimatedLogo'
// import { Button } from '@/components/ui/button'

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <AnimatedLogo />
      <p className="mt-4 text-xl text-center text-gray-600 max-w-md">
        Welcome to our amazing platform. We provide innovative solutions for your needs.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 hover:bg-blue-700 transition-all duration-300">
        Try it out
      </button>
    </div>
  )
}

export default LandingPage