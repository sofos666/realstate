
import React from 'react';

interface IconProps {
  className?: string;
}

export const PatioIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 3v1.875c0 .341.045.672.13.987m0 0A3.75 3.75 0 1011.25 9.75M12.75 9.75A3.75 3.75 0 1116.5 6c0 .341-.045.672-.13.987m0 0A3.75 3.75 0 0012.75 3M12 21v-3.375c0-.621.504-1.125 1.125-1.125h.75c.621 0 1.125.504 1.125 1.125V21m-4.5 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.75C6.004 16.5 5.5 16.004 5.5 15.375V12m10 3.375V12m-2.25 3.375L12 12m0 0l-1.25 3.375M12 12l-2.25-2.25M12 12l2.25-2.25M12 12V3.75" />
  </svg>
);
