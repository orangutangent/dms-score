import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({ label, ...props }, ref) => {
  return (
    <label className="flex items-center space-x-3 cursor-pointer">
      <input 
        type="radio" 
        ref={ref} 
        {...props} 
        className="hidden" 
      />
      <span className={`relative flex-shrink-0 flex items-center justify-center w-6 h-6 border-2 rounded-full transition-colors ${props.checked ? 'border-custom-blue' : 'border-gray-400'}`}>
        {props.checked && <span className="w-3 h-3 bg-custom-blue rounded-full"></span>}
      </span>
      <span className="text-lg">{label}</span>
    </label>
  );
});

Radio.displayName = 'Radio';

export default Radio;