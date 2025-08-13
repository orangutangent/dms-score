import { getStage } from "@/lib/stage";
import { BusinessSurveyResponseDTO } from "@/api/types";

export const getMaturityStage = (score0to10: number) => {
  const stage = getStage(score0to10);
  return `${stage.letter} - ${stage.label}`;
};

export const calculateScores = (responses: BusinessSurveyResponseDTO[]) => {
  const criterionStats: Record<string, { sum: number; count: number }> = {};

  responses.forEach((response) => {
    if (!criterionStats[response.criterion]) {
      criterionStats[response.criterion] = { sum: 0, count: 0 };
    }
    criterionStats[response.criterion].sum += response.score01;
    criterionStats[response.criterion].count++;
  });

  const finalScores: { [key: string]: number } = {};
  for (const crit in criterionStats) {
    const stats = criterionStats[crit];
    if (stats.count > 0) {
      finalScores[crit] = (stats.sum / stats.count) * 10;
    } else {
      finalScores[crit] = 0;
    }
  }

  return finalScores;
};
