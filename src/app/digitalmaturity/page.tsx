'use client';

import React from 'react';
import { useSurvey } from '../../components/Question/data-access/useSurvey';
import Question from '../../components/Question';
import { Question as QuestionType } from '../../components/Question/model/types';
import questionsData from '../../questions.json';

const questions: QuestionType[] = questionsData as QuestionType[];

const DigitalMaturityPage = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    handleNext,
    handleBack,
    progress,
    initialAnswer,
  } = useSurvey('digitalmaturity', questions, '/resultsmatutiry');

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
        />
      </div>
    </main>
  );
};

export default DigitalMaturityPage;
