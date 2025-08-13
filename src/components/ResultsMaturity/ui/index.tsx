"use client";

import React, { useMemo } from "react";
import ScoreCircle from "../../../components/ScoreCircle";
import ScoreTable from "../../../components/ScoreTable";
import { criteriaColors } from "../../../config/criteriaColors";
import { Question } from "../../../components/Question/model/types";
import questionsData from "../../../questions.json";
import { useBusinessSurveyStore } from "../../../store/business-survey.store";
import { useTranslations } from "next-intl";
import { calculateScores, getMaturityStage } from "../data-access/utils";

const questions: Question[] = questionsData as unknown as Question[];

const ResultsMaturity = () => {
  const t = useTranslations("ResultsPage");
  const { responses } = useBusinessSurveyStore();

  const criteria = useMemo(() => {
    const uniqueCriteria = [...new Set(questions.map((q) => q.criterion))];
    return uniqueCriteria.reduce((acc, criterion, index) => {
      acc[criterion] = {
        color: criteriaColors[index % criteriaColors.length],
        weight: 1,
      };
      return acc;
    }, {} as { [key: string]: { color: string; weight: number } });
  }, []);

  const scores = useMemo(() => calculateScores(responses), [responses]);

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

export default ResultsMaturity;
