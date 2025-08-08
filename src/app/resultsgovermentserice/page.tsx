"use client";

import React, { useMemo } from "react";
import ScoreCircle from "../../components/ScoreCircle";
import ScoreTable from "../../components/ScoreTable";
import AdviceBlock from "../../components/AdviceBlock";
import { useSurveyResults } from "../../components/ScoreCircle/data-access/useSurveyResults";
import { criteriaColors } from "../../config/criteriaColors";
import { Question } from "../../components/Question/model/types";
import questionsData from "../../govermentssurvey.json";
import { useGovernmentSurveyStore } from "../../store/government-survey.store";

const questions: Question[] = questionsData as Question[];

const getMaturityStage = (score: number) => {
  if (score < 1.5) return "C";
  if (score < 3) return "B";
  if (score < 4.5) return "A";
  return "A+"; // Assuming A+ for highest level
};

const ResultsGovermentServicePage = () => {
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

  // Separate questions into two groups based on their criterion
  const mainQuestions = questions.filter((q) =>
    [
      "Инфраструктурный уровень",
      "Государственный уровень",
      "Уровень бизнеса",
      "Персональный уровень",
      "Уровень экосистемы",
    ].includes(q.criterion)
  );
  const specialQuestions = questions.filter((q) =>
    [
      "Специальный раздел 1",
      "Специальный раздел 2",
      "Специальный раздел 3",
    ].includes(q.criterion)
  );

  const mainCriteria = useMemo(() => {
    const uniqueCriteria = [...new Set(mainQuestions.map((q) => q.criterion))];
    return uniqueCriteria.reduce((acc, criterion, index) => {
      acc[criterion] = {
        color: criteriaColors[index % criteriaColors.length],
        weight: mainQuestions
          .filter((q) => q.criterion === criterion)
          .reduce((sum, q) => sum + q.weight, 0),
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
          ], // Corrected
        weight: specialQuestions
          .filter((q) => q.criterion === criterion)
          .reduce((sum, q) => sum + q.weight, 0),
      };
      return acc;
    }, {} as { [key: string]: { color: string; weight: number } });
  }, [specialQuestions, mainCriteria]); // Added mainCriteria to dependency array

  // Calculate scores for main and special sections separately
  const mainScores = useMemo(() => {
    const s: { [key: string]: number } = {};
    mainQuestions.forEach((q, index) => {
      const answer = useGovernmentSurveyStore.getState().answers[index] || null;
      // This part needs to be more robust to calculate scores based on answer type
      // For now, assuming simple number answers for main questions
      if (typeof answer?.value === "string" && !isNaN(Number(answer.value))) {
        s[q.criterion] =
          (s[q.criterion] || 0) + Number(answer.value) * q.weight;
      }
    });
    return s;
  }, [useGovernmentSurveyStore.getState().answers, mainQuestions]);

  const specialScores = useMemo(() => {
    const s: { [key: string]: number } = {};
    specialQuestions.forEach((q, index) => {
      // Adjust index for special questions based on their position in the original 'questions' array
      const originalIndex = questions.indexOf(q);
      const answer =
        useGovernmentSurveyStore.getState().answers[originalIndex] || null;
      // This part needs to be more robust to calculate scores based on answer type
      // For now, assuming simple number answers for special questions
      if (typeof answer?.value === "string" && !isNaN(Number(answer.value))) {
        s[q.criterion] =
          (s[q.criterion] || 0) + Number(answer.value) * q.weight;
      }
    });
    return s;
  }, [
    useGovernmentSurveyStore.getState().answers,
    specialQuestions,
    questions,
  ]);

  const overallStage = getMaturityStage(averageScore);

  return (
    <main className="h-full flex-1 flex justify-center items-center p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold  mb-8">Ваш результат</h1>
        <div className="grid grid-cols-1 w-full lg:grid-cols-[28rem,auto] gap-6">
          {/* Left Block - Circle and Stage */}
          <div className=" bg-white  rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center ">
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Стадия: {overallStage} - Adoption
            </p>
            <ScoreCircle scores={scores} criteria={criteria} />
          </div>
          {/* Top Right Block - Main Score Table */}
          <div className=" col-start-2 max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              Оценка цифровой зрелости гос. услуг
            </h2>
            <ScoreTable
              scores={mainScores}
              criteria={mainCriteria}
              averageScore={averageScore}
              getMaturityStage={getMaturityStage}
            />
          </div>
          {/* Bottom Right Block - Special Score Table */}
          <div className="col-start-2 max-w-xl  bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Специальные разделы</h2>
            <ScoreTable
              scores={specialScores}
              criteria={specialCriteria}
              averageScore={averageScore}
              getMaturityStage={getMaturityStage}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResultsGovermentServicePage;
