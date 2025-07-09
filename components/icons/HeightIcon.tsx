
import React from 'react';

interface IconProps {
  className?: string;
}

export const HeightIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5M3.75 12h16.5m-16.5 3.75h16.5M5.25 4.5l6.75 6.75 6.75-6.75M5.25 19.5l6.75-6.75 6.75 6.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" transform="rotate(90 12 12)" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L12 8.25l3.75-3.75M8.25 19.5L12 15.75l3.75 3.75" transform="rotate(90 12 12)" />
  </svg>
);
