import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 tracking-wide";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-white hover:text-black rounded-full",
    outline: "border border-white/20 text-white hover:border-primary hover:bg-primary hover:text-white rounded-full",
    text: "text-white hover:text-primary p-0 bg-transparent"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-8 py-3",
    lg: "text-lg px-10 py-4"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};