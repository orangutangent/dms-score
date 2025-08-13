import React from 'react';

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, id, ...props }) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="date"
        id={id}
        className="p-2.5 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out bg-white text-gray-700"
        {...props}
      />
    </div>
  );
};

export default DateInput;