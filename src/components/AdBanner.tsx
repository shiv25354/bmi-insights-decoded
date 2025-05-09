
import React from 'react';

export type AdSize = 
  | "leaderboard" // 728x90
  | "large-skyscraper" // 300x600
  | "mobile-leaderboard" // 320x50
  | "wide-skyscraper" // 160x600
  | "banner" // 468x60
  | "medium-rectangle"; // 300x250

interface AdBannerProps {
  size: AdSize;
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ size, className = "" }) => {
  // Size configurations
  const sizeConfigs = {
    "leaderboard": { width: 728, height: 90, label: "728 x 90 - Leaderboard" },
    "large-skyscraper": { width: 300, height: 600, label: "300 x 600 - Large Skyscraper" },
    "mobile-leaderboard": { width: 320, height: 50, label: "320 x 50 - Mobile Leaderboard" },
    "wide-skyscraper": { width: 160, height: 600, label: "160 x 600 - Wide Skyscraper" },
    "banner": { width: 468, height: 60, label: "468 x 60 - Banner" },
    "medium-rectangle": { width: 300, height: 250, label: "300 x 250 - Medium Rectangle" }
  };

  const { width, height, label } = sizeConfigs[size];
  
  // Calculate background gradient angle based on aspect ratio
  const isVertical = height > width;
  const gradientAngle = isVertical ? '180deg' : '90deg';
  
  return (
    <div 
      className={`ad-banner flex items-center justify-center border border-border ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(${gradientAngle}, #9b87f5 0%, #D6BCFA 100%)`,
        maxWidth: '100%',
      }}
    >
      <div className="text-center text-white p-2">
        <p className="font-medium opacity-90">Advertisement</p>
        <p className="text-xs opacity-70">{label}</p>
      </div>
    </div>
  );
};

export default AdBanner;
