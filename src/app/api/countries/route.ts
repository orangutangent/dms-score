import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {
    const digitalMaturityCountries = await prisma.digitalMaturitySurveyResult.findMany({
      select: {
        country: true,
      },
      distinct: ["country"],
    });

    const governmentCountries = await prisma.governmentSurveyResult.findMany({
      select: {
        country: true,
      },
      distinct: ["country"],
    });

    const allCountries = Array.from(
      new Set([
        ...digitalMaturityCountries.map((c) => c.country),
        ...governmentCountries.map((c) => c.country),
      ])
    ).filter(Boolean); // Filter out null/empty strings

    return NextResponse.json(allCountries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
