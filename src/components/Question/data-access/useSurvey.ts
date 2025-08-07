import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Question, Answer } from '../model/types';

type LocationState = {
  country: string;
  region: string;
};

type SurveyStore = {
  answers: Record<number, Answer>;
  location: LocationState;
  finalThoughts: string;
  setAnswer: (questionIndex: number, answer: Answer) => void;
  setLocation: (location: LocationState) => void;
  setFinalThoughts: (thoughts: string) => void;
};

export const useSurvey = (useStore: () => SurveyStore, questions: Question[], resultsPage: string) => {
  const router = useRouter();
  const { 
    answers, 
    location, 
    finalThoughts, 
    setAnswer, 
    setLocation, 
    setFinalThoughts 
  } = useStore();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (answer: Answer) => {
    // The location question is always at index 0
    // The final thoughts question is always at the last index
    if (currentQuestionIndex > 0 && currentQuestionIndex < questions.length - 1) {
      // Adjust index for storing regular answers
      setAnswer(currentQuestionIndex - 1, answer);
    }

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

  const progress = (currentQuestionIndex / (questions.length - 1)) * 100;
  const currentQuestion = questions[currentQuestionIndex];
  
  // Determine the initial answer for the current question
  let initialAnswer: Answer = null;
  if (currentQuestion.inputType !== 'location' && currentQuestion.inputType !== 'final-thoughts') {
    initialAnswer = answers[currentQuestionIndex - 1] || null;
  }

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    handleNext,
    handleBack,
    progress,
    initialAnswer,
    location,
    setLocation,
    finalThoughts,
    setFinalThoughts,
  };
};