"use client";

import React from "react";
import ScoreCircle from "@/components/ScoreCircle";
import ScoreTable, { ServiceStatsTable } from "@/components/ScoreTable";
import { getStage } from "@/lib/stage";
import { BUSINESS_COLORS } from "@/config/colors";
import { CountryStats, SurveyStats } from "@/api/admin-stats-api";
import { ServiceCode, SERVICES } from "@/config/services";
import { useLocale, useTranslations } from "next-intl";

interface Props {
  countryData: CountryStats;
}

const DigitalMaturityStats: React.FC<Props> = ({ countryData }) => {
  const t = useTranslations("AdminPage");
  const locale = useLocale();

  const getMaturityStage = (score0to10: number) => {
    const s = getStage(score0to10);
    return `${s.letter} - ${s.label}`;
  };

  const data = countryData.digitalMaturity;
  if (!data || data.count === 0) {
    return <p className="text-center p-8">{t("noSurveyData")}</p>;
  }

  const EXCLUDED_CRITERIA = SERVICES.map((s) => s.code);

  const filteredOverallCriterion = Object.entries(data.criterion).filter(
    ([key]) => !EXCLUDED_CRITERIA.includes(key as ServiceCode)
  );

  const criteria = filteredOverallCriterion.reduce((acc, [key], index) => {
    acc[key] = {
      color: BUSINESS_COLORS[index % BUSINESS_COLORS.length],
      weight: 1,
    };
    return acc;
  }, {} as Record<string, { color: string; weight: number }>);

  const scores = filteredOverallCriterion.reduce((acc, [key, value]) => {
    acc[key] = value.average;
    return acc;
  }, {} as Record<string, number>);

  const criteriaAverage =
    filteredOverallCriterion.reduce(
      (sum, [, value]) => sum + value.average,
      0
    ) / filteredOverallCriterion.length;

  const businessServiceStats = Object.entries(
    countryData.digitalMaturityByService
  )
    .filter(([, serviceData]) => (serviceData as SurveyStats).count > 0)
    .map(([serviceCode, serviceData]) => {
      const service = SERVICES.find((s) => s.code === serviceCode);
      const label = service?.label
        ? typeof service.label === "object"
          ? service.label[locale as keyof typeof service.label]
          : service.label
        : serviceCode;
      return {
        code: serviceCode,
        label: label,
        average: (serviceData as SurveyStats).average,
        count: (serviceData as SurveyStats).count,
      };
    });

  return (
    <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-6 mt-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
        <p className="text-xl font-semibold text-gray-700 mb-4">
          Стадия: {getMaturityStage(criteriaAverage)}
        </p>
        <ScoreCircle
          scores={scores}
          criteria={criteria}
          title={t("averageScore")}
        />
        <p className="text-sm text-gray-500 mt-2 text-center">
          {t("averageScoreByCriteriaAllSectors")}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">
          {t("businessMaturityTitle")}
        </h2>
        <ScoreTable
          scores={scores}
          criteria={criteria}
          averageScore={criteriaAverage}
          getMaturityStage={getMaturityStage}
          scoreColumnTitle={t("averageScore")}
          showColors={true}
          customColors={BUSINESS_COLORS}
        />
      </div>

      {countryData.digitalMaturityBySector &&
        Object.entries(countryData.digitalMaturityBySector)
          .filter(([, sectorData]) => sectorData.count > 0)
          .map(([sector, sectorData]) => {
            const filteredSectorCriterion = Object.entries(
              sectorData.criterion
            ).filter(
              ([key]) => !EXCLUDED_CRITERIA.includes(key as ServiceCode)
            );

            if (filteredSectorCriterion.length === 0) return null;

            const sectorCriteria = filteredSectorCriterion.reduce(
              (acc, [key], index) => {
                acc[key] = {
                  color: BUSINESS_COLORS[index % BUSINESS_COLORS.length],
                  weight: 1,
                };
                return acc;
              },
              {} as Record<string, { color: string; weight: number }>
            );

            const sectorScores = filteredSectorCriterion.reduce(
              (acc, [key, value]) => {
                acc[key] = value.average;
                return acc;
              },
              {} as Record<string, number>
            );

            const sectorAverage =
              filteredSectorCriterion.reduce(
                (sum, [, value]) => sum + value.average,
                0
              ) / filteredSectorCriterion.length;

            return (
              <React.Fragment key={sector}>
                <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
                  <p className="text-xl font-semibold text-gray-700 mb-4">
                    Стадия: {getMaturityStage(sectorAverage)}
                  </p>
                  <ScoreCircle
                    scores={sectorScores}
                    criteria={sectorCriteria}
                    title={t("averageScore")}
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    {t("averageScoreByCriteriaForSector")}
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold mb-6">
                    {t("sectorDetails", { sector, count: sectorData.count })}
                  </h2>
                  <ScoreTable
                    scores={sectorScores}
                    criteria={sectorCriteria}
                    averageScore={sectorAverage}
                    getMaturityStage={getMaturityStage}
                    scoreColumnTitle={t("averageScore")}
                    showColors={true}
                    customColors={BUSINESS_COLORS}
                  />
                </div>
              </React.Fragment>
            );
          })}
      <div className="lg:col-span-2">
        <ServiceStatsTable
          serviceStats={businessServiceStats}
          showColors={false}
          customColors={SERVICES.map((s) => s.color)}
        />
      </div>
    </div>
  );
};

export default DigitalMaturityStats;
