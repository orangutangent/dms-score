import React, { useState, useEffect } from "react";
import Button from "../../ui/Button";
import LocationInput from "./LocationInput";
import ScaleInput from "./ScaleInput";
import Radio from "../../ui/Radio";
import Textarea from "../../ui/Textarea";
import FinalThoughtsInput from "./FinalThoughtsInput";
import { Question as QuestionType, Answer } from "../model/types";

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  onNext: (answer: Answer) => void;
  onBack: () => void;
  progress: number;
  // State handlers
  initialAnswer: Answer;
  initialLocation: { country: string; region: string };
  initialFinalThoughts: string;
  onLocationChange: (location: { country: string; region: string }) => void;
  onFinalThoughtsChange: (thoughts: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onNext,
  onBack,
  progress,
  initialAnswer,
  initialLocation,
  initialFinalThoughts,
  onLocationChange,
  onFinalThoughtsChange,
}) => {
  const [answer, setAnswer] = useState<Answer>(initialAnswer);

  useEffect(() => {
    setAnswer(initialAnswer);
  }, [initialAnswer]);

  const handleContinue = () => {
    onNext(answer);
    setAnswer(null);
  };

  const renderInput = () => {
    switch (question.inputType) {
      case 'location':
        return (
          <LocationInput
            country={initialLocation.country}
            region={initialLocation.region}
            onCountryChange={(country) => onLocationChange({ ...initialLocation, country })}
            onRegionChange={(region) => onLocationChange({ ...initialLocation, region })}
          />
        );
      case 'final-thoughts':
        return (
          <FinalThoughtsInput
            value={initialFinalThoughts}
            onChange={onFinalThoughtsChange}
            placeholder={question.placeholder}
          />
        );
      case 'scale':
        return (
          <ScaleInput
            options={question.options?.map(opt => opt.label) || []}
            selectedValue={answer?.value || null}
            onChange={(value) => setAnswer({ value })}
          />
        );
      case 'radio':
        return (
          <div className="flex flex-col gap-4 mt-6">
            {question.options?.map((option) => (
              <Radio
                key={option.value}
                name={question.id.toString()}
                label={option.label}
                checked={answer?.value === option.value}
                onChange={() => setAnswer({ value: option.value, details: '' })}
              />
            ))}
            {question.followUp && answer?.value === question.followUp.triggerValue && (
              <div className="mt-4">
                <Textarea
                  placeholder={question.followUp.placeholder}
                  value={answer?.details || ''}
                  onChange={(e) => setAnswer({ ...answer, details: e.target.value })}
                />
              </div>
            )}
          </div>
        );
      case 'text':
        return (
          <div className="mt-6">
            <Textarea
              placeholder={question.placeholder}
              value={answer?.value || ''}
              onChange={(e) => setAnswer({ value: e.target.value })}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    if (question.inputType === 'location') return !initialLocation.country;
    if (question.inputType === 'final-thoughts') return false; // Can proceed with empty thoughts
    return answer === null || answer.value === '';
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
        <div className="text-left text-gray-600 mt-2">Выберите ответ:</div>
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
          disabled={isNextDisabled()}
          className="py-3"
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
};

export default Question;