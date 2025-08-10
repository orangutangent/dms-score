"use client";

import React, { useState, useEffect } from "react";
import Select from "@/components/ui/Select";
import ScoreCircle from "@/components/ScoreCircle";
import ScoreTable, { ServiceStatsTable } from "@/components/ScoreTable";
import { getStage } from "@/lib/stage";
import { GOVERNMENT_COLORS, BUSINESS_COLORS } from "@/config/colors";
import { useAdminStats } from "@/components/AdminStats/data-access/useAdminStats";
import { CountryStats, SurveyStats } from "@/api/admin-stats-api";
import { SERVICES } from "@/config/services";

const AdminPage = () => {
  const { data: stats, isLoading, error } = useAdminStats();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [activeTab, setActiveTab] = useState<"government" | "digitalMaturity">(
    "government"
  );

  useEffect(() => {
    if (stats && Object.keys(stats).length > 0 && !selectedCountry) {
      setSelectedCountry(Object.keys(stats)[0]);
    }
  }, [stats, selectedCountry]);

  if (isLoading) return <div className="text-center p-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center p-8 text-red-500">Error fetching stats</div>
    );
  if (!stats || Object.keys(stats).length === 0)
    return <div className="text-center p-8">No stats available</div>;

  const countryData: CountryStats | undefined = stats[selectedCountry];

  const getMaturityStage = (score0to5: number) => {
    const s = getStage(score0to5 * 2);
    return `${s.letter} - ${s.label}`;
  };

  const renderContent = () => {
    if (!countryData) {
      return <p className="text-center p-8">Please select a country.</p>;
    }

    const data = countryData[activeTab];
    if (!data || data.count === 0) {
      return (
        <p className="text-center p-8">No survey data for this category.</p>
      );
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
            SERVICES.find((s) => s.code === serviceCode)?.label || serviceCode,
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
                title="Средняя оценка"
                scores={levelScores}
                criteria={levelCriteria}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Средняя оценка по уровням
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Оценка цифровой зрелости гос. услуг
            </h2>

            {/* Таблица уровней */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">
                Уровни цифровой зрелости
              </h3>
              <ScoreTable
                scores={levelScores}
                criteria={levelCriteria}
                averageScore={levelAverage}
                getMaturityStage={getMaturityStage}
                scoreColumnTitle="Средняя оценка"
                showColors={true}
                customColors={GOVERNMENT_COLORS}
              />
            </div>
          </div>

          {/* Второй ряд: таблица услуг и специальные разделы */}
          <div>
            <ServiceStatsTable
              serviceStats={serviceStats}
              showColors={false}
              customColors={GOVERNMENT_COLORS}
            />
          </div>

          {Object.keys(govData.specialSections).length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-lg font-semibold mb-4">
                Специальные разделы
              </h3>
              <ScoreTable
                scores={specialSectionScores}
                criteria={specialSectionCriteria}
                averageScore={specialSectionAverage}
                getMaturityStage={getMaturityStage}
                scoreColumnTitle="Средняя оценка"
                showColors={false}
              />
            </div>
          )}
        </div>
      );
    } else {
      // Для digitalMaturity используем бизнес-цвета
      const criteria = Object.keys(data.criterion).reduce((acc, key, index) => {
        acc[key] = {
          color: BUSINESS_COLORS[index % BUSINESS_COLORS.length],
          weight: 1,
        };
        return acc;
      }, {} as Record<string, { color: string; weight: number }>);

      const scores = Object.entries(data.criterion).reduce(
        (acc, [key, value]) => {
          acc[key] = value.average;
          return acc;
        },
        {} as Record<string, number>
      );

      // Рассчитываем среднюю оценку только по критериям
      const criteriaAverage =
        Object.values(data.criterion).reduce(
          (sum, criterion) => sum + criterion.average,
          0
        ) / Object.keys(data.criterion).length;

      // Статистика по видам услуг для бизнес опроса
      const businessServiceStats = Object.entries(
        countryData.digitalMaturityByService
      )
        .filter(([, serviceData]) => (serviceData as SurveyStats).count > 0)
        .map(([serviceCode, serviceData]) => ({
          code: serviceCode,
          label:
            SERVICES.find((s) => s.code === serviceCode)?.label || serviceCode,
          average: (serviceData as SurveyStats).average,
          count: (serviceData as SurveyStats).count,
        }));

      return (
        <div className="grid grid-cols-1 w-full lg:grid-cols-2 gap-6 mt-6">
          {/* Первый ряд: круг и таблица критериев */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
            <p className="text-xl font-semibold text-gray-700 mb-4">
              Стадия: {getMaturityStage(criteriaAverage)}
            </p>
            <ScoreCircle scores={scores} criteria={criteria} />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Средняя оценка по критериям (все сектора)
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Оценка цифровой зрелости бизнеса (все сектора)
            </h2>
            <ScoreTable
              scores={scores}
              criteria={criteria}
              averageScore={criteriaAverage}
              getMaturityStage={getMaturityStage}
              scoreColumnTitle="Средняя оценка"
              showColors={true}
              customColors={BUSINESS_COLORS}
            />
          </div>

          {/* Детализация по каждому сектору экономики */}
          {countryData.digitalMaturityBySector &&
            Object.entries(countryData.digitalMaturityBySector)
              .filter(([, sectorData]) => sectorData.count > 0)
              .map(([sector, sectorData]) => {
                const sectorCriteria = Object.keys(sectorData.criterion).reduce(
                  (acc, key, index) => {
                    acc[key] = {
                      color: BUSINESS_COLORS[index % BUSINESS_COLORS.length],
                      weight: 1,
                    };
                    return acc;
                  },
                  {} as Record<string, { color: string; weight: number }>
                );

                const sectorScores = Object.entries(
                  sectorData.criterion
                ).reduce((acc, [key, value]) => {
                  acc[key] = value.average;
                  return acc;
                }, {} as Record<string, number>);

                return (
                  <React.Fragment key={sector}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
                      <p className="text-xl font-semibold text-gray-700 mb-4">
                        Стадия: {getMaturityStage(sectorData.average)}
                      </p>
                      <ScoreCircle
                        scores={sectorScores}
                        criteria={sectorCriteria}
                      />
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        Средняя оценка по критериям для сектора
                      </p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h2 className="text-2xl font-bold mb-6">
                        Оценка цифровой зрелости бизнеса в секторе {sector} (
                        {sectorData.count} прохождений)
                      </h2>
                      <ScoreTable
                        scores={sectorScores}
                        criteria={sectorCriteria}
                        averageScore={sectorData.average}
                        getMaturityStage={getMaturityStage}
                        scoreColumnTitle="Средняя оценка"
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
              showColors={true}
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
              Оценка зрелости государственных услуг
            </button>
            <button
              onClick={() => setActiveTab("digitalMaturity")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "digitalMaturity"
                  ? "bg-custom-blue text-white"
                  : "bg-white"
              }`}
            >
              Оценка цифровой зрелости бизнеса
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <Select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            options={Object.keys(stats).map((country) => ({
              label: country,
              value: country,
            }))}
          />
          <div className="bg-white p-3 rounded-lg shadow-sm lg:w-md">
            Кол-во прохождений гос. служащими:{" "}
            {countryData?.government.count || 0}
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm lg:w-md">
            Кол-во прохождений бизнесом:{" "}
            {countryData?.digitalMaturity.count || 0}
          </div>
        </div>

        {renderContent()}
      </div>
    </main>
  );
};

export default AdminPage;
