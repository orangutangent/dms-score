import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { SERVICES, type ServiceCode } from "@/config/services";

// Define interfaces for our data structures
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

interface GovernmentSurveyStats extends SurveyStats {
  levels: Record<string, CriterionStat>; // Только критерии уровней
  specialSections: Record<string, CriterionStat>; // Специальные разделы
  services: Record<string, SurveyStats>; // Статистика по видам услуг
}

interface DigitalMaturitySurveyStats extends SurveyStats {
  services: Record<string, SurveyStats>; // Статистика по видам услуг
}

interface CountryStats {
  digitalMaturity: DigitalMaturitySurveyStats;
  government: GovernmentSurveyStats;
  governmentByService: Record<ServiceCode, SurveyStats>;
  digitalMaturityByService: Record<ServiceCode, SurveyStats>;
}

// Критерии уровней (основные критерии)
const LEVEL_CRITERIA = [
  "Инфраструктурный уровень",
  "Государственный уровень",
  "Уровень бизнеса",
  "Персональный уровень",
  "Уровень экосистемы",
];

// Специальные разделы
const SPECIAL_SECTION_CRITERIA = [
  "Специальный раздел 1",
  "Специальный раздел 2",
  "Специальный раздел 3",
];

export async function GET() {
  try {
    const digitalMaturityResults =
      await prisma.digitalMaturitySurveyResult.findMany();
    const governmentResults = await prisma.governmentSurveyResult.findMany();
    const governmentServiceRows: Array<{
      resultId: string;
      serviceCode: string;
      overallScore: number;
      criterionScores: Record<string, number>;
    }> = await prisma.$queryRawUnsafe<
      Array<{
        resultId: string;
        serviceCode: string;
        overallScore: number;
        criterionScores: Record<string, number>;
      }>
    >(
      'SELECT "resultId", "serviceCode", "overallScore", "criterionScores" FROM "public"."GovernmentSurveyServiceScore"'
    );
    const digitalMaturityServiceRows: Array<{
      resultId: string;
      serviceCode: string;
      overallScore: number;
      criterionScores: Record<string, number>;
    }> = await prisma.$queryRawUnsafe<
      Array<{
        resultId: string;
        serviceCode: string;
        overallScore: number;
        criterionScores: Record<string, number>;
      }>
    >(
      'SELECT "resultId", "serviceCode", "overallScore", "criterionScores" FROM "public"."DigitalMaturitySurveyServiceScore"'
    );

    const statsByCountry: Record<string, CountryStats> = {};

    // Process digital maturity results
    digitalMaturityResults.forEach((result) => {
      const country = result.country;
      if (!statsByCountry[country]) {
        statsByCountry[country] = {
          digitalMaturity: {
            count: 0,
            totalScore: 0,
            criterion: {},
            average: 0,
            services: {},
          },
          government: {
            count: 0,
            totalScore: 0,
            criterion: {},
            average: 0,
            levels: {},
            specialSections: {},
            services: {},
          },
          governmentByService: SERVICES.reduce((acc, s) => {
            acc[s.code] = {
              count: 0,
              totalScore: 0,
              criterion: {},
              average: 0,
            };
            return acc;
          }, {} as Record<ServiceCode, SurveyStats>),
          digitalMaturityByService: SERVICES.reduce((acc, s) => {
            acc[s.code] = {
              count: 0,
              totalScore: 0,
              criterion: {},
              average: 0,
            };
            return acc;
          }, {} as Record<ServiceCode, SurveyStats>),
        };
      }
      statsByCountry[country].digitalMaturity.count++;
      statsByCountry[country].digitalMaturity.totalScore += result.overallScore;

      for (const [criterion, score] of Object.entries(
        result.criterionScores as Record<string, number>
      )) {
        if (!statsByCountry[country].digitalMaturity.criterion[criterion]) {
          statsByCountry[country].digitalMaturity.criterion[criterion] = {
            total: 0,
            count: 0,
            average: 0,
          };
        }
        statsByCountry[country].digitalMaturity.criterion[criterion].total +=
          score;
        statsByCountry[country].digitalMaturity.criterion[criterion].count++;
      }
    });

    // Process government results
    governmentResults.forEach((result) => {
      const country = result.country;
      if (!statsByCountry[country]) {
        statsByCountry[country] = {
          digitalMaturity: {
            count: 0,
            totalScore: 0,
            criterion: {},
            average: 0,
            services: {},
          },
          government: {
            count: 0,
            totalScore: 0,
            criterion: {},
            average: 0,
            levels: {},
            specialSections: {},
            services: {},
          },
          governmentByService: SERVICES.reduce((acc, s) => {
            acc[s.code] = {
              count: 0,
              totalScore: 0,
              criterion: {},
              average: 0,
            };
            return acc;
          }, {} as Record<ServiceCode, SurveyStats>),
          digitalMaturityByService: SERVICES.reduce((acc, s) => {
            acc[s.code] = {
              count: 0,
              totalScore: 0,
              criterion: {},
              average: 0,
            };
            return acc;
          }, {} as Record<ServiceCode, SurveyStats>),
        };
      }
      statsByCountry[country].government.count++;
      statsByCountry[country].government.totalScore += result.overallScore;

      for (const [criterion, score] of Object.entries(
        result.criterionScores as Record<string, number>
      )) {
        // Общая статистика по всем критериям
        if (!statsByCountry[country].government.criterion[criterion]) {
          statsByCountry[country].government.criterion[criterion] = {
            total: 0,
            count: 0,
            average: 0,
          };
        }
        statsByCountry[country].government.criterion[criterion].total += score;
        statsByCountry[country].government.criterion[criterion].count++;

        // Разделяем на уровни и специальные разделы
        if (LEVEL_CRITERIA.includes(criterion)) {
          if (!statsByCountry[country].government.levels[criterion]) {
            statsByCountry[country].government.levels[criterion] = {
              total: 0,
              count: 0,
              average: 0,
            };
          }
          statsByCountry[country].government.levels[criterion].total += score;
          statsByCountry[country].government.levels[criterion].count++;
        } else if (SPECIAL_SECTION_CRITERIA.includes(criterion)) {
          if (!statsByCountry[country].government.specialSections[criterion]) {
            statsByCountry[country].government.specialSections[criterion] = {
              total: 0,
              count: 0,
              average: 0,
            };
          }
          statsByCountry[country].government.specialSections[criterion].total +=
            score;
          statsByCountry[country].government.specialSections[criterion].count++;
        }
      }
    });

    // Process per-service rows (join by resultId to country)
    const resultIdToCountry: Record<string, string> = {};
    governmentResults.forEach((r) => {
      resultIdToCountry[r.id] = r.country;
    });
    governmentServiceRows.forEach((row) => {
      const country = resultIdToCountry[row.resultId];
      if (!country) return;
      const svc = row.serviceCode as ServiceCode;
      const bucket = statsByCountry[country].governmentByService[svc];
      bucket.count++;
      bucket.totalScore += row.overallScore;
      for (const [criterion, score] of Object.entries(
        row.criterionScores || {}
      )) {
        if (!bucket.criterion[criterion]) {
          bucket.criterion[criterion] = { total: 0, count: 0, average: 0 };
        }
        bucket.criterion[criterion].total += score;
        bucket.criterion[criterion].count++;
      }
    });

    // Process per-service rows for digital maturity (join by resultId to country)
    const digitalMaturityResultIdToCountry: Record<string, string> = {};
    digitalMaturityResults.forEach((r) => {
      digitalMaturityResultIdToCountry[r.id] = r.country;
    });
    digitalMaturityServiceRows.forEach((row) => {
      const country = digitalMaturityResultIdToCountry[row.resultId];
      if (!country) return;
      const svc = row.serviceCode as ServiceCode;
      const bucket = statsByCountry[country].digitalMaturityByService[svc];
      bucket.count++;
      bucket.totalScore += row.overallScore;
      for (const [criterion, score] of Object.entries(
        row.criterionScores || {}
      )) {
        if (!bucket.criterion[criterion]) {
          bucket.criterion[criterion] = { total: 0, count: 0, average: 0 };
        }
        bucket.criterion[criterion].total += score;
        bucket.criterion[criterion].count++;
      }
    });

    // Calculate averages
    for (const country in statsByCountry) {
      const countryStats = statsByCountry[country];
      if (countryStats.digitalMaturity.count > 0) {
        countryStats.digitalMaturity.average =
          countryStats.digitalMaturity.totalScore /
          countryStats.digitalMaturity.count;
        for (const criterion in countryStats.digitalMaturity.criterion) {
          const crit = countryStats.digitalMaturity.criterion[criterion];
          crit.average = crit.total / crit.count;
        }
      }
      if (countryStats.government.count > 0) {
        countryStats.government.average =
          countryStats.government.totalScore / countryStats.government.count;

        // Общие критерии
        for (const criterion in countryStats.government.criterion) {
          const crit = countryStats.government.criterion[criterion];
          crit.average = crit.total / crit.count;
        }

        // Уровни
        for (const criterion in countryStats.government.levels) {
          const crit = countryStats.government.levels[criterion];
          crit.average = crit.total / crit.count;
        }

        // Специальные разделы
        for (const criterion in countryStats.government.specialSections) {
          const crit = countryStats.government.specialSections[criterion];
          crit.average = crit.total / crit.count;
        }
      }

      // service averages
      for (const svc of SERVICES) {
        const s = countryStats.governmentByService[svc.code];
        if (s.count > 0) {
          s.average = s.totalScore / s.count;
          for (const criterion in s.criterion) {
            const crit = s.criterion[criterion];
            crit.average = crit.total / crit.count;
          }
        }
      }

      // digital maturity service averages
      for (const svc of SERVICES) {
        const s = countryStats.digitalMaturityByService[svc.code];
        if (s.count > 0) {
          s.average = s.totalScore / s.count;
          for (const criterion in s.criterion) {
            const crit = s.criterion[criterion];
            crit.average = crit.total / crit.count;
          }
        }
      }
    }

    return NextResponse.json(statsByCountry);
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
