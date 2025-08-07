import React from "react";

const LanguageSwitcher = () => {
  return (
    <button className="flex items-center space-x-2 px-4 text-white py-2 bg-[#0066B0] border border-gray-300 rounded-xl shadow-sm">
      <span role="img" aria-label="Russian Flag">
        🇷🇺
      </span>
      <span className="font-medium">Рус</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default LanguageSwitcher;
