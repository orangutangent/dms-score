"use client";

import React, { useMemo } from "react";
import ScoreCircle from "../../components/ScoreCircle";
import ScoreTable from "../../components/ScoreTable";
import { useSurveyResults } from "../../components/ScoreCircle/data-access/useSurveyResults";
import { criteriaColors } from "../../config/criteriaColors";
import { Question } from "../../components/Question/model/types";
import questionsData from "../../govermentssurvey.json";
import { expandServiceTemplates } from "@/lib/survey";
import { getStage } from "@/lib/stage";
import { useGovernmentSurveyStore } from "../../store/government-survey.store";

const questions: Question[] = expandServiceTemplates(
  questionsData as Question[]
);

const getMaturityStage = (score0to1: number) => {
  // Конвертируем score 0..1 в 0..10 для определения стадии
  const score0to10 = score0to1 * 10;
  const stage = getStage(score0to10);
  return `${stage.letter} - ${stage.label}`;
};

const ResultsGovermentServicePage = () => {
  const { responses } = useGovernmentSurveyStore();

  // Разделяем вопросы на основные и специальные разделы
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

  // Вычисляем баллы для основных разделов (только для круга)
  const mainScores = useMemo(() => {
    const s: { [key: string]: number } = {};

    // Группируем responses по критериям для основных разделов
    responses.forEach((response) => {
      if (mainQuestions.some((q) => q.criterion === response.criterion)) {
        if (!s[response.criterion]) {
          s[response.criterion] = 0;
        }
        s[response.criterion] += response.score01;
      }
    });

    return s;
  }, [responses, mainQuestions]);

  // Вычисляем баллы для специальных разделов
  const specialScores = useMemo(() => {
    const s: { [key: string]: number } = {};

    // Группируем responses по критериям для специальных разделов
    responses.forEach((response) => {
      if (specialQuestions.some((q) => q.criterion === response.criterion)) {
        if (!s[response.criterion]) {
          s[response.criterion] = 0;
        }
        s[response.criterion] += response.score01;
      }
    });

    return s;
  }, [responses, specialQuestions]);

  // Вычисляем средний балл ТОЛЬКО по основным критериям для круга
  const mainAverageScore = useMemo(() => {
    const criteriaScores = Object.values(mainScores);
    return criteriaScores.length > 0
      ? criteriaScores.reduce((sum, score) => sum + score, 0) /
          criteriaScores.length
      : 0;
  }, [mainScores]);

  // Вычисляем средний балл по основным критериям для таблицы
  const mainTableAverageScore = useMemo(() => {
    const criteriaScores = Object.values(mainScores);
    return criteriaScores.length > 0
      ? criteriaScores.reduce((sum, score) => sum + score, 0) /
          criteriaScores.length
      : 0;
  }, [mainScores]);

  // Вычисляем средний балл по специальным критериям для таблицы
  const specialTableAverageScore = useMemo(() => {
    const criteriaScores = Object.values(specialScores);
    return criteriaScores.length > 0
      ? criteriaScores.reduce((sum, score) => sum + score, 0) /
          criteriaScores.length
      : 0;
  }, [specialScores]);

  const mainCriteria = useMemo(() => {
    const uniqueCriteria = [...new Set(mainQuestions.map((q) => q.criterion))];
    return uniqueCriteria.reduce((acc, criterion, index) => {
      acc[criterion] = {
        color: criteriaColors[index % criteriaColors.length],
      };
      return acc;
    }, {} as { [key: string]: { color: string } });
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
      };
      return acc;
    }, {} as { [key: string]: { color: string } });
  }, [specialQuestions, mainCriteria]);

  const overallStage = getMaturityStage(mainAverageScore);

  return (
    <main className="h-full flex-1 flex justify-center items-center p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Ваш результат</h1>
        <div className="grid grid-cols-1 w-full lg:grid-cols-[28rem,auto] gap-6">
          {/* Левый блок - Круг и стадия (только основные уровни) */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Стадия: {overallStage}
            </p>
            <ScoreCircle scores={mainScores} criteria={mainCriteria} />
          </div>

          {/* Правый верхний блок - Таблица основных баллов */}
          <div className="lg:col-start-2 max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              Оценка цифровой зрелости гос. услуг
            </h2>
            <ScoreTable
              scores={mainScores}
              criteria={mainCriteria}
              averageScore={mainTableAverageScore}
              getMaturityStage={getMaturityStage}
            />
          </div>

          {/* Правый нижний блок - Таблица специальных разделов */}
          <div className="lg:col-start-2 max-w-xl bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Специальные разделы</h2>
            <ScoreTable
              scores={specialScores}
              criteria={specialCriteria}
              averageScore={specialTableAverageScore}
              getMaturityStage={getMaturityStage}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResultsGovermentServicePage;
