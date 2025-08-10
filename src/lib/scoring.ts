import type {
  GovernmentSurveyResponseDTO,
  BusinessSurveyResponseDTO,
} from "@/api/types";
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
  // Предполагаем, что value это 1-based индекс, поэтому для score01 нужно вычесть 1
  return Math.max(0, Math.min(1, (numeric - 1) / (totalOptions - 1)));
}

/**
 * Вычисляет score01 для scale input
 */
export function calculateScaleScore(value: string, maxSteps?: number): number {
  const max = maxSteps || SCALE_DEFAULT_STEPS;
  if (max <= 0) return 0;
  const v = Number(value);
  if (isNaN(v)) return 0;
  // Шкала от 1 до max, поэтому для score01 делаем (v-1) / (max-1)
  return Math.max(0, Math.min(1, (v - 1) / (max - 1)));
}

/**
 * Агрегирует responses по критериям и приводит к 10-балльной шкале.
 */
export function aggregateByCriteria(
  responses: GovernmentSurveyResponseDTO[] | BusinessSurveyResponseDTO[]
) {
  const criterionStats: Record<string, { sum: number; count: number }> = {};
  let totalScoreSum = 0;

  responses.forEach((r) => {
    if (!criterionStats[r.criterion]) {
      criterionStats[r.criterion] = { sum: 0, count: 0 };
    }
    criterionStats[r.criterion].sum += r.score01;
    criterionStats[r.criterion].count++;
    totalScoreSum += r.score01;
  });

  const criterionScores: Record<string, number> = {};
  for (const crit in criterionStats) {
    const stats = criterionStats[crit];
    if (stats.count > 0) {
      criterionScores[crit] = (stats.sum / stats.count) * 10;
    } else {
      criterionScores[crit] = 0;
    }
  }

  const overallScore =
    responses.length > 0 ? (totalScoreSum / responses.length) * 10 : 0;

  return {
    criterionScores,
    overallScore,
    totalQuestions: responses.length,
  };
}

/**
 * Агрегирует responses по услугам и приводит к 10-балльной шкале.
 */
export function aggregateByServices(
  responses: GovernmentSurveyResponseDTO[] | BusinessSurveyResponseDTO[]
) {
  const serviceStats: Record<
    string,
    {
      criterionSums: Record<string, { sum: number; count: number }>;
      totalSum: number;
      questionCount: number;
    }
  > = {};

  responses.forEach((r) => {
    if (!r.service) return;

    if (!serviceStats[r.service]) {
      serviceStats[r.service] = {
        criterionSums: {},
        totalSum: 0,
        questionCount: 0,
      };
    }
    const service = serviceStats[r.service];

    if (!service.criterionSums[r.criterion]) {
      service.criterionSums[r.criterion] = { sum: 0, count: 0 };
    }

    service.criterionSums[r.criterion].sum += r.score01;
    service.criterionSums[r.criterion].count++;
    service.totalSum += r.score01;
    service.questionCount++;
  });

  // Конвертируем в финальную структуру с 10-балльными очками
  const serviceScores: Record<
    string,
    {
      criterionScores: Record<string, number>;
      overallScore: number;
    }
  > = {};

  for (const serviceCode in serviceStats) {
    const stats = serviceStats[serviceCode];
    const finalCriterionScores: Record<string, number> = {};

    for (const crit in stats.criterionSums) {
      const critStats = stats.criterionSums[crit];
      if (critStats.count > 0) {
        finalCriterionScores[crit] = (critStats.sum / critStats.count) * 10;
      } else {
        finalCriterionScores[crit] = 0;
      }
    }

    serviceScores[serviceCode] = {
      criterionScores: finalCriterionScores,
      overallScore:
        stats.questionCount > 0
          ? (stats.totalSum / stats.questionCount) * 10
          : 0,
    };
  }

  return serviceScores;
}
