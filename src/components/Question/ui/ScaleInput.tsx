import React from "react";

interface ScaleInputProps {
  options: string[];
  selectedValue: string | null;
  onChange: (value: string) => void;
}

const ScaleInput: React.FC<ScaleInputProps> = ({
  options,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex gap-4 items-center mt-6">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`flex justify-center items-center w-12 h-12 rounded-lg border transition-colors text-xl ${
            selectedValue === option
              ? "bg-custom-blue text-white border-custom-blue"
              : "border-gray-300 bg-white text-gray-500 hover:border-custom-blue hover:text-custom-blue"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ScaleInput;
