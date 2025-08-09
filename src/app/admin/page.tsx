"use client";

import React, { useState, useEffect } from "react";
import Select from "@/components/ui/Select";
import ScoreCircle from "@/components/ScoreCircle";
import ScoreTable from "@/components/ScoreTable";
import { getStage } from "@/lib/stage";
import { criteriaColors } from "@/config/criteriaColors";
import { useAdminStats } from "@/components/AdminStats/data-access/useAdminStats";
import { CountryStats } from "@/api/admin-stats-api";

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

    const criteria = Object.keys(data.criterion).reduce((acc, key, index) => {
      acc[key] = {
        color: criteriaColors[index % criteriaColors.length],
        weight: 1,
      }; // Using dummy weight as it's not needed for average display
      return acc;
    }, {} as Record<string, { color: string; weight: number }>);

    const scores = Object.entries(data.criterion).reduce(
      (acc, [key, value]) => {
        acc[key] = value.average;
        return acc;
      },
      {} as Record<string, number>
    );

    return (
      <div className="grid grid-cols-1 w-full lg:grid-cols-[28rem,auto] gap-6 mt-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Стадия: {getMaturityStage(data.average)}
          </p>
          <ScoreCircle scores={scores} criteria={criteria} />
        </div>
        <div className="max-w-xl lg:col-start-2 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">
            {activeTab === "government"
              ? "Оценка цифровой зрелости гос. услуг"
              : "Оценка цифровой зрелости бизнеса"}
          </h2>
          <ScoreTable
            scores={scores}
            criteria={criteria}
            averageScore={data.average}
            getMaturityStage={getMaturityStage}
            scoreColumnTitle="Средняя оценка"
          />
        </div>
      </div>
    );
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
