import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="4" className="text-primary"/>
      <path d="M5 50 H95" stroke="currentColor" strokeWidth="2" className="text-primary/50"/>
      <circle cx="50" cy="50" r="20" fill="currentColor" className="text-primary"/>
    </svg>
  );
};