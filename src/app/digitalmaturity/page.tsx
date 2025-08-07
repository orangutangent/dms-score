'use client';

import React from 'react';
import { useSurvey } from '../../components/Question/data-access/useSurvey';
import Question from '../../components/Question';
import { Question as QuestionType } from '../../components/Question/model/types';
import questionsData from '../../questions.json';
import { useBusinessSurveyStore } from '../../store/business-survey.store';

const questions: QuestionType[] = questionsData as QuestionType[];

const locationQuestion: QuestionType = {
  id: -1,
  inputType: 'location', // Corrected from 'type'
  criterion: 'Location',
  question: 'В какой стране вы находитесь?',
  weight: 0,
};

const finalThoughtsQuestion: QuestionType = {
  id: -2,
  inputType: 'final-thoughts', // Corrected from 'type'
  criterion: 'Feedback',
  question: 'Можете оставить свои пожелания по улучшению цифровых услуг при желании',
  placeholder: 'Введите свои пожелания',
  weight: 0,
};

const allQuestions = [locationQuestion, ...questions, finalThoughtsQuestion];

const DigitalMaturityPage = () => {
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
  } = useSurvey(useBusinessSurveyStore, allQuestions, '/resultsmatutiry');

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
          onNext={handleNext}
          onBack={handleBack}
          progress={progress}
          initialAnswer={initialAnswer}
          initialLocation={location}
          onLocationChange={setLocation}
          initialFinalThoughts={finalThoughts}
          onFinalThoughtsChange={setFinalThoughts}
        />
      </div>
    </main>
  );
};

export default DigitalMaturityPage;
