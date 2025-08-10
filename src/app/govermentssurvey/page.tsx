"use client";

import React from "react";
import { useSurvey } from "../../components/Question/data-access/useSurvey";
import Question from "../../components/Question";
import {
  Question as QuestionType,
  Answer,
} from "../../components/Question/model/types";
import questionsData from "../../govermentssurvey.json";
import { useGovernmentSurveyStore } from "../../store/government-survey.store";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios"; // Import AxiosError
import { useRouter } from "next/navigation";
import { expandServiceTemplates } from "@/lib/survey";
import type {
  GovernmentSurveyResponseDTO,
  GovernmentSurveySubmitDataDTO,
} from "@/api/types";
import { useTranslations } from "next-intl";

const questions: QuestionType[] = questionsData as QuestionType[];

const locationQuestion: QuestionType = {
  id: -1,
  inputType: "location",
  criterion: "Location",
  question: "В какой стране вы находитесь?",
  weight: 0,
};

const finalThoughtsQuestion: QuestionType = {
  id: -2,
  inputType: "final-thoughts",
  criterion: "Feedback",
  question:
    "Можете оставить свои пожелания по улучшению цифровых услуг при желании",
  placeholder: "Введите свои пожелания",
  weight: 0,
};

const expandedQuestions = expandServiceTemplates(questions);
const allQuestions = [
  locationQuestion,
  ...expandedQuestions,
  finalThoughtsQuestion,
];

const GovermentsSurveyPage = () => {
  const t = useTranslations("SurveyPage");
  const router = useRouter();
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    handleNext,
    handleBack,
    progress,
    initialAnswer,
    location,
    setLocation,
    finalThoughts,
    setFinalThoughts,
    responses, // Получаем responses из useSurvey
  } = useSurvey(
    useGovernmentSurveyStore,
    allQuestions,
    "/resultsgovermentserice"
  );

  // Получаем store для работы с responses
  const { setResponse } = useGovernmentSurveyStore();

  type SubmitResponse = { message: string; resultId: string };

  const submitSurvey = useMutation<
    SubmitResponse,
    AxiosError,
    GovernmentSurveySubmitDataDTO
  >({
    mutationFn: (data) => axios.post("/api/submit-government-survey", data),
    onSuccess: () => {
      router.push("/resultsgovermentserice");
    },
    onError: (error) => {
      console.error("Error submitting survey:", error);
      alert(
        `Ошибка при отправке опроса: ${error.message}. Пожалуйста, попробуйте еще раз.`
      );
    },
  });

  const handleFinalSubmit = () => {
    // Теперь просто отправляем responses из store
    const dataToSend: GovernmentSurveySubmitDataDTO = {
      location,
      finalThoughts,
      responses,
    };
    submitSurvey.mutate(dataToSend);
  };

  // Override handleNext for the last question to trigger submission
  const customHandleNext = (answer: Answer) => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      // This is the final question (final thoughts)
      setFinalThoughts(answer?.value || ""); // Ensure final thoughts are saved
      handleFinalSubmit();
    } else {
      handleNext(answer);
    }
  };

  if (!currentQuestion) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold">{t("inDevelopmentTitle")}</h1>
        <p className="mt-4">{t("inDevelopmentDescription")}</p>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-6 bg-[var(--background)]">
      <div className="w-full max-w-5xl mx-auto   ">
        <Question
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          onNext={customHandleNext}
          onBack={handleBack}
          progress={progress}
          initialAnswer={initialAnswer}
          initialLocation={location}
          onLocationChange={setLocation}
          initialSector={null} // Government survey doesn't have sector
          onSectorChange={() => {}} // No-op for government survey
          initialFinalThoughts={finalThoughts}
          onFinalThoughtsChange={setFinalThoughts}
          onResponseChange={setResponse} // Передаем функцию для сохранения responses
          isSubmitting={submitSurvey.isPending}
          isLastQuestion={currentQuestionIndex === allQuestions.length - 1}
        />
      </div>
    </main>
  );
};

export default GovermentsSurveyPage;
