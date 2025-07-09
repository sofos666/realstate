
import React from 'react';

interface IconProps {
  className?: string;
}

export const AreaIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v6m0-6H3.375m17.625 0L18.75 6.187M3.375 7.5l-2.25-1.313M3.375 7.5v6m0-6h17.625M3.375 13.5l-2.25 1.313M3.375 13.5h17.625m0 0l2.25 1.313M18.75 14.813l2.25 1.313M18.75 14.813V7.5M6.375 7.5v7.313M12 16.5V7.5" />
  </svg>
);
