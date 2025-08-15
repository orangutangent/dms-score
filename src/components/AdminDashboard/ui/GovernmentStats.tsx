"use client";

import React from "react";
import ScoreCircle from "@/components/ScoreCircle";
import ScoreTable, { ServiceStatsTable } from "@/components/ScoreTable";
import { getStage } from "@/lib/stage";
import { GOVERNMENT_COLORS } from "@/config/colors";
import { CountryStats } from "@/api/admin-stats-api";
import { useLocale, useTranslations } from "next-intl";
import { LocalizedString } from "@/components/Question/model/types";
import { SERVICES } from "@/config/services";

interface Props {
  countryData: CountryStats;
}

const GovernmentStats: React.FC<Props> = ({ countryData }) => {
  const t = useTranslations("AdminPage");
  const locale = useLocale();

  const getMaturityStage = (score0to10: number) => {
    const s = getStage(score0to10, locale);
    return `${s.letter} - ${s.label}`;
  };

  const govData = countryData.government;

  if (!govData || govData.count === 0) {
    return <p className="text-center p-8">{t("noSurveyData")}</p>;
  }

  const levelCriteria = Object.keys(govData.levels).reduce(
    (acc, key, index) => {
      acc[key] = {
        color: GOVERNMENT_COLORS[index % GOVERNMENT_COLORS.length],
        weight: 1,
      };
      return acc;
    },
    {} as Record<string, { color: string; weight: number }>
  );

  const levelScores = Object.entries(govData.levels).reduce(
    (acc, [key, value]) => {
      acc[key] = value.average;
      return acc;
    },
    {} as Record<string, number>
  );

  const levelAverage =
    Object.values(govData.levels).reduce(
      (sum, level) => sum + level.average,
      0
    ) / Object.keys(govData.levels).length;

  const specialSectionCriteria = Object.keys(govData.specialSections).reduce(
    (acc, key, index) => {
      acc[key] = {
        color: GOVERNMENT_COLORS[index % GOVERNMENT_COLORS.length],
        weight: 1,
      };
      return acc;
    },
    {} as Record<string, { color: string; weight: number }>
  );

  const specialSectionScores = Object.entries(govData.specialSections).reduce(
    (acc, [key, value]) => {
      acc[key] = value.average;
      return acc;
    },
    {} as Record<string, number>
  );

  const specialSectionAverage =
    Object.keys(govData.specialSections).length > 0
      ? Object.values(govData.specialSections).reduce(
          (sum, section) => sum + section.average,
          0
        ) / Object.keys(govData.specialSections).length
      : 0;

  const serviceStats = Object.entries(countryData.governmentByService)
    .filter(([, serviceData]) => serviceData.count > 0)
    .map(([serviceCode, serviceData]) => ({
      code: serviceCode,
      label:
        SERVICES.find((s) => s.code === serviceCode)?.label[
          locale as keyof LocalizedString
        ] || serviceCode,
      average: serviceData.average,
      count: serviceData.count,
    }));

  return (
    <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-6 mt-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
        <p className="text-xl font-semibold text-gray-700 mb-4">
          Стадия: {getMaturityStage(levelAverage)}
        </p>
        <ScoreCircle
            title={t("averageScore")}
            scores={levelScores}
            criteria={levelCriteria}
          />
        <p className="text-sm text-gray-500 mt-2 text-center">
          {t("averageScoreByLevels")}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">{t("govMaturityTitle")}</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            {t("maturityLevels")}
          </h3>
          <ScoreTable
            scores={levelScores}
            criteria={levelCriteria}
            averageScore={levelAverage}
            getMaturityStage={getMaturityStage}
            scoreColumnTitle={t("averageScore")}
            showColors={true}
            customColors={GOVERNMENT_COLORS}
          />
        </div>
      </div>

      <div className="lg:col-span-2">
        <ServiceStatsTable
          serviceStats={serviceStats}
          showColors={false}
          customColors={GOVERNMENT_COLORS}
        />
      </div>

      {Object.keys(govData.specialSections).length > 0 && (
        <div className="bg-white lg:col-span-2 rounded-2xl shadow-lg p-8">
          <h3 className="text-lg font-semibold mb-4">
            {t("specialSectionsTitle")}
          </h3>
          <ScoreTable
            scores={specialSectionScores}
            criteria={specialSectionCriteria}
            averageScore={specialSectionAverage}
            getMaturityStage={getMaturityStage}
            scoreColumnTitle={t("averageScore")}
            showColors={false}
          />
        </div>
      )}
    </div>
  );
};

export default GovernmentStats;
