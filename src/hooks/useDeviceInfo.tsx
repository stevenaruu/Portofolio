import { useState, useEffect } from "react";
import { Device } from "@capacitor/device";

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    manufacturer: "Unknown",
    model: "Unknown",
    os: "Unknown",
    osVersion: "Unknown",
    platform: "Unknown",
    webViewVersion: "Unknown",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDeviceInfo = async () => {
      try {
        const info = await Device.getInfo();
        setDeviceInfo({
          manufacturer: info.manufacturer || "Unknown",
          model: info.model || "Unknown",
          os: info.operatingSystem || "Unknown",
          osVersion: info.osVersion || "Unknown",
          platform: info.platform || "Unknown",
          webViewVersion: info.webViewVersion || "Unknown",
        });
      } catch (error) {
        console.error("Error fetching device info:", error);
      } finally {
        setLoading(false);
      }
    };

    getDeviceInfo();
  }, []);

  return { deviceInfo, loading };
};

export default useDeviceInfo;
