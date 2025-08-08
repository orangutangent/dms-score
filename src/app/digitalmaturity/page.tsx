'use client';

import React from 'react';
import { useSurvey } from '../../components/Question/data-access/useSurvey';
import Question from '../../components/Question';
import { Question as QuestionType, Answer } from '../../components/Question/model/types';
import questionsData from '../../questions.json';
import { useBusinessSurveyStore } from '../../store/business-survey.store';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios'; // Import AxiosError
import { useRouter } from 'next/navigation';

const questions: QuestionType[] = questionsData as QuestionType[];

const locationQuestion: QuestionType = {
  id: -1,
  inputType: 'location',
  criterion: 'Location',
  question: 'В какой стране вы находитесь?',
  weight: 0,
};

const sectorQuestion: QuestionType = {
  id: -3,
  inputType: 'sector',
  criterion: 'Sector',
  question: 'К какому сектору экономики вы относитесь?',
  options: [
    { value: 'healthcare', label: 'Здравоохранение' },
    { value: 'education', label: 'Образование' },
    { value: 'other', label: 'Другое' },
  ],
  weight: 0,
};

const finalThoughtsQuestion: QuestionType = {
  id: -2,
  inputType: 'final-thoughts',
  criterion: 'Feedback',
  question: 'Можете оставить свои пожелания по улучшению цифровых услуг при желании',
  placeholder: 'Введите свои пожелания',
  weight: 0,
};

const allQuestions = [locationQuestion, sectorQuestion, ...questions, finalThoughtsQuestion];

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
    answers, // Explicitly get answers
  } = useSurvey(useBusinessSurveyStore, allQuestions, '/resultsmatutiry');

  type SubmitData = { location: { country: string; region: string }; sector: string; finalThoughts: string; answers: Record<number, Answer> };
  type SubmitResponse = { message: string; resultId: string };

  const submitSurvey = useMutation<SubmitResponse, AxiosError, SubmitData>({
    mutationFn: (data) => axios.post('/api/submit-digital-maturity', data),
    onSuccess: () => {
      router.push('/resultsmatutiry');
    },
    onError: (error) => {
      console.error('Error submitting survey:', error);
      alert(`Ошибка при отправке опроса: ${error.message}. Пожалуйста, попробуйте еще раз.`);
    },
  });

  const handleFinalSubmit = () => {
    // Collect all data from Zustand store
    const dataToSend: SubmitData = {
      location,
      sector: sector || '',
      finalThoughts,
      answers, // Raw answers from Zustand
    };
    submitSurvey.mutate(dataToSend);
  };

  // Override handleNext for the last question to trigger submission
  const customHandleNext = (answer: Answer) => {
    if (currentQuestionIndex === allQuestions.length - 1) {
      // This is the final question (final thoughts)
      setFinalThoughts(answer?.value || ''); // Ensure final thoughts are saved
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
          initialSector={sector || ''}
          onSectorChange={setSector}
          initialFinalThoughts={finalThoughts}
          onFinalThoughtsChange={setFinalThoughts}
        />
      </div>
    </main>
  );
};

export default DigitalMaturityPage;