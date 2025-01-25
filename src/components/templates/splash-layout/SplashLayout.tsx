import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DecryptedText from '../../atoms/decrypted-text/DecryptedText';
import { SET_SPLASH_SCREEN } from '../../../store/splash-screen/SplashScreenSlice';
import { useDispatch } from 'react-redux';

const SplashLayout = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [showZoom, setShowZoom] = useState(false);
  const dispatch = useDispatch();

  const texts = ['Ciao!', 'STVN.'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextIndex(1);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleMainAnimationComplete = () => {
    setShowZoom(true);
  };

  const handleZoomAnimationComplete = () => {
    setTimeout(() => {
      dispatch(SET_SPLASH_SCREEN(false));
    }, 700);
  };

  return (
    <div className='h-screen font-bold tracking-wide text-4xl flex justify-center items-center'>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          duration: 1,
        }}
        onAnimationComplete={handleMainAnimationComplete}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={showZoom ? { scale: 1.2 } : {}}
          transition={{ duration: 0.5 }}
          onAnimationComplete={handleZoomAnimationComplete}
        >
          <DecryptedText
            speed={50}
            maxIterations={10}
            revealDirection='center'
            animateOn="view"
            text={texts[textIndex]}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SplashLayout;
