import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const openInNewTab = (url: string) => {
  window.open(url, '_blank', 'noreferrer');
};

export const downloadFile = async (file: string, name: string) => {
  try {
    const response = await fetch(file);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();

    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading CV:', error);
  }
}
