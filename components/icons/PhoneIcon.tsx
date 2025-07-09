
import React from 'react';

interface IconProps {
  className?: string;
}

export const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.018-.991-.053-1.463l-.094-.663a1.125 1.125 0 00-1.266-.991l-3.697.74c-.422.083-.801.002-1.135-.297l-1.608-.964C9.22 14.86 8.902 14.533 8.586 14.3l-2.072-1.554C5.293 11.838 5.293 10.162 6.51 9.243l2.072-1.554C8.902 7.467 9.22 7.14 9.536 6.894l1.608-.964c.334-.295.415-.673.297-1.135l-.74-3.697A1.125 1.125 0 008.25 1.05H6.75A2.25 2.25 0 004.5 3.25V4.5M2.25 6.75C2.25 5.507 3.007 4.5 3.75 4.5M19.5 19.5c1.243 0 2.25-.757 2.25-2.25V15M4.5 3.75c0 .743.757 1.5 2.25 1.5H15" />
  </svg>
);
