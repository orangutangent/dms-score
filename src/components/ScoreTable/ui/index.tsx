import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { CRITERIA_MAP } from "@/config/criteria";
import { CriterionCode } from "@/config/criteria";

interface ScoreTableProps {
  scores: { [key: string]: number };
  criteria: { [key: string]: { color: string } };
  averageScore: number;
  getMaturityStage: (score: number) => string;
  scoreColumnTitle?: string;
  showColors?: boolean;
  customColors?: string[];
}

const ScoreTable: React.FC<ScoreTableProps> = ({
  scores,
  criteria,
  averageScore,
  getMaturityStage,
  scoreColumnTitle,
  showColors = true,
  customColors,
}) => {
  const t = useTranslations("ScoreComponents");
  const locale = useLocale();

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 text-sm text-gray-500 border-b pb-2">
        <div>{t("criterionColumn")}</div>
        <div className="text-center">{scoreColumnTitle || t("averageScore")}</div>
        <div className="text-center">{t("stageColumn")}</div>
      </div>
      <div className="mt-4 space-y-4">
        {Object.entries(criteria).map(([criterion, { color }], index) => {
          const score = scores[criterion] || 0;
          const stage = getMaturityStage(score).split(" - ")[0];
          const label = CRITERIA_MAP[criterion as CriterionCode] ? CRITERIA_MAP[criterion as CriterionCode][locale as keyof typeof CRITERIA_MAP[keyof typeof CRITERIA_MAP]] : criterion;

          let displayColor = color;
          if (customColors && customColors[index]) {
            displayColor = customColors[index];
          }

          return (
            <div
              key={criterion}
              className="grid grid-cols-3 gap-4 items-center"
            >
              <div className="flex items-center">
                {showColors && (
                  <span
                    className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                    style={{ backgroundColor: displayColor }}
                  ></span>
                )}
                <span>{label}</span>
              </div>
              <div className="text-center font-semibold">
                {score.toFixed(1)}
              </div>
              <div className="text-center text-gray-500">{stage}</div>
            </div>
          );
        })}
        <div className="grid grid-cols-3 gap-4 items-center font-bold border-t pt-4 mt-4">
          <div>{t("averageValue")}</div>
          <div className="text-center">{averageScore.toFixed(1)}</div>
          <div className="text-center">
            {getMaturityStage(averageScore).split(" - ")[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreTable;
export { default as ServiceStatsTable } from "./ServiceStatsTable";