import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div
      className='h-screen text-5xl flex justify-center items-center flex-col text-center font-bold text-white'>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          duration: 1,
        }}
      >
        <p>UNDER</p>
        <p>DEVELOPMENT</p>
      </motion.div>
    </div>
  )
}

export default HomePage