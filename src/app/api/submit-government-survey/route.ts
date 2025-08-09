import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma"; // Import the singleton Prisma client
import { Question, Answer } from "../../../components/Question/model/types";
import questionsData from "../../../govermentssurvey.json";
import { expandServiceTemplates } from "@/lib/survey";
import { SERVICES, type ServiceCode } from "@/config/services";

const questions: Question[] = expandServiceTemplates(
  questionsData as Question[]
);

// Helper to calculate score for a single question (normalized to 0..5 scale)
const calculateQuestionScore = (
  question: Question,
  answer: Answer | null
): number => {
  if (!answer || answer.value === undefined || answer.value === null) return 0;

  if (question.inputType === "scale") {
    return Number(answer.value) * question.weight; // assume already 0..5
  }

  if (question.inputType === "radio") {
    if (typeof answer.score === "number") {
      return answer.score * 5 * question.weight; // фронт присылает 0..1
    }
    const totalOptions = question.options?.length || 0;
    if (totalOptions === 0) return 0;
    const numeric = Number(answer.value);
    const fraction = isNaN(numeric) ? 0 : numeric / totalOptions; // fallback: 1/N .. 1
    return fraction * 5 * question.weight; // scale to 0..5
  }

  return 0; // For 'location', 'sector', 'text', 'final-thoughts' types, score is 0
};

export async function POST(req: Request) {
  try {
    const { answers, location, finalThoughts } = await req.json();

    // Calculate overallScore and criterionScores on the backend
    let overallScore = 0;
    const criterionScores: { [key: string]: number } = {};
    let totalWeightedScore = 0;
    let totalPossibleWeight = 0;

    // Prepare per-service aggregation
    const perService: Record<
      ServiceCode,
      {
        criterionScores: Record<string, number>;
        totalWeightedScore: number;
        totalPossibleWeight: number;
      }
    > = {
      OPEN_BUSINESS: {
        criterionScores: {},
        totalWeightedScore: 0,
        totalPossibleWeight: 0,
      },
      REGISTER_SME: {
        criterionScores: {},
        totalWeightedScore: 0,
        totalPossibleWeight: 0,
      },
      APPLY_SUPPORT: {
        criterionScores: {},
        totalWeightedScore: 0,
        totalPossibleWeight: 0,
      },
    };

    // Filter out special questions (location, sector, final-thoughts) from scoring
    const scorableQuestions = questions.filter(
      (q) =>
        q.inputType !== "location" &&
        q.inputType !== "sector" &&
        q.inputType !== "final-thoughts"
    );

    scorableQuestions.forEach((q, index) => {
      const answer = answers[index]; // Answers are indexed based on scorable questions
      const score = calculateQuestionScore(q, answer);

      if (!criterionScores[q.criterion]) {
        criterionScores[q.criterion] = 0;
      }
      criterionScores[q.criterion] += score;
      totalWeightedScore += score;
      totalPossibleWeight += q.weight * 5; // Assuming max score per question is 5

      // Per-service split if present
      const svc = q.service as ServiceCode | undefined;
      if (svc) {
        const bucket = perService[svc];
        if (!bucket.criterionScores[q.criterion])
          bucket.criterionScores[q.criterion] = 0;
        bucket.criterionScores[q.criterion] += score;
        bucket.totalWeightedScore += score;
        bucket.totalPossibleWeight += q.weight * 5;
      }
    });

    overallScore =
      totalPossibleWeight > 0
        ? (totalWeightedScore / totalPossibleWeight) * 5
        : 0; // Normalize to a 0-5 scale

    // Save to database
    const rows = SERVICES.map(
      (
        svc
      ): {
        serviceCode: ServiceCode;
        overallScore: number;
        criterionScores: Record<string, number>;
      } => {
        const b = perService[svc.code as ServiceCode];
        const svcOverall =
          b.totalPossibleWeight > 0
            ? (b.totalWeightedScore / b.totalPossibleWeight) * 5
            : 0;
        return {
          serviceCode: svc.code as ServiceCode,
          overallScore: svcOverall,
          criterionScores: b.criterionScores,
        };
      }
    );

    const result = await prisma.governmentSurveyResult.create({
      data: {
        country: location.country || "",
        region: location.region || "",
        overallScore,
        finalThoughts: finalThoughts || "",
        criterionScores,
        rawAnswers: answers, // Save raw answers for detailed analysis
        sectionScores: {},
        serviceScores: {
          create: rows.map((r) => ({
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
