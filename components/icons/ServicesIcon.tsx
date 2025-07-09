import React from 'react';

interface IconProps {
  className?: string;
}

export const ServicesIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.983 6.945A4.505 4.505 0 0113.5 6.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75h.01" />
  </svg>
);
