import React, { useRef } from 'react';

interface DatePickerDisplayProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // For accessibility, but not visually displayed
  widthClass?: string;
}

const DatePickerDisplay: React.FC<DatePickerDisplayProps> = ({ value, onChange, label, widthClass, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.showPicker(); // Programmatically open the date picker
  };

  const formattedDate = value ? new Date(value as string).toLocaleDateString() : 'Select Date';

  return (
    <div
      className={`relative flex items-center justify-between p-2.5 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-white hover:border-blue-500 transition-all duration-200 ease-in-out ${widthClass}`}
      onClick={handleClick}
    >
      {/* Hidden native input */}
      <input
        type="date"
        ref={inputRef}
        value={value}
        onChange={onChange}
        className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
        aria-label={label || "Date picker"}
        {...props}
      />

      {/* Visible display */}
      <span className="text-gray-700 text-sm flex-grow">{formattedDate}</span>
      {/* Icon - using a simple SVG placeholder for now */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400 ml-2 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
};

export default DatePickerDisplay;
