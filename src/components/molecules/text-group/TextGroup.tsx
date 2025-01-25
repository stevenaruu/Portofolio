import { motion } from 'framer-motion'
import DecryptedText from '../../atoms/decrypted-text/DecryptedText'

const TextGroup = () => {
  return (
    <motion.div
      className="flex flex-col absolute -z-10 font-bold tracking-wide text-center"
    >
      {/* Responsif dengan Tailwind */}
      <div className="text-6xl md:text-7xl lg:text-8xl">
        <DecryptedText
          speed={50}
          maxIterations={20}
          revealDirection="end"
          animateOn="view"
          text="STEVEN"
        />
      </div>
      <div className="text-yellow-300 text-7xl md:text-8xl lg:text-9xl">
        <DecryptedText
          speed={50}
          maxIterations={30}
          revealDirection="center"
          animateOn="view"
          text="STEVEN"
        />
      </div>
      <div className="text-6xl md:text-7xl lg:text-8xl">
        <DecryptedText
          speed={50}
          maxIterations={20}
          revealDirection="start"
          animateOn="view"
          text="STEVEN"
        />
      </div>
    </motion.div>
  )
}

export default TextGroup
