import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Question, Answer } from '../model/types';
import { useSurveyStore } from '../../../store/survey';

export const useSurvey = (survey: keyof ReturnType<typeof useSurveyStore.getState>['answers'], questions: Question[], resultsPage: string) => {
  const router = useRouter();
  const { answers, setAnswer } = useSurveyStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (answer: Answer) => {
    setAnswer(survey, currentQuestionIndex, answer);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      router.push(resultsPage);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const progress = (currentQuestionIndex / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];
  const initialAnswer = answers[survey]?.[currentQuestionIndex] || null;

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    handleNext,
    handleBack,
    progress,
    initialAnswer,
  };
};
