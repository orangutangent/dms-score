import React, { useState } from "react";
import Button from "./ui/Button";

interface QuestionProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
  options: number[];
  description: string[];
  onNext: (answer: number) => void;
  progress: number;
}

const Question: React.FC<QuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  options,
  description,
  onNext,
  progress,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleContinue = () => {
    if (selectedOption !== null) {
      onNext(selectedOption);
      setSelectedOption(null); // Reset for the next question
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <div className="text-left  text-gray-500 ">
          Вопрос {questionNumber} из {totalQuestions}
        </div>
        <div className="w-full bg-white rounded-full h-2.5 mb-4">
          <div
            className="bg-[var(--color-custom-blue)] h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div>
        <h2 className="text-[1.75rem] font-semibold  text-foreground-secondary">
          {question}
        </h2>
        <div className="text-left text-gray-600 mt-2">Выберите ответ:</div>

        <div className="flex gap-4 items-center mt-6">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`flex justify-center items-center w-12 h-12 rounded-lg border  transition-colors  text-xl ${
                selectedOption === option
                  ? "bg-custom-blue text-white border-[var(--color-custom-blue)]"
                  : "border-gray-300 bg-white text-gray-500 hover:border-[var(--color-custom-blue)] hover:text-[var(--color-custom-blue)]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <Button
        onClick={handleContinue}
        disabled={selectedOption === null}
        className=" py-3   "
      >
        Продолжить
      </Button>
    </div>
  );
};

export default Question;
