import { useEffect, useState } from 'react';
import cv from '../../../assets/document/CV.pdf'
import { CoolMode } from '../../atoms/cool-mode/CoolMode';
import { ShimmerButton } from '../../atoms/shimmer-button/ShimmerButton';
import { motion } from 'framer-motion';

const Cv = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = cv
    link.download = 'STEVEN_CV.pdf';
    link.click();
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return isVisible && (
    <motion.div
      className='absolute bottom-28'
      onClick={handleDownload}
      initial={{ scale: 0.8, y: 30 }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 25,
        duration: 1.2,
      }}
    >
      <CoolMode>
        <ShimmerButton>
          Download CV
        </ShimmerButton>
      </CoolMode>
    </motion.div>
  )
}

export default Cv