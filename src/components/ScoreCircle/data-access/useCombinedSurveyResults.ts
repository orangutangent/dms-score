import { useEffect, useState } from 'react';
import { useSurveyStore } from '../../../store/survey';
import { Question, Answer } from '../../../components/Question/model/types';

const calculateScore = (question: Question, answer: Answer | null): number => {
  if (answer === null) return 0;

  if (typeof answer === 'number') {
    return answer * question.weight;
  }

  if (typeof answer === 'object' && 'choice' in answer) {
    return (question.scoring?.[answer.choice] || 0) * question.weight;
  }

  return 0;
};

export const useCombinedSurveyResults = (surveys: { [key: string]: Question[] }) => {
  const { answers } = useSurveyStore();
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const newScores: { [key: string]: number } = {};
    let totalScore = 0;
    let totalWeight = 0;

    for (const surveyName in surveys) {
      const surveyQuestions = surveys[surveyName];
      const surveyAnswers = answers[surveyName as keyof typeof answers] || {};

      surveyQuestions.forEach((question, index) => {
        if (!newScores[question.criterion]) {
          newScores[question.criterion] = 0;
        }
        const answer = surveyAnswers[index] || null;
        const score = calculateScore(question, answer);
        newScores[question.criterion] += score;
        totalScore += score;
        totalWeight += question.weight;
      });
    }

    const newAverage = totalWeight > 0 ? totalScore / totalWeight : 0;

    setScores(newScores);
    setAverageScore(newAverage);
  }, [answers, surveys]);

  return { scores, averageScore };
};
