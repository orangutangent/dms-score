import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant = 'primary', ...props }, ref) => {
  const baseClasses = "px-6 py-3 text-lg font-semibold rounded-md transition-colors duration-200 ease-in-out";
  
  const variants = {
    primary: 
      "text-white bg-custom-blue hover:bg-blue-700 disabled:bg-[#D5D9DD] disabled:cursor-not-allowed",
    secondary: 
      "text-custom-blue border border-custom-blue hover:bg-blue-50 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed",
  };

  return (
    <button 
      ref={ref} 
      {...props} 
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
