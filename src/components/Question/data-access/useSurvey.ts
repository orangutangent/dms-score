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
  sector?: string; // Optional for government survey
  finalThoughts: string;
  setAnswer: (questionIndex: number, answer: Answer) => void;
  setLocation: (location: LocationState) => void;
  setSector?: (sector: string) => void; // This is the culprit, it's optional
  setFinalThoughts: (thoughts: string) => void;
};

export const useSurvey = (useStore: () => SurveyStore, questions: Question[], resultsPage: string) => {
  const router = useRouter();
  const store = useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (answer: Answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    // Handle special questions that don't store answers in the main 'answers' object
    if (currentQuestion.inputType !== 'location' && currentQuestion.inputType !== 'sector' && currentQuestion.inputType !== 'final-thoughts') {
      // Adjust index for regular answers
      const answerIndex = questions.slice(0, currentQuestionIndex).filter(q => q.inputType !== 'location' && q.inputType !== 'sector' && q.inputType !== 'final-thoughts').length;
      store.setAnswer(answerIndex, answer);
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

  const progress = (currentQuestionIndex / (questions.length -1)) * 100;
  const currentQuestion = questions[currentQuestionIndex];
  
  // Determine the initial answer for the current question
  let initialAnswer: Answer = null;
  if (currentQuestion.inputType !== 'location' && currentQuestion.inputType !== 'sector' && currentQuestion.inputType !== 'final-thoughts') {
      const answerIndex = questions.slice(0, currentQuestionIndex).filter(q => q.inputType !== 'location' && q.inputType !== 'sector' && q.inputType !== 'final-thoughts').length;
      initialAnswer = store.answers[answerIndex] || null;
  }

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    handleNext,
    handleBack,
    progress,
    initialAnswer,
    answers: store.answers, // Explicitly return answers
    location: store.location,
    setLocation: store.setLocation,
    sector: store.sector || '',
    setSector: store.setSector || (() => {}),
    finalThoughts: store.finalThoughts,
    setFinalThoughts: store.setFinalThoughts,
  };
};
