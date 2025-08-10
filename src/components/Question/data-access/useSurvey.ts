import { useState } from "react";
import { useRouter } from "next/navigation";
import { Question, Answer } from "../model/types";
import type {
  GovernmentSurveyResponseDTO,
  BusinessSurveyResponseDTO,
} from "@/api/types";

type LocationState = {
  country: string;
  region: string;
};

type GovernmentSurveyStore = {
  responses: GovernmentSurveyResponseDTO[];
  location: LocationState;
  sector?: string;
  finalThoughts: string;
  setResponse: (response: GovernmentSurveyResponseDTO) => void;
  setLocation: (location: LocationState) => void;
  setSector?: (sector: string) => void;
  setFinalThoughts: (thoughts: string) => void;
};

type BusinessSurveyStore = {
  responses: BusinessSurveyResponseDTO[];
  location: LocationState;
  sector: string;
  finalThoughts: string;
  setResponse: (response: BusinessSurveyResponseDTO) => void;
  setLocation: (location: LocationState) => void;
  setSector: (sector: string) => void;
  setFinalThoughts: (thoughts: string) => void;
};

export const useSurvey = (
  useStore: () => GovernmentSurveyStore,
  questions: Question[],
  resultsPage: string
) => {
  const router = useRouter();
  const store = useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (answer: Answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    // Handle special questions that don't store answers in the main 'responses' object
    if (
      currentQuestion.inputType !== "location" &&
      currentQuestion.inputType !== "sector" &&
      currentQuestion.inputType !== "final-thoughts" &&
      answer
    ) {
      // Сохраняем ответ в store
      store.setResponse({
        questionId: currentQuestion.id,
        criterion: currentQuestion.criterion,
        service: currentQuestion.service,
        answerValue: answer.value,
        score01: answer.score || 0,
      });
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
  if (
    currentQuestion.inputType !== "location" &&
    currentQuestion.inputType !== "sector" &&
    currentQuestion.inputType !== "final-thoughts"
  ) {
    const existingResponse = store.responses.find(
      (r) =>
        r.questionId === currentQuestion.id &&
        r.service === currentQuestion.service
    );
    if (existingResponse) {
      initialAnswer = {
        value: existingResponse.answerValue || "",
        score: existingResponse.score01,
      };
    }
  }

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    handleNext,
    handleBack,
    progress,
    initialAnswer,
    responses: store.responses,
    location: store.location,
    setLocation: store.setLocation,
    sector: store.sector || "",
    setSector: store.setSector || (() => {}),
    finalThoughts: store.finalThoughts,
    setFinalThoughts: store.setFinalThoughts,
  };
};

export const useBusinessSurvey = (
  useStore: () => BusinessSurveyStore,
  questions: Question[],
  resultsPage: string
) => {
  const router = useRouter();
  const store = useStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = (answer: Answer) => {
    const currentQuestion = questions[currentQuestionIndex];
    // Handle special questions that don't store answers in the main 'responses' object
    if (
      currentQuestion.inputType !== "location" &&
      currentQuestion.inputType !== "sector" &&
      currentQuestion.inputType !== "final-thoughts" &&
      answer
    ) {
      // Сохраняем ответ в store
      store.setResponse({
        questionId: currentQuestion.id,
        criterion: currentQuestion.criterion,
        service: currentQuestion.service,
        answerValue: answer.value,
        score01: answer.score || 0,
      });
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
  if (
    currentQuestion.inputType !== "location" &&
    currentQuestion.inputType !== "sector" &&
    currentQuestion.inputType !== "final-thoughts"
  ) {
    const existingResponse = store.responses.find(
      (r) =>
        r.questionId === currentQuestion.id &&
        r.service === currentQuestion.service
    );
    if (existingResponse) {
      initialAnswer = {
        value: existingResponse.answerValue || "",
        score: existingResponse.score01,
      };
    }
  }

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions: questions.length,
    handleNext,
    handleBack,
    progress,
    initialAnswer,
    responses: store.responses,
    location: store.location,
    setLocation: store.setLocation,
    sector: store.sector,
    setSector: store.setSector,
    finalThoughts: store.finalThoughts,
    setFinalThoughts: store.setFinalThoughts,
  };
};
