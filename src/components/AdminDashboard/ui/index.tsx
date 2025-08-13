"use client";

import React, { useState, useEffect } from "react";
import Select from "@/components/ui/Select";
import { useAdminStats } from "@/components/AdminStats/data-access/useAdminStats";
import { useCountries } from "@/components/AdminStats/data-access/useCountries";
import { useLocale, useTranslations } from "next-intl";
import DatePickerDisplay from "@/components/ui/DatePickerDisplay";
import GovernmentStats from "./GovernmentStats";
import DigitalMaturityStats from "./DigitalMaturityStats";

const AdminDashboard = () => {
  const t = useTranslations("AdminPage");
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
    !!selectedCountry
  );

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

  const countryData = stats?.[selectedCountry || ""];

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

    if (activeTab === "government") {
      return <GovernmentStats countryData={countryData} />;
    }
    return <DigitalMaturityStats countryData={countryData} />;
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

export default AdminDashboard;
