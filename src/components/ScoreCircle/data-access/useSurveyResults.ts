import { useEffect, useState } from "react";
import { Question, Answer } from "@/components/Question/model/types";

const calculateScore = (question: Question, answer: Answer | null): number => {
  if (answer === null) return 0;
  // Prefer precomputed normalized score (0..1)
  if (typeof answer.score === "number") {
    return answer.score * 5 * question.weight;
  }
  // Scale: assume value already on 0..5
  if (question.inputType === "scale" && !isNaN(Number(answer.value))) {
    return Number(answer.value) * question.weight;
  }
  // Radio: compute i/N
  if (question.inputType === "radio") {
    const total = question.options?.length || 0;
    if (total === 0) return 0;
    const numeric = Number(answer.value);
    const fraction = isNaN(numeric) ? 0 : numeric / total;
    return fraction * 5 * question.weight;
  }
  return 0;
};

type SurveyStore = {
  answers: Record<number, Answer>;
};

export const useSurveyResults = (
  useStore: () => SurveyStore,
  questions: Question[]
) => {
  const { answers } = useStore();
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const newScores: { [key: string]: number } = {};
    let totalScore = 0;
    let totalWeight = 0;

    questions.forEach((question, index) => {
      const isSpecial =
        question.inputType === "location" ||
        question.inputType === "sector" ||
        question.inputType === "final-thoughts";
      if (!newScores[question.criterion]) {
        newScores[question.criterion] = 0;
      }
      // Map to store index as in useSurvey (only scorable questions counted)
      let answerIndex = 0;
      for (let i = 0; i < index; i++) {
        const qi = questions[i];
        const skip =
          qi.inputType === "location" ||
          qi.inputType === "sector" ||
          qi.inputType === "final-thoughts";
        if (!skip) answerIndex++;
      }
      const answer = isSpecial ? null : answers[answerIndex] || null;
      const score = calculateScore(question, answer);
      newScores[question.criterion] += score;
      totalScore += score;
      totalWeight += question.weight;
    });

    const newAverage = totalWeight > 0 ? totalScore / totalWeight : 0;

    setScores(newScores);
    setAverageScore(newAverage);
  }, [answers, questions]);

  return { scores, averageScore };
};
