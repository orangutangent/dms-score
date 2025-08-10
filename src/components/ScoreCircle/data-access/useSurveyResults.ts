import { useEffect, useState } from "react";
import type { GovernmentSurveyResponseDTO } from "@/api/types";

type SurveyStore = {
  responses: GovernmentSurveyResponseDTO[];
};

export const useSurveyResults = (useStore: () => SurveyStore) => {
  const { responses } = useStore();
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const newScores: { [key: string]: number } = {};
    let totalScore = 0;
    let totalQuestions = 0;

    // Группируем responses по критериям
    responses.forEach((response) => {
      if (!newScores[response.criterion]) {
        newScores[response.criterion] = 0;
      }
      newScores[response.criterion] += response.score01;
      totalScore += response.score01;
      totalQuestions++;
    });

    // Вычисляем средний балл по всем критериям
    const newAverage = totalQuestions > 0 ? totalScore / totalQuestions : 0;

    setScores(newScores);
    setAverageScore(newAverage);
  }, [responses]);

  return { scores, averageScore };
};
