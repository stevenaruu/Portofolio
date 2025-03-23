import { useEffect, useState } from 'react';
import { CoolMode } from '../../atoms/cool-mode/CoolMode';
import { ShimmerButton } from '../../atoms/shimmer-button/ShimmerButton';
import { motion } from 'framer-motion';
import { downloadFile } from '../../../lib/utils';

import cv from '../../../assets/document/CV.pdf'
import portfolio from '../../../assets/document/PORTFOLIO.pdf'
import useDeviceInfo from '../../../hooks/useDeviceInfo';
import { selectLocation } from '../../../store/location/LocationSlice';
import { useSelector } from 'react-redux';

const Document = () => {
  const { deviceInfo } = useDeviceInfo();
  const location = useSelector(selectLocation);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return isVisible && (
    <motion.div
      className='absolute bottom-28 flex flex-wrap gap-5'
      initial={{ scale: 0.8, y: 30 }}
      whileInView={{ scale: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 25,
        duration: 1.2,
      }}
    >
      <CoolMode>
        <ShimmerButton onClick={() => downloadFile(portfolio, 'STEVEN_PORTFOLIO.pdf', deviceInfo, location)} className='px-7 py-2'>
          Portfolio
        </ShimmerButton>
      </CoolMode>
      <CoolMode>
        <ShimmerButton onClick={() => downloadFile(cv, 'STEVEN_CV.pdf', deviceInfo, location)} className='px-7 py-2'>
          CV
        </ShimmerButton>
      </CoolMode>
    </motion.div>
  )
}

export default Document