
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
  return (
    <button 
      ref={ref} 
      {...props} 
      className="px-6 py-3 text-lg font-semibold text-white bg-custom-blue rounded-md hover:bg-blue-700"
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
