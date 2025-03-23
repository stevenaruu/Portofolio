import { useState, useEffect } from "react";
import MobileDetect from "mobile-detect";

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    type: "Unknown",
    model: "Unknown",
    os: "Unknown",
  });

  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent);
    const isMobile = md.mobile() !== null;
    const isTablet = md.tablet() !== null;
    const os = md.os() || "Unknown OS";

    let deviceType = "Desktop";
    if (isMobile) {
      deviceType = "Mobile";
    } else if (isTablet) {
      deviceType = "Tablet";
    } else {

      const screenWidth = window.screen.width;
      if (screenWidth >= 1280 && screenWidth <= 1920) {
        deviceType = "Laptop";
      } else if (screenWidth > 1920) {
        deviceType = "Desktop";
      }
    }

    setDeviceInfo({
      type: deviceType,
      model: md.mobile() || "Unknown Model",
      os: os,
    });
  }, []);

  return deviceInfo;
};

export default useDeviceInfo;