"use client";

import React from "react";
import { useBusinessSurvey } from "../../components/Question/data-access/useSurvey";
import Question from "../../components/Question";
import {
  Question as QuestionType,
  UnlocalizedQuestion as UnlocalizedQuestionType,
  Answer,
} from "../../components/Question/model/types";
import questionsData from "../../questions.json";
import { useBusinessSurveyStore } from "../../store/business-survey.store";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { expandServiceTemplates, localizeQuestions } from "@/lib/survey";
import type { BusinessSurveyResponseDTO } from "@/api/types";
import { useTranslations, useLocale } from "next-intl";

const DigitalMaturityPage = () => {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();

  const localizedQuestionsData = localizeQuestions(
    questionsData as unknown as QuestionType[],
    locale
  );

  const locationQuestion: QuestionType = {
    id: -1,
    inputType: "location",
    criterion: "Location",
    question: t("HardcodedQuestions.locationBusiness"),
    weight: 0,
  };

  const sectorQuestion: QuestionType = {
    id: -3,
    inputType: "sector",
    criterion: "Sector",
    question: t("HardcodedQuestions.sector"),
    options: [
      {
        value: "healthcare",
        label: t("HardcodedQuestions.sectorOptions.healthcare"),
      },
      {
        value: "education",
        label: t("HardcodedQuestions.sectorOptions.education"),
      },
      { value: "other", label: t("HardcodedQuestions.sectorOptions.other") },
    ],
    weight: 0,
  };

  const finalThoughtsQuestion: QuestionType = {
    id: -2,
    inputType: "final-thoughts",
    criterion: "Feedback",
    question: t("HardcodedQuestions.finalThoughts"),
    placeholder: t("HardcodedQuestions.finalThoughtsPlaceholder"),
    weight: 0,
  };

  const expandedQuestions = expandServiceTemplates(localizedQuestionsData);
  const allQuestions = [
    locationQuestion,
    sectorQuestion,
    ...expandedQuestions,
    finalThoughtsQuestion,
  ];

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
    responses,
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

  const handleFinalSubmit = (finalThoughtsValue?: string) => {
    const dataToSend: SubmitData = {
      location,
      sector: sector || "",
      finalThoughts: finalThoughtsValue ?? finalThoughts,
      responses,
    };
    console.log("Submitting survey data:", dataToSend);
    submitSurvey.mutate(dataToSend);
  };

  const customHandleNext = (answer: Answer) => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      handleFinalSubmit(answer?.value);
    } else {
      handleNext(answer);
    }
  };

  if (!currentQuestion) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold">
          {t("SurveyPage.inDevelopmentTitle")}
        </h1>
        <p className="mt-4">{t("SurveyPage.inDevelopmentDescription")}</p>
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
          surveyType="business"
          initialAnswer={initialAnswer}
          initialLocation={location}
          onLocationChange={setLocation}
          initialSector={sector || ""}
          onSectorChange={setSector}
          initialFinalThoughts={finalThoughts}
          onFinalThoughtsChange={setFinalThoughts}
          isSubmitting={submitSurvey.isPending}
          isLastQuestion={currentQuestionIndex === allQuestions.length - 1}
          onResponseChange={(response) => {
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
