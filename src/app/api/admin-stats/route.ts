import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

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

interface CountryStats {
  digitalMaturity: SurveyStats;
  government: SurveyStats;
}

export async function GET() {
  try {
    const digitalMaturityResults =
      await prisma.digitalMaturitySurveyResult.findMany();
    const governmentResults = await prisma.governmentSurveyResult.findMany();

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
          },
          government: { count: 0, totalScore: 0, criterion: {}, average: 0 },
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
          },
          government: { count: 0, totalScore: 0, criterion: {}, average: 0 },
        };
      }
      statsByCountry[country].government.count++;
      statsByCountry[country].government.totalScore += result.overallScore;

      for (const [criterion, score] of Object.entries(
        result.criterionScores as Record<string, number>
      )) {
        if (!statsByCountry[country].government.criterion[criterion]) {
          statsByCountry[country].government.criterion[criterion] = {
            total: 0,
            count: 0,
            average: 0,
          };
        }
        statsByCountry[country].government.criterion[criterion].total += score;
        statsByCountry[country].government.criterion[criterion].count++;
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
        for (const criterion in countryStats.government.criterion) {
          const crit = countryStats.government.criterion[criterion];
          crit.average = crit.total / crit.count;
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
