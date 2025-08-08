"use client";

import React, { useMemo } from "react";
import ScoreCircle from "../../components/ScoreCircle";
import ScoreTable from "../../components/ScoreTable";
import AdviceBlock from "../../components/AdviceBlock";
import { useSurveyResults } from "../../components/ScoreCircle/data-access/useSurveyResults";
import { criteriaColors } from "../../config/criteriaColors";
import { Question } from "../../components/Question/model/types";
import questionsData from "../../questions.json";
import { useBusinessSurveyStore } from "../../store/business-survey.store";

const questions: Question[] = questionsData as Question[];

const getMaturityStage = (score: number) => {
  if (score < 1.5) return "C";
  if (score < 3) return "B";
  if (score < 4.5) return "A";
  return "A+"; // Assuming A+ for highest level
};

const ResultsMaturityPage = () => {
  const { scores, averageScore } = useSurveyResults(
    useBusinessSurveyStore,
    questions
  );

  const criteria = useMemo(() => {
    const uniqueCriteria = [...new Set(questions.map((q) => q.criterion))];
    return uniqueCriteria.reduce((acc, criterion, index) => {
      acc[criterion] = {
        color: criteriaColors[index % criteriaColors.length],
        weight: questions
          .filter((q) => q.criterion === criterion)
          .reduce((sum, q) => sum + q.weight, 0),
      };
      return acc;
    }, {} as { [key: string]: { color: string; weight: number } });
  }, [questions]);

  const overallStage = getMaturityStage(averageScore);

  return (
    <main className="h-full flex-1 flex justify-center items-center p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold  mb-8">Ваш результат</h1>
        <div className="grid grid-cols-1 w-full lg:grid-cols-[28rem,1fr] gap-6">
          {/* Left Block - Circle and Stage */}
          <div className=" bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center ">
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Стадия: {overallStage} - Adoption
            </p>
            <ScoreCircle scores={scores} criteria={criteria} />
          </div>
          {/* Right Block - Main Score Table */}
          <div className=" lg:col-start-2 max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              Оценка цифровой зрелости бизнеса
            </h2>
            <ScoreTable
              scores={scores}
              criteria={criteria}
              averageScore={averageScore}
              getMaturityStage={getMaturityStage}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResultsMaturityPage;
