import { useState, useEffect } from 'react';
import TiltedCard from '../../atoms/tilted-card/TiltedCard';
import Magnet from '../../atoms/magnet/Magnet';
import profile from '../../../assets/images/profile.jpg';
import { motion } from 'framer-motion';
import { CoolMode } from '../../atoms/cool-mode/CoolMode';

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardSize, setCardSize] = useState({ width: 200, height: 200 });
  const [overlayContent, setOverlayContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardSize({ width: 100, height: 100 });
        setOverlayContent(false);
      } else if (window.innerWidth < 1024) {
        setCardSize({ width: 150, height: 150 });
        setOverlayContent(false);
      } else {
        setCardSize({ width: 200, height: 200 }); 
        setOverlayContent(true);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
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
            displayOverlayContent={overlayContent}
            imageHeight={`${cardSize.height}px`}
            imageWidth={`${cardSize.width}px`}
            containerHeight={`${cardSize.height}px`}
            containerWidth={`${cardSize.width}px`}
            overlayContent={
              <CoolMode>
                <p className="ms-5 mt-5 bg-primary px-3 py-1 text-xs rounded-sm font-semibold cursor-pointer">
                  STVN.
                </p>
              </CoolMode>
            }
          />
        </Magnet>
      </motion.div>
    )
  );
};

export default Profile;
