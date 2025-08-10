import React, { useState, useEffect } from "react";
import Button from "../../ui/Button";
import LocationInput from "./LocationInput";
import ScaleInput from "./ScaleInput";
import Radio from "../../ui/Radio";
import Textarea from "../../ui/Textarea";
import FinalThoughtsInput from "./FinalThoughtsInput";
import { Question as QuestionType, Answer } from "../model/types";
import { SERVICE_MAP, type ServiceCode } from "@/config/services";
import { calculateRadioScore, calculateScaleScore } from "@/lib/scoring";
import type { GovernmentSurveyResponseDTO } from "@/api/types";

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
  onLocationChange: (location: { country: string; region: string }) => void;
  initialSector?: string | null; // Made optional
  onSectorChange?: (sector: string) => void; // Made optional
  initialFinalThoughts: string;
  onFinalThoughtsChange: (thoughts: string) => void;
  // New prop for storing responses
  onResponseChange?: (response: GovernmentSurveyResponseDTO) => void;
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
  onLocationChange,
  initialSector,
  onSectorChange,
  initialFinalThoughts,
  onFinalThoughtsChange,
  onResponseChange,
}) => {
  const [answer, setAnswer] = useState<Answer>(initialAnswer);

  useEffect(() => {
    setAnswer(initialAnswer);
  }, [initialAnswer]);

  // Создает response DTO из ответа пользователя
  const createResponse = (ans: Answer): GovernmentSurveyResponseDTO | null => {
    if (!ans || ans.value === undefined || ans.value === null) return null;

    // Для специальных типов вопросов не создаем response
    if (["location", "sector", "final-thoughts"].includes(question.inputType)) {
      return null;
    }

    let score01 = 0;

    if (question.inputType === "radio") {
      score01 = calculateRadioScore(ans.value, question.options?.length || 0);
    } else if (question.inputType === "scale") {
      score01 = calculateScaleScore(ans.value, question.options?.length);
    }

    return {
      questionId: question.id,
      criterion: question.criterion,
      service: question.service,
      score01,
      answerValue: ans.value,
    };
  };

  const handleContinue = () => {
    if (question.inputType === "location") {
      onLocationChange(initialLocation);
      onNext(null); // Pass null as answer for location question
    } else if (question.inputType === "sector") {
      onSectorChange?.(answer?.value || ""); // Use selected answer value
      onNext(null); // Pass null as answer for sector question
    } else if (question.inputType === "final-thoughts") {
      onFinalThoughtsChange(answer?.value || ""); // Use selected answer value
      onNext(null); // Pass null as answer for final thoughts question
    } else if (answer !== null) {
      // Создаем и сохраняем response
      const response = createResponse(answer);
      if (response && onResponseChange) {
        onResponseChange(response);
      }
      onNext(answer);
    }
    setAnswer(null); // Reset for the next question
  };

  const getInstructionText = () => {
    switch (question.inputType) {
      case "scale":
      case "radio":
      case "location":
      case "sector":
        return "Выберите ответ:";
      case "text":
      case "final-thoughts":
        return "Оставьте ответ:";
      default:
        return "";
    }
  };

  const renderInput = () => {
    switch (question.inputType) {
      case "location":
        return (
          <LocationInput
            country={initialLocation.country}
            region={initialLocation.region}
            onCountryChange={(country) =>
              onLocationChange({ ...initialLocation, country })
            }
            onRegionChange={(region) =>
              onLocationChange({ ...initialLocation, region })
            }
          />
        );
      case "sector":
        return (
          <div className="flex flex-col gap-4 mt-6">
            {question.options?.map((option) => (
              <Radio
                key={option.value}
                label={option.label}
                value={option.value}
                checked={answer?.value === option.value}
                onChange={(value) => {
                  const newAnswer = { value: option.value };
                  setAnswer(newAnswer);
                }}
              />
            ))}
          </div>
        );
      case "final-thoughts":
        return (
          <div className="mt-6">
            <Textarea
              placeholder={question.placeholder || "Введите свои мысли..."}
              value={answer?.value || ""}
              onChange={(e) => setAnswer({ value: e.target.value })}
            />
          </div>
        );
      case "radio":
        return (
          <div className="space-y-4 mt-6">
            {question.options?.map((option) => (
              <Radio
                key={option.value}
                label={option.label}
                value={option.value}
                checked={answer?.value === option.value}
                onChange={(value) => {
                  const newAnswer = { value: option.value };
                  setAnswer(newAnswer);
                  // Создаем response сразу при выборе
                  const response = createResponse(newAnswer);
                  if (response && onResponseChange) {
                    onResponseChange(response);
                  }
                }}
              />
            ))}
            {question.followUp &&
              answer?.value === question.followUp.triggerValue && (
                <div className="mt-4">
                  <Textarea
                    placeholder={question.followUp.placeholder}
                    value={answer?.details || ""}
                    onChange={(e) =>
                      setAnswer({ ...answer, details: e.target.value })
                    }
                  />
                </div>
              )}
          </div>
        );
      case "scale":
        return (
          <ScaleInput
            options={question.options?.map((opt) => opt.label) || []}
            selectedValue={answer?.value || null}
            onChange={(value) => {
              const newAnswer = { value };
              setAnswer(newAnswer);
              // Создаем response сразу при выборе
              const response = createResponse(newAnswer);
              if (response && onResponseChange) {
                onResponseChange(response);
              }
            }}
          />
        );
      case "text":
        return (
          <div className="mt-6">
            <Textarea
              placeholder={question.placeholder}
              value={answer?.value || ""}
              onChange={(e) => setAnswer({ value: e.target.value })}
            />
          </div>
        );
      default:
        return null;
    }
  };

  const isNextDisabled = () => {
    if (question.inputType === "location") return !initialLocation.country;
    if (question.inputType === "sector") return !answer?.value;
    if (question.inputType === "final-thoughts") return false; // Can proceed with empty thoughts
    return answer === null || answer.value === "";
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
          {(() => {
            const sc = question.service as ServiceCode | undefined;
            if (!sc) {
              return <>{question.question}</>;
            }
            const info = SERVICE_MAP[sc];
            const q = question.question || "";
            const qmIndex = q.indexOf("?");
            if (qmIndex === -1) {
              return (
                <>
                  {q}{" "}
                  <span style={{ color: info.color, fontWeight: 700 }}>
                    {info.label}
                  </span>
                </>
              );
            }
            const before = q.slice(0, qmIndex).trimEnd();
            const after = q.slice(qmIndex); // includes '?'
            return (
              <>
                {before}{" "}
                <span style={{ color: info.color, fontWeight: 700 }}>
                  {info.label}
                </span>
                {after}
              </>
            );
          })()}
        </h2>
        <div className="text-left text-gray-600 mt-2">
          {getInstructionText()}
        </div>
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
