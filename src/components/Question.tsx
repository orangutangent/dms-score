
import React from 'react';

interface QuestionProps {
  question: string;
  options: number[];
  description: string[];
  onAnswer: (answer: number) => void;
  progress: number;
}

const Question: React.FC<QuestionProps> = ({ question, options, description, onAnswer, progress }) => {
  return (
    <div className="p-4 md:p-8">
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <h2 className="text-2xl font-bold my-4">{question}</h2>
      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>{description[0]}</span>
        <span>{description[1]}</span>
      </div>
      <div className="flex justify-between space-x-2">
        {options.map((option) => (
          <button 
            key={option} 
            onClick={() => onAnswer(option)} 
            className="w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
