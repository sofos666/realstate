import React from 'react';

interface IconProps {
  className?: string;
}

export const DeedIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0L10.5 15.75M13.261 13.261L12 12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.75h3.75v3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-3.28 3.28" />
  </svg>
);
