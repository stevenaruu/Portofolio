import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import ReactGA from "react-ga4";
import { Device } from "@capacitor/device";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const openInNewTab = (url: string) => {
  window.open(url, '_blank', 'noreferrer');
};

export const downloadFile = async (
  file: string,
  name: string,
  location: { ip: string; city: string; region: string; country: string; isp: string }
) => {
  try {
    const deviceInfo = await Device.getInfo();
    
    ReactGA.event("Download " + name, {
      model: deviceInfo.model,
      os: deviceInfo.operatingSystem,
      ip: location.ip,
      city: location.city,
      region: location.region,
    });

    const response = await fetch(file);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};

