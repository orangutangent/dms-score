"use client";

import React, { useMemo } from "react";
import ScoreCircle from "../../components/ScoreCircle";
import ScoreTable from "../../components/ScoreTable";
import { criteriaColors } from "../../config/criteriaColors";
import { Question } from "../../components/Question/model/types";
import questionsData from "../../govermentssurvey.json";
import { expandServiceTemplates } from "@/lib/survey";
import { getStage } from "@/lib/stage";
import { useGovernmentSurveyStore } from "../../store/government-survey.store";
import { GovernmentSurveyResponseDTO } from "@/api/types";
import { useTranslations } from "next-intl";

const questions: Question[] = expandServiceTemplates(
  questionsData as unknown as Question[]
);

const getMaturityStage = (score0to10: number) => {
  const stage = getStage(score0to10);
  return `${stage.letter} - ${stage.label}`;
};

const calculateScores = (
  responses: GovernmentSurveyResponseDTO[],
  relevantQuestions: Question[]
) => {
  const criterionStats: Record<string, { sum: number; count: number }> = {};

  responses.forEach((response) => {
    if (relevantQuestions.some((q) => q.criterion === response.criterion)) {
      if (!criterionStats[response.criterion]) {
        criterionStats[response.criterion] = { sum: 0, count: 0 };
      }
      criterionStats[response.criterion].sum += response.score01;
      criterionStats[response.criterion].count++;
    }
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

const ResultsGovermentServicePage = () => {
  const t = useTranslations("ResultsPage");
  const { responses } = useGovernmentSurveyStore();

  // Разделяем вопросы на основные и специальные разделы
  const mainQuestions = questions.filter((q) =>
    [
      "INFRASTRUCTURE_LEVEL",
      "GOVERNMENT_LEVEL",
      "BUSINESS_LEVEL",
      "PERSONAL_LEVEL",
      "ECOSYSTEM_LEVEL",
    ].includes(q.criterion)
  );

  const specialQuestions = questions.filter((q) =>
    ["SPECIAL_SECTION_1", "SPECIAL_SECTION_2", "SPECIAL_SECTION_3"].includes(
      q.criterion
    )
  );

  // Вычисляем баллы для основных и специальных разделов
  const mainScores = useMemo(
    () => calculateScores(responses, mainQuestions),
    [responses, mainQuestions]
  );
  const specialScores = useMemo(
    () => calculateScores(responses, specialQuestions),
    [responses, specialQuestions]
  );

  // Вычисляем средний балл по всем критериям
  const calculateAverage = (scores: { [key: string]: number }) => {
    const criteriaScores = Object.values(scores);
    return criteriaScores.length > 0
      ? criteriaScores.reduce((sum, score) => sum + score, 0) /
          criteriaScores.length
      : 0;
  };

  const mainAverageScore = useMemo(
    () => calculateAverage(mainScores),
    [mainScores]
  );
  const specialAverageScore = useMemo(
    () => calculateAverage(specialScores),
    [specialScores]
  );

  const mainCriteria = useMemo(() => {
    const uniqueCriteria = [...new Set(mainQuestions.map((q) => q.criterion))];
    return uniqueCriteria.reduce((acc, criterion, index) => {
      acc[criterion] = {
        color: criteriaColors[index % criteriaColors.length],
        weight: 1,
      };
      return acc;
    }, {} as { [key: string]: { color: string; weight: number } });
  }, [mainQuestions]);

  const specialCriteria = useMemo(() => {
    const uniqueCriteria = [
      ...new Set(specialQuestions.map((q) => q.criterion)),
    ];
    return uniqueCriteria.reduce((acc, criterion, index) => {
      acc[criterion] = {
        color:
          criteriaColors[
            (index + Object.keys(mainCriteria).length) % criteriaColors.length
          ],
        weight: 1,
      };
      return acc;
    }, {} as { [key: string]: { color: string; weight: number } });
  }, [specialQuestions, mainCriteria]);

  const overallStage = getMaturityStage(mainAverageScore);

  return (
    <main className="h-full flex-1 flex justify-center items-center p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t("yourResult")}</h1>
        <div className="grid grid-cols-1 w-full lg:grid-cols-[28rem,auto] gap-6">
          {/* Левый блок - Круг и стадия (только основные уровни) */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
            <p className="text-xl font-semibold text-gray-700 mb-4">
              {t("stageLabel", { stage: overallStage })}
            </p>
            <ScoreCircle
              scores={mainScores}
              criteria={mainCriteria}
              title={t("yourScore")}
            />
          </div>

          {/* Правый верхний блок - Таблица основных баллов */}
          <div className="lg:col-start-2 max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">{t("govMaturityTitle")}</h2>
            <ScoreTable
              scores={mainScores}
              criteria={mainCriteria}
              averageScore={mainAverageScore}
              getMaturityStage={getMaturityStage}
              scoreColumnTitle={t("averageScore")}
            />
          </div>

          {/* Правый нижний блок - Таблица специальных разделов */}
          {/* {Object.keys(specialScores).length > 0 && ( */}
          <div className="lg:col-start-2 max-w-xl bg-white rounded-2xl shadow-lg p-8 mt-6">
            <h2 className="text-2xl font-bold mb-4">
              {t("specialSectionsTitle")}
            </h2>
            <ScoreTable
              scores={specialScores}
              criteria={specialCriteria}
              averageScore={specialAverageScore}
              getMaturityStage={getMaturityStage}
              scoreColumnTitle={t("averageScore")}
            />
          </div>
          {/* )} */}
        </div>
      </div>
    </main>
  );
};

export default ResultsGovermentServicePage;
