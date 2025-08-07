import React from 'react';

interface ScoreTableProps {
  scores: { [key: string]: number };
  criteria: { [key: string]: { color: string; weight: number } };
}

const ScoreTable: React.FC<ScoreTableProps> = ({ scores, criteria }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 text-sm text-gray-500 border-b pb-2">
        <div>Значение</div>
        <div className="text-center">Ваша оценка</div>
        <div className="text-center">Средняя оценка</div>
      </div>
      <div className="mt-4 space-y-4">
        {Object.entries(criteria).map(([criterion, { color, weight }]) => (
          <div key={criterion} className="grid grid-cols-3 gap-4 items-center">
            <div className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: color }}
              ></span>
              <span>{criterion}</span>
            </div>
            <div className="text-center font-semibold">
              {(scores[criterion] / weight).toFixed(1)}
            </div>
            <div className="text-center text-gray-500">4</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreTable;