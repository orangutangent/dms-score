import { useLocale } from "next-intl";
import React, { useState } from "react";
import Radio from "../../ui/Radio";
import { Question as QuestionType, Answer } from "../model/types";
import { SERVICE_MAP, type ServiceCode } from "@/config/services";

interface YesNoServiceTemplateInputProps {
  question: QuestionType;
  initialAnswer: Answer;
  onAnswerChange: (answer: Answer) => void;
}

const YesNoServiceTemplateInput: React.FC<YesNoServiceTemplateInputProps> = ({
  question,
  initialAnswer,
  onAnswerChange,
}) => {
  const locale = useLocale();
  const [answers, setAnswers] = useState<Record<ServiceCode, string>>(() => {
    const initial: Record<ServiceCode, string> = {} as Record<
      ServiceCode,
      string
    >;
    if (question.subQuestions) {
      question.subQuestions.forEach((subQ) => {
        initial[subQ.service] = "";
      });
    }
    return initial;
  });

  const handleServiceAnswer = (service: ServiceCode, value: string) => {
    const newAnswers = { ...answers, [service]: value };
    setAnswers(newAnswers);

    // Проверяем, все ли услуги отвечены
    const allAnswered = question.subQuestions?.every(
      (subQ) => newAnswers[subQ.service]
    );

    if (allAnswered) {
      // Вычисляем средний балл по всем услугам
      const scores =
        question.subQuestions?.map((subQ) => {
          const answer = newAnswers[subQ.service];
          return question.scoring?.[answer] || 0;
        }) || [];

      const averageScore =
        scores.reduce((sum, score) => sum + score, 0) / scores.length;

      onAnswerChange({
        value: JSON.stringify(newAnswers),
        score: averageScore,
      });
    } else {
      onAnswerChange(null);
    }
  };

  if (!question.subQuestions) {
    return null;
  }

  return (
    <div className="space-y-6">
      {question.subQuestions.map((subQ) => (
        <div key={subQ.service} className="border rounded-lg p-4">
          <div className="flex items-center mb-3">
            <span
              className="w-4 h-4 rounded-full mr-3"
              style={{ backgroundColor: SERVICE_MAP[subQ.service].color }}
            ></span>
            <h4 className="font-medium text-gray-900">
              {SERVICE_MAP[subQ.service].label[locale as "ru" | "en"]}:{" "}
              {subQ.text}
            </h4>
          </div>

          <div className="ml-7 flex items-center gap-4">
            {(question.options || []).map((option) => (
              <Radio
                key={option.value}
                label={
                  typeof option.label === "string"
                    ? option.label
                    : option.label[locale as "ru" | "en"]
                }
                value={option.value}
                checked={answers[subQ.service] === option.value}
                onChange={(e) =>
                  handleServiceAnswer(subQ.service, e.target.value)
                }
                name={`yes-no-service-${subQ.service}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default YesNoServiceTemplateInput;
