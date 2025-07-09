import React from 'react';

interface IconProps {
  className?: string;
}

export const TopographyIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15l2.25-2.25L7.5 15l2.25-2.25L12 15l2.25-2.25L16.5 15l2.25-2.25L21 15" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l2.25 2.25L7.5 9l2.25 2.25L12 9l2.25 2.25L16.5 9l2.25 2.25L21 9" />
  </svg>
);
