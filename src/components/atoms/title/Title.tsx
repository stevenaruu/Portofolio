import { motion } from "framer-motion"

const Title = ({ text }: { text: string }) => {
  return (
    <motion.p
      initial={{ x: '-5%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      className="font-extrabold text-6xl md:text-7xl">
      {text}
    </motion.p>
  )
}

export default Title