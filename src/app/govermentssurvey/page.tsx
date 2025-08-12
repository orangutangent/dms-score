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
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { expandServiceTemplates, localizeQuestions } from "@/lib/survey";
import type { GovernmentSurveySubmitDataDTO } from "@/api/types";
import { useTranslations, useLocale } from "next-intl";

const GovermentsSurveyPage = () => {
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
    question: t("HardcodedQuestions.locationGov"),
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
    finalThoughts,
    setFinalThoughts,
    responses,
  } = useSurvey(
    useGovernmentSurveyStore,
    allQuestions,
    "/resultsgovermentserice"
  );

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
    const dataToSend: GovernmentSurveySubmitDataDTO = {
      location,
      finalThoughts,
      responses,
    };
    submitSurvey.mutate(dataToSend);
  };

  const customHandleNext = (answer: Answer) => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      setFinalThoughts(answer?.value || "");
      handleFinalSubmit();
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
          surveyType="government"
          initialAnswer={initialAnswer}
          initialLocation={location}
          onLocationChange={setLocation}
          initialSector={null}
          onSectorChange={() => {}}
          initialFinalThoughts={finalThoughts}
          onFinalThoughtsChange={setFinalThoughts}
          onResponseChange={setResponse}
          isSubmitting={submitSurvey.isPending}
          isLastQuestion={currentQuestionIndex === allQuestions.length - 1}
        />
      </div>
    </main>
  );
};

export default GovermentsSurveyPage;
