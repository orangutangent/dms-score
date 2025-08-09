import React from "react";

interface ScoreTableProps {
  scores: { [key: string]: number };
  criteria: { [key: string]: { color: string; weight: number } };
  averageScore: number;
  getMaturityStage: (score: number) => string;
  scoreColumnTitle?: string;
}

const ScoreTable: React.FC<ScoreTableProps> = ({
  scores,
  criteria,
  averageScore,
  getMaturityStage,
  scoreColumnTitle = "Ваша оценка",
}) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 text-sm text-gray-500 border-b pb-2">
        <div>Критерий оценки</div>
        <div className="text-center">{scoreColumnTitle}</div>
        <div className="text-center">Стадия</div>
      </div>
      <div className="mt-4 space-y-4">
        {Object.entries(criteria).map(([criterion, { color, weight }]) => {
          const score = scores[criterion] || 0;
          const stage = getMaturityStage(score);

          return (
            <div
              key={criterion}
              className="grid grid-cols-3 gap-4 items-center"
            >
              <div className="flex items-center">
                <span
                  className="w-3 h-3 rounded-full mr-3 flex-shrink-0" // Added flex-shrink-0
                  style={{ backgroundColor: color }}
                ></span>
                <span>{criterion}</span>
              </div>
              <div className="text-center font-semibold">
                {score.toFixed(1)}
              </div>
              <div className="text-center text-gray-500">{stage}</div>
            </div>
          );
        })}
        {/* Overall Average Row */}
        <div className="grid grid-cols-3 gap-4 items-center font-bold border-t pt-4 mt-4">
          <div>Среднее значение</div>
          <div className="text-center">{averageScore.toFixed(1)}</div>
          <div className="text-center">{getMaturityStage(averageScore)}</div>
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;
