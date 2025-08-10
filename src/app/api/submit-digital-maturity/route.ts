import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { Question, Answer } from "../../../components/Question/model/types";
import questionsData from "../../../questions.json";
import type { GovernmentSurveyResponseDTO } from "@/api/types";

const questions: Question[] = questionsData as Question[];

// Helper to calculate score for a single question
const calculateQuestionScore = (
  question: Question,
  answer: Answer | null
): number => {
  if (!answer || answer.value === undefined || answer.value === null) return 0;

  if (question.inputType === "scale") {
    // Конвертируем значение 1-5 в 0-1 (но оставляем как есть для лучшего понимания)
    return Number(answer.value);
  }

  if (question.inputType === "radio" && question.scoring) {
    // Используем scoring из вопроса, если он есть
    return question.scoring[answer.value] || 0;
  }

  return 0; // Для 'location', 'sector', 'text', 'final-thoughts' типов, score = 0
};

export async function POST(req: Request) {
  try {
    const { responses, location, sector, finalThoughts } = await req.json();

    // Calculate overallScore and criterionScores on the backend
    let overallScore = 0;
    const criterionScores: { [key: string]: number } = {};
    let totalScore = 0;
    let totalWeight = 0;

    // Filter out special questions (location, sector, final-thoughts) from scoring
    const scorableQuestions = questions.filter(
      (q) =>
        q.inputType !== "location" &&
        q.inputType !== "sector" &&
        q.inputType !== "final-thoughts"
    );

    console.log("Scorable questions:", scorableQuestions.length);
    console.log("Raw responses:", responses);

    scorableQuestions.forEach((q) => {
      // Find response for this question
      const response = responses.find(
        (r: GovernmentSurveyResponseDTO) =>
          r.questionId === q.id && r.service === q.service
      );

      if (response) {
        const score = response.score01 || 0;
        const weight = q.weight || 1; // Use default weight of 1 if not specified

        console.log(
          `Question ${q.id} (${q.criterion}): response=${response.answerValue}, score=${score}, weight=${weight}`
        );

        if (!criterionScores[q.criterion]) {
          criterionScores[q.criterion] = 0;
        }
        criterionScores[q.criterion] += score * weight;
        totalScore += score * weight;
        totalWeight += weight;
      }
    });

    // Вычисляем средний балл по всем критериям с учетом весов
    overallScore = totalWeight > 0 ? totalScore / totalWeight : 0;

    // Ensure overallScore is a valid number
    if (isNaN(overallScore) || !isFinite(overallScore)) {
      overallScore = 0;
    }

    console.log("Final scores:", {
      criterionScores,
      totalScore,
      totalWeight,
      overallScore,
    });

    // Save to database
    const result = await prisma.digitalMaturitySurveyResult.create({
      data: {
        country: location.country || "",
        region: location.region || "",
        sector: sector || "",
        overallScore,
        finalThoughts: finalThoughts || "",
        criterionScores,
        rawAnswers: responses, // Save responses for detailed analysis
      },
    });

    return NextResponse.json(
      { message: "Survey submitted successfully", resultId: result.id },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error submitting digital maturity survey:", error);
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
