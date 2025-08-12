import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma"; // Import the singleton Prisma client
import type {
  GovernmentSurveySubmitDataDTO,
  GovernmentSurveyResponseDTO,
} from "@/api/types";
import { SERVICES, type ServiceCode } from "@/config/services";
import { aggregateByCriteria, aggregateByServices } from "@/lib/scoring";

export async function POST(req: Request) {
  try {
    const { responses, location, department, finalThoughts } =
      (await req.json()) as GovernmentSurveySubmitDataDTO;

    // Используем новые утилиты для агрегации
    const { criterionScores, overallScore } = aggregateByCriteria(responses);
    const serviceScores = aggregateByServices(responses);

    // Подготавливаем данные для сохранения в БД
    const serviceRows = SERVICES.map((svc) => {
      const serviceData = serviceScores[svc.code] || {
        criterionScores: {},
        overallScore: 0,
      };

      return {
        serviceCode: svc.code as ServiceCode,
        overallScore: serviceData.overallScore,
        criterionScores: serviceData.criterionScores,
      };
    });

    const result = await prisma.governmentSurveyResult.create({
      data: {
        country: location.country || "",
        region: location.region || "",
        department: department || "",
        overallScore,
        finalThoughts: finalThoughts || "",
        criterionScores,
        rawAnswers: responses as unknown as object, // Save raw responses for detailed analysis
        sectionScores: {},
        serviceScores: {
          create: serviceRows.map((r) => ({
            serviceCode: r.serviceCode,
            overallScore: r.overallScore,
            // Prisma Json type expects `unknown` cast to avoid `any`
            criterionScores: r.criterionScores as unknown as object,
          })),
        },
      },
    });

    return NextResponse.json(
      { message: "Survey submitted successfully", resultId: result.id },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Explicitly type error as unknown
    console.error("Error submitting government survey:", error);
    let errorMessage = "Internal Server Error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { message: errorMessage, error: errorMessage },
      { status: 500 }
    );
  } finally {
    // No need to disconnect prisma client here, as it's a singleton
  }
}