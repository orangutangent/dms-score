"use client";

import React, { useMemo } from "react";
import ScoreCircle from "../../components/ScoreCircle";
import ScoreTable from "../../components/ScoreTable";
import { criteriaColors } from "../../config/criteriaColors";
import { Question } from "../../components/Question/model/types";
import questionsData from "../../questions.json";
import { getStage } from "@/lib/stage";
import { useBusinessSurveyStore } from "../../store/business-survey.store";
import { useTranslations } from "next-intl";

const questions: Question[] = questionsData as unknown as Question[];

const getMaturityStage = (score0to10: number) => {
  const stage = getStage(score0to10);
  return `${stage.letter} - ${stage.label}`;
};

const ResultsMaturityPage = () => {
  const t = useTranslations("ResultsPage");
  const { responses } = useBusinessSurveyStore();

  const criteria = useMemo(() => {
    const uniqueCriteria = [...new Set(questions.map((q) => q.criterion))];
    return uniqueCriteria.reduce((acc, criterion, index) => {
      acc[criterion] = {
        color: criteriaColors[index % criteriaColors.length],
        weight: 1, // Добавляем вес для ScoreCircle
      };
      return acc;
    }, {} as { [key: string]: { color: string; weight: number } });
  }, []);

  // Вычисляем баллы по критериям (новая логика, 10-балльная шкала)
  const scores = useMemo(() => {
    const criterionStats: Record<string, { sum: number; count: number }> = {};

    // Группируем и считаем сумму и кол-во по критериям
    responses.forEach((response) => {
      if (!criterionStats[response.criterion]) {
        criterionStats[response.criterion] = { sum: 0, count: 0 };
      }
      criterionStats[response.criterion].sum += response.score01;
      criterionStats[response.criterion].count++;
    });

    // Считаем средний балл и приводим к 10-балльной шкале
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
  }, [responses]);

  // Вычисляем средний балл по всем критериям (уже в 10-балльной шкале)
  const averageScore = useMemo(() => {
    const criteriaScores = Object.values(scores);
    return criteriaScores.length > 0
      ? criteriaScores.reduce((sum, score) => sum + score, 0) /
          criteriaScores.length
      : 0;
  }, [scores]);

  const overallStage = getMaturityStage(averageScore);

  return (
    <main className="h-full flex-1 flex justify-center items-center p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t("yourResult")}</h1>
        <div className="grid grid-cols-1 w-full lg:grid-cols-[28rem,auto] gap-6">
          {/* Левый блок - Круг и стадия */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
            <p className="text-xl font-semibold text-gray-700 mb-4">
              {t("stageLabel", { stage: overallStage })}
            </p>
            <ScoreCircle
              scores={scores}
              criteria={criteria}
              title={t("yourScore")}
            />
          </div>

          {/* Правый блок - Таблица баллов */}
          <div className="lg:col-start-2 max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">{t("smeMaturityTitle")}</h2>
            <ScoreTable
              scores={scores}
              criteria={criteria}
              averageScore={averageScore}
              getMaturityStage={getMaturityStage}
              scoreColumnTitle={t("averageScore")}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResultsMaturityPage;
