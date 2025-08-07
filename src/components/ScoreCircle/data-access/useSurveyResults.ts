import { useEffect, useState } from 'react';
import { Question, Answer } from '../../../components/Question/model/types';

const calculateScore = (question: Question, answer: Answer | null): number => {
  if (answer === null) return 0;
  if (typeof answer === 'number') return answer * question.weight;
  if (typeof answer === 'object' && 'choice' in answer) {
    return (question.scoring?.[answer.choice] || 0) * question.weight;
  }
  return 0;
};

type SurveyStore = {
  answers: Record<number, Answer>;
};

export const useSurveyResults = (useStore: () => SurveyStore, questions: Question[]) => {
  const { answers } = useStore();
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const newScores: { [key: string]: number } = {};
    let totalScore = 0;
    let totalWeight = 0;

    questions.forEach((question, index) => {
      if (!newScores[question.criterion]) {
        newScores[question.criterion] = 0;
      }
      const answer = answers[index] || null;
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