import type { GovernmentSurveyResponseDTO } from "@/api/types";
import { SCALE_DEFAULT_STEPS } from "@/config/constants";

/**
 * Вычисляет score01 для radio input
 */
export function calculateRadioScore(
  value: string,
  totalOptions: number
): number {
  if (!totalOptions || totalOptions <= 0) return 0;
  const numeric = Number(value);
  if (isNaN(numeric)) return 0;
  return Math.max(0, Math.min(1, numeric / totalOptions));
}

/**
 * Вычисляет score01 для scale input
 */
export function calculateScaleScore(value: string, maxSteps?: number): number {
  const max = maxSteps || SCALE_DEFAULT_STEPS;
  if (max <= 0) return 0;
  const v = Number(value);
  if (isNaN(v)) return 0;
  return Math.max(0, Math.min(1, v / max));
}

/**
 * Агрегирует responses по критериям
 */
export function aggregateByCriteria(responses: GovernmentSurveyResponseDTO[]) {
  const criterionScores: Record<string, number> = {};
  let totalScore = 0;
  let totalQuestions = 0;

  responses.forEach((r) => {
    if (!criterionScores[r.criterion]) {
      criterionScores[r.criterion] = 0;
    }
    criterionScores[r.criterion] += r.score01;
    totalScore += r.score01;
    totalQuestions++;
  });

  const overallScore = totalQuestions > 0 ? totalScore / totalQuestions : 0;

  return {
    criterionScores,
    overallScore,
    totalQuestions,
  };
}

/**
 * Агрегирует responses по услугам
 */
export function aggregateByServices(responses: GovernmentSurveyResponseDTO[]) {
  const serviceScores: Record<
    string,
    {
      criterionScores: Record<string, number>;
      totalScore: number;
      questionCount: number;
    }
  > = {};

  responses.forEach((r) => {
    if (!r.service) return;

    if (!serviceScores[r.service]) {
      serviceScores[r.service] = {
        criterionScores: {},
        totalScore: 0,
        questionCount: 0,
      };
    }

    if (!serviceScores[r.service].criterionScores[r.criterion]) {
      serviceScores[r.service].criterionScores[r.criterion] = 0;
    }

    serviceScores[r.service].criterionScores[r.criterion] += r.score01;
    serviceScores[r.service].totalScore += r.score01;
    serviceScores[r.service].questionCount++;
  });

  return serviceScores;
}
