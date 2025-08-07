import React from "react";

interface ScoreCircleProps {
  scores: { [key: string]: number };
  criteria: { [key: string]: { color: string; weight: number } };
}

const ScoreCircle: React.FC<ScoreCircleProps> = ({ scores, criteria }) => {
  const totalScore = Object.values(scores).reduce(
    (acc, score) => acc + score,
    0
  );
  const totalWeight = Object.values(criteria).reduce(
    (acc, { weight }) => acc + weight,
    0
  );
  const averageScore = totalScore / totalWeight;

  let accumulatedPercentage = 0;

  return (
    <div className="relative size-[27rem]">
      <svg className="w-full h-full" viewBox="0 0 250 250">
        {Object.entries(criteria).map(([criterion, { color, weight }]) => {
          const percentage = (scores[criterion] / (weight * 5)) * 100;
          const strokeDasharray = `${percentage * 2.2} 220`;
          const strokeDashoffset = -accumulatedPercentage * 2.2;
          accumulatedPercentage += percentage;

          return (
            <circle
              key={criterion}
              cx="125"
              cy="125"
              r="100"
              fill="transparent"
              stroke={color}
              strokeWidth="25"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 125 125)"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-gray-500">Ваша оценка</span>
        <span className="text-[2.5rem] font-bold text-foreground">
          {averageScore.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ScoreCircle;
