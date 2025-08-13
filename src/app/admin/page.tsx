"use client";

import React, { useState, useEffect } from "react";
import Select from "@/components/ui/Select";
import ScoreCircle from "@/components/ScoreCircle";
import ScoreTable, { ServiceStatsTable } from "@/components/ScoreTable";
import { getStage } from "@/lib/stage";
import { GOVERNMENT_COLORS, BUSINESS_COLORS } from "@/config/colors";
import { useAdminStats } from "@/components/AdminStats/data-access/useAdminStats";
import { useCountries } from "@/components/AdminStats/data-access/useCountries";
import { CountryStats, SurveyStats } from "@/api/admin-stats-api";
import { ServiceCode, SERVICES } from "@/config/services";
import { useLocale, useTranslations } from "next-intl";
import { LocalizedString } from "@/components/Question/model/types";
import DateInput from "@/components/ui/DateInput";
import DatePickerDisplay from "@/components/ui/DatePickerDisplay";

const AdminPage = () => {
  const t = useTranslations("AdminPage"); // Added a comment to force recompile
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"government" | "digitalMaturity">(
    "government"
  );

  const {
    data: countries,
    isLoading: isLoadingCountries,
    error: errorCountries,
  } = useCountries();

  const {
    data: stats,
    isLoading,
    error,
  } = useAdminStats(
    selectedCountry || "",
    activeTab,
    startDate,
    endDate,
    !!selectedCountry // Only enable query if a country is selected
  );

  const locale = useLocale();

  useEffect(() => {
    if (countries && countries.length > 0 && selectedCountry === null) {
      setSelectedCountry(countries[0]);
    }
  }, [countries, selectedCountry]);

  if (isLoadingCountries)
    return <div className="text-center p-8">{t("loading")}</div>;
  if (errorCountries)
    return (
      <div className="text-center p-8 text-red-500">
        {t("errorFetchingStats")}
      </div>
    );
  if (!countries || countries.length === 0)
    return (
      <div className="text-center p-8">
        {t("noStatsAvailable") + " (No countries found)"}
      </div>
    );

  if (isLoading) return <div className="text-center p-8">{t("loading")}</div>;
  if (error)
    return (
      <div className="text-center p-8 text-red-500">
        {t("errorFetchingStats")}
      </div>
    );

  const countryData: CountryStats | undefined = stats?.[selectedCountry || ""];

  const getMaturityStage = (score0to10: number) => {
    const s = getStage(score0to10);
    return `${s.letter} - ${s.label}`;
  };

  const renderContent = () => {
    if (isLoading) return <div className="text-center p-8">{t("loading")}</div>;
    if (error)
      return (
        <div className="text-center p-8 text-red-500">
          {t("errorFetchingStats")}
        </div>
      );
    if (!stats || Object.keys(stats).length === 0 || !countryData) {
      return <p className="text-center p-8">{t("noStatsAvailable")}</p>;
    }

    const data = countryData[activeTab];
    if (!data || data.count === 0) {
      return <p className="text-center p-8">{t("noSurveyData")}</p>;
    }

    if (activeTab === "government") {
      const govData = countryData.government;

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

      // Рассчитываем среднюю оценку только по уровням
      const levelAverage =
        Object.values(govData.levels).reduce(
          (sum, level) => sum + level.average,
          0
        ) / Object.keys(govData.levels).length;

      // Критерии для специальных разделов
      const specialSectionCriteria = Object.keys(
        govData.specialSections
      ).reduce((acc, key, index) => {
        acc[key] = {
          color: GOVERNMENT_COLORS[index % GOVERNMENT_COLORS.length],
          weight: 1,
        };
        return acc;
      }, {} as Record<string, { color: string; weight: number }>);

      const specialSectionScores = Object.entries(
        govData.specialSections
      ).reduce((acc, [key, value]) => {
        acc[key] = value.average;
        return acc;
      }, {} as Record<string, number>);

      // Рассчитываем среднюю оценку только по специальным разделам
      const specialSectionAverage =
        Object.keys(govData.specialSections).length > 0
          ? Object.values(govData.specialSections).reduce(
              (sum, section) => sum + section.average,
              0
            ) / Object.keys(govData.specialSections).length
          : 0;

      // Статистика по видам услуг
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
          {/* Первый ряд: круг и таблица уровней */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Стадия: {getMaturityStage(levelAverage)}
            </p>
            <div className="size-[25rem]">
              <ScoreCircle
                title={t("averageScore")}
                scores={levelScores}
                criteria={levelCriteria}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              {t("averageScoreByLevels")}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">{t("govMaturityTitle")}</h2>

            {/* Таблица уровней */}
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
    } else {
      const EXCLUDED_CRITERIA = SERVICES.map((s) => s.code);

      // Для digitalMaturity используем бизнес-цвета
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

      // Рассчитываем среднюю оценку только по критериям
      const criteriaAverage =
        filteredOverallCriterion.reduce(
          (sum, [, value]) => sum + value.average,
          0
        ) / filteredOverallCriterion.length;

      // Статистика по видам услуг для бизнес опроса
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
          {/* Первый ряд: круг и таблица критериев */}
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

          {/* Детализация по каждому сектору экономики */}
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
                        {t("sectorDetails", {
                          sector,
                          count: sectorData.count,
                        })}
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
          {/* Второй ряд: таблица услуг */}
          <div className="lg:col-span-2">
            <ServiceStatsTable
              serviceStats={businessServiceStats}
              showColors={false}
              customColors={SERVICES.map((s) => s.color)}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <main className="h-full flex-1 flex flex-col items-center p-8 ">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <button
              onClick={() => setActiveTab("government")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "government"
                  ? "bg-custom-blue text-white"
                  : "bg-white"
              }`}
            >
              {t("govSurveyButton")}
            </button>
            <button
              onClick={() => setActiveTab("digitalMaturity")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "digitalMaturity"
                  ? "bg-custom-blue text-white"
                  : "bg-white"
              }`}
            >
              {t("digitalMaturityButton")}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center mb-4">
          <Select
            value={selectedCountry || ""}
            onChange={(e) => setSelectedCountry(e.target.value)}
            options={countries.map((country) => ({
              label: country,
              value: country,
            }))}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
          <div className="bg-white p-3 rounded-lg shadow-sm lg:w-md">
            {t("govPassCount")} {countryData?.government.count || 0}
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm lg:w-md">
            {t("businessPassCount")} {countryData?.digitalMaturity.count || 0}
          </div>
          <DatePickerDisplay
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            widthClass="w-48"
          />
          <DatePickerDisplay
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            widthClass="w-48"
          />
        </div>

        {renderContent()}
      </div>
    </main>
  );
};

export default AdminPage;
