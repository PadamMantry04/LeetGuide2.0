import { motion } from 'framer-motion'

const AnimatedLogo = () => {
  return (
    <motion.div
      className="text-6xl font-bold text-blue-600"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      LeetGuide
    </motion.div>
  )
}

export default AnimatedLogo