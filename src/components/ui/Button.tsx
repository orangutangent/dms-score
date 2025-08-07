import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, variant = 'primary', ...props }, ref) => {
  const baseClasses = "px-6 py-3 text-lg font-semibold rounded-md";
  const variants = {
    primary: "text-white bg-custom-blue hover:bg-blue-700",
    secondary: "text-custom-blue border border-custom-blue hover:bg-blue-50",
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