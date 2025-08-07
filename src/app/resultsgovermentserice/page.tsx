"use client";

import React, { useMemo } from "react";
import ScoreCircle from "../../components/ScoreCircle";
import ScoreTable from "../../components/ScoreTable";
import AdviceBlock from "../../components/AdviceBlock";
import { useSurveyResults } from "../../components/ScoreCircle/data-access/useSurveyResults"; // Changed to useSurveyResults
import { criteriaColors } from "../../config/criteriaColors";
import { Question } from "../../components/Question/model/types";
import questionsData from "../../govermentssurvey.json";
import { useGovernmentSurveyStore } from "../../store/government-survey.store";

const questions: Question[] = questionsData as Question[];

const ResultsGovermentServicePage = () => {
  // Use useSurveyResults for a single survey
  const { scores, averageScore } = useSurveyResults(
    useGovernmentSurveyStore,
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

  return (
    <main className="h-full flex-1 flex justify-center items-center p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold  mb-8">Ваш результат</h1>
        <div className="grid grid-cols-1 w-full lg:grid-cols-[27rem,auto] gap-6">
          {/* Left Block */}
          <div className="lg:row-span-2 bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
            <ScoreCircle scores={scores} criteria={criteria} />
          </div>

          {/* Top Right Block */}
          <div className="lg:col-start-2 bg-white rounded-2xl shadow-lg p-8 w-[38rem]">
            <ScoreTable scores={scores} criteria={criteria} />
          </div>

          {/* Bottom Right Block */}
          <div className="lg:col-start-2 bg-white rounded-2xl shadow-lg p-8 w-[38rem]">
            <AdviceBlock averageScore={averageScore} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResultsGovermentServicePage;
