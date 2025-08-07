import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Question, Answer } from '../model/types';

// The hook now accepts a generic store hook
type SurveyStore = {
  answers: Record<number, Answer>;
  setAnswer: (questionIndex: number, answer: Answer) => void;
};

export const useSurvey = (useStore: () => SurveyStore, questions: Question[], resultsPage: string) => {
  const router = useRouter();
  const { answers, setAnswer } = useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (answer: Answer) => {
    setAnswer(currentQuestionIndex, answer);

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
  const initialAnswer = answers[currentQuestionIndex] || null;

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