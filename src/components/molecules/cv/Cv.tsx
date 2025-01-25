import { useEffect, useState } from 'react';
import cv from '../../../assets/document/CV.pdf'
import { CoolMode } from '../../atoms/cool-mode/CoolMode';
import { ShimmerButton } from '../../atoms/shimmer-button/ShimmerButton';
import { motion } from 'framer-motion';

const Cv = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch(cv);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'STEVEN_CV.pdf';
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
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
        <ShimmerButton className='px-7 py-2'>
          Download CV
        </ShimmerButton>
      </CoolMode>
    </motion.div>
  )
}

export default Cv