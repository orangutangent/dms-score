'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ScoreCircle from '../../components/ScoreCircle';
import ScoreTable from '../../components/ScoreTable';
import AdviceBlock from '../../components/AdviceBlock';
import questions from '../../questions.json';

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const answers = searchParams.get('answers');
    if (answers) {
      const answersArray = answers.split(',').map(Number);
      const newScores: { [key: string]: number } = {};
      let totalScore = 0;
      let totalWeight = 0;

      questions.forEach((question, index) => {
        if (!newScores[question.criterion]) {
          newScores[question.criterion] = 0;
        }
        newScores[question.criterion] += answersArray[index] * question.weight;
        totalScore += answersArray[index] * question.weight;
        totalWeight += question.weight;
      });

      setScores(newScores);
      setAverageScore(totalScore / totalWeight);
    }
  }, [searchParams]);

  const criteria = {
    Infrastructure: { color: '#4CAF50', weight: 2 },
    Engagement: { color: '#FFC107', weight: 2 },
    Data: { color: '#FF5722', weight: 2 },
    Operations: { color: '#2196F3', weight: 2 },
    People: { color: '#9C27B0', weight: 2 },
  };

  return (
    <main className="h-full flex-1 flex justify-center items-center ">
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

export default ResultsPage;