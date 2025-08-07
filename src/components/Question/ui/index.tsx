import React, { useState, useEffect } from "react";
import Button from "../../ui/Button";
import ScaleInput from "./ScaleInput";
import YesNoInput from "./YesNoInput";
import YesNoWithTextInput from "./YesNoWithTextInput";
import { Question as QuestionType, Answer } from "../model/types";

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  onNext: (answer: Answer) => void;
  onBack: () => void;
  progress: number;
  initialAnswer: Answer | null;
}

const Question: React.FC<QuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onNext,
  onBack,
  progress,
  initialAnswer,
}) => {
  const [answer, setAnswer] = useState<Answer | null>(initialAnswer);

  useEffect(() => {
    setAnswer(initialAnswer);
  }, [initialAnswer]);

  const handleContinue = () => {
    if (answer !== null) {
      onNext(answer);
      setAnswer(null); // Reset for the next question
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case 'scale':
        return (
          <ScaleInput
            options={[0, 1, 2, 3, 4, 5]}
            selectedValue={typeof answer === 'number' ? answer : null}
            onChange={(value) => setAnswer(value)}
          />
        );
      case 'yes-no':
        return (
          <YesNoInput
            selectedValue={typeof answer === 'object' && answer !== null && 'choice' in answer ? (answer.choice as 'yes' | 'no') : null}
            onChange={(value) => setAnswer({ choice: value })}
          />
        );
      case 'yes-no-text':
        const choice = typeof answer === 'object' && answer !== null && 'choice' in answer ? (answer.choice as 'yes' | 'no') : null;
        const details = typeof answer === 'object' && answer !== null && 'details' in answer ? (answer.details as string) : '';
        return (
          <YesNoWithTextInput
            selectedValue={choice}
            details={details}
            onSelectionChange={(value) => setAnswer({ choice: value, details })}
            onDetailsChange={(text) => setAnswer({ choice: choice || 'yes', details: text })}
            followUpQuestion={question.followUpQuestion}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <div className="text-left text-gray-500">
          Вопрос {questionNumber} из {totalQuestions}
        </div>
        <div className="w-full bg-white rounded-full h-2.5 mb-4">
          <div
            className="bg-custom-blue h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div>
        <h2 className="text-[1.75rem] font-semibold text-foreground-secondary">
          {question.question}
        </h2>
        <div className="text-left text-gray-600 mt-2">{question.response_options || 'Выберите ответ:'}</div>
        {renderInput()}
      </div>
      <div className="flex gap-4">
        {questionNumber > 1 && (
          <Button onClick={onBack} variant="secondary">
            Назад
          </Button>
        )}
        <Button
          onClick={handleContinue}
          disabled={answer === null}
          className="py-3"
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default Question;