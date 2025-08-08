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
  const averageScore = totalWeight > 0 ? totalScore / totalWeight : 0;

  let accumulatedPercentage = 0;

  return (
    <div className="relative size-full">
      {" "}
      {/* Reverted to original size */}
      <svg className="w-full h-full" viewBox="0 0 250 250">
        {/* Background circle */}
        <circle
          cx="125"
          cy="125"
          r="100"
          fill="transparent"
          stroke="#e5e7eb" // A light gray color for the background track
          strokeWidth="25"
        />
        {/* Render segments only if totalScore is greater than 0 */}
        {totalScore > 0 &&
          Object.entries(criteria).map(([criterion, { color }]) => {
            const scoreForCriterion = scores[criterion] || 0;
            const percentage = (scoreForCriterion / totalScore) * 100;

            if (percentage === 0) {
              return null;
            }

            const strokeDashoffset = accumulatedPercentage;
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
                pathLength="100"
                strokeDasharray={`${percentage} 100`}
                strokeDashoffset={-strokeDashoffset}
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
