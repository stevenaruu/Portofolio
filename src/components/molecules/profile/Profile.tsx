import { useState, useEffect } from 'react';
import TiltedCard from '../../atoms/tilted-card/TiltedCard';
import Magnet from '../../atoms/magnet/Magnet';
import profile from '../../../assets/images/profile.jpg';
import { motion } from 'framer-motion';

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    isVisible && (
      <motion.div
        initial={{ scale: 0.8, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 25,
          duration: 1.2,
        }}
      >
        <Magnet>
          <TiltedCard
            imageSrc={profile}
            altText="Steven's Profile"
            captionText="Steven's Profile"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            imageHeight="200px"
            imageWidth="200px"
            containerHeight="200px"
            containerWidth="200px"
            overlayContent={
              <p className="ms-5 mt-5 bg-primary px-3 py-1 text-xs rounded-sm font-semibold cursor-not-allowed">
                STVN.
              </p>
            }
          />
        </Magnet>
      </motion.div>
    )
  );
};

export default Profile;
