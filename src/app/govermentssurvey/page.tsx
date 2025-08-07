"use client";

import React from "react";
import { useSurvey } from "../../components/Question/data-access/useSurvey";
import Question from "../../components/Question";
import { Question as QuestionType } from "../../components/Question/model/types";
import questionsData from "../../govermentssurvey.json";
import { useGovernmentSurveyStore } from "../../store/government-survey.store";

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

const allQuestions = [locationQuestion, ...questions, finalThoughtsQuestion];

const GovermentsSurveyPage = () => {
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
  } = useSurvey(
    useGovernmentSurveyStore,
    allQuestions,
    "/resultsgovermentserice"
  );

  if (!currentQuestion) {
    return (
      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold">Опрос в разработке</h1>
        <p className="mt-4">Этот раздел скоро будет доступен.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-8 bg-[var(--background)]">
      <div className="w-full max-w-5xl mx-auto   ">
        <Question
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
          onNext={handleNext}
          onBack={handleBack}
          progress={progress}
          initialAnswer={initialAnswer}
          initialLocation={location}
          onLocationChange={setLocation}
          initialSector={sector || ""}
          onSectorChange={setSector || (() => {})}
          initialFinalThoughts={finalThoughts}
          onFinalThoughtsChange={setFinalThoughts}
        />
      </div>
    </main>
  );
};

export default GovermentsSurveyPage;
