"use client";

import React from "react";
import {
  useSurvey,
  useBusinessSurvey,
} from "../../components/Question/data-access/useSurvey";
import Question from "../../components/Question";
import {
  Question as QuestionType,
  Answer,
} from "../../components/Question/model/types";
import questionsData from "../../questions.json";
import { useBusinessSurveyStore } from "../../store/business-survey.store";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios"; // Import AxiosError
import { useRouter } from "next/navigation";
import { expandServiceTemplates } from "@/lib/survey";
import type { BusinessSurveyResponseDTO } from "@/api/types";

const questions: QuestionType[] = questionsData as unknown as QuestionType[];

const locationQuestion: QuestionType = {
  id: -1,
  inputType: "location",
  criterion: "Location",
  question: "В какой стране вы находитесь?",
  weight: 0,
};

const sectorQuestion: QuestionType = {
  id: -3,
  inputType: "sector",
  criterion: "Sector",
  question: "К какому сектору экономики вы относитесь?",
  options: [
    { value: "healthcare", label: "Здравоохранение" },
    { value: "education", label: "Образование" },
    { value: "other", label: "Другое" },
  ],
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

const expandedQuestions = expandServiceTemplates(questions as QuestionType[]);
const allQuestions = [
  locationQuestion,
  sectorQuestion,
  ...expandedQuestions,
  finalThoughtsQuestion,
];

const DigitalMaturityPage = () => {
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
    sector,
    setSector,
    finalThoughts,
    setFinalThoughts,
    responses, // Get responses from store
  } = useBusinessSurvey(
    useBusinessSurveyStore,
    allQuestions,
    "/resultsmatutiry"
  );

  type SubmitData = {
    location: { country: string; region: string };
    sector: string;
    finalThoughts: string;
    responses: BusinessSurveyResponseDTO[];
  };
  type SubmitResponse = { message: string; resultId: string };

  const submitSurvey = useMutation<SubmitResponse, AxiosError, SubmitData>({
    mutationFn: (data) => axios.post("/api/submit-digital-maturity", data),
    onSuccess: () => {
      router.push("/resultsmatutiry");
    },
    onError: (error) => {
      console.error("Error submitting survey:", error);
      alert(
        `Ошибка при отправке опроса: ${error.message}. Пожалуйста, попробуйте еще раз.`
      );
    },
  });

  const handleFinalSubmit = () => {
    // Collect all data from Zustand store
    const dataToSend: SubmitData = {
      location,
      sector: sector || "",
      finalThoughts,
      responses, // Use responses from store
    };

    console.log("Submitting survey data:", dataToSend);
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
        <h1 className="text-2xl font-bold">Опрос в разработке</h1>
        <p className="mt-4">Этот раздел скоро будет доступен.</p>
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
          initialSector={sector || ""}
          onSectorChange={setSector}
          initialFinalThoughts={finalThoughts}
          onFinalThoughtsChange={setFinalThoughts}
          onResponseChange={(response) => {
            // Store response in the store
            if (response.service) {
              useBusinessSurveyStore
                .getState()
                .setResponse(response as BusinessSurveyResponseDTO);
            }
          }}
        />
      </div>
    </main>
  );
};

export default DigitalMaturityPage;
