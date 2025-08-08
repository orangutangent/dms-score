"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "@/components/ui/Select";
import ScoreCircle from "@/components/ScoreCircle";
import ScoreTable from "@/components/ScoreTable";
import { criteriaColors } from "@/config/criteriaColors";

// Types from API
interface CriterionStat {
  total: number;
  count: number;
  average: number;
}

interface SurveyStats {
  count: number;
  totalScore: number;
  criterion: Record<string, CriterionStat>;
  average: number;
}

interface CountryStats {
  digitalMaturity: SurveyStats;
  government: SurveyStats;
}

type AdminStats = Record<string, CountryStats>;

const AdminPage = () => {
  const [stats, setStats] = useState<AdminStats>({});
  const [selectedCountry, setSelectedCountry] = useState("");
  const [activeTab, setActiveTab] = useState<"government" | "digitalMaturity">(
    "government"
  );

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get<AdminStats>("/api/admin-stats");
        setStats(response.data);
        if (Object.keys(response.data).length > 0) {
          setSelectedCountry(Object.keys(response.data)[0]);
        }
      } catch (error) {
        console.error("Error fetching admin stats:", error);
      }
    };
    fetchStats();
  }, []);

  const countryData = stats[selectedCountry];

  const getMaturityStage = (score: number) => {
    if (score < 1.5) return "C";
    if (score < 3) return "B";
    if (score < 4.5) return "A";
    return "A+";
  };

  const renderContent = () => {
    if (!countryData) {
      return <p>No data available for this country.</p>;
    }

    const data = countryData[activeTab];
    if (!data || data.count === 0) {
      return <p>No survey data for this category.</p>;
    }

    const criteria = Object.keys(data.criterion).reduce((acc, key, index) => {
      acc[key] = {
        color: criteriaColors[index % criteriaColors.length],
        weight: 1,
      }; // Dummy weight
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
      <div className="grid grid-cols-1  w-full lg:grid-cols-[28rem,auto] gap-6 mt-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center">
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Стадия: {getMaturityStage(data.average)} - Adoption
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
          />
        </div>
      </div>
    );
  };

  return (
    <main className="h-full flex-1 flex flex-col items-center p-8 bg-gray-50">
      <div className="w-full max-w-5xl mx-auto">
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
