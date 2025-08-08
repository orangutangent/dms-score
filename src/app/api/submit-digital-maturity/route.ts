import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma'; // Import the singleton Prisma client
import { Question, Answer } from '../../../components/Question/model/types';
import questionsData from '../../../questions.json';

const questions: Question[] = questionsData as Question[];

// Helper to calculate score for a single question
const calculateQuestionScore = (question: Question, answer: Answer | null): number => {
  if (!answer || answer.value === undefined || answer.value === null) return 0;

  if (question.inputType === 'scale') {
    return Number(answer.value) * question.weight;
  }

  if (question.inputType === 'radio' && question.scoring) {
    return (question.scoring[answer.value] || 0) * question.weight;
  }

  return 0; // For 'location', 'sector', 'text', 'final-thoughts' types, score is 0
};

export async function POST(req: Request) {
  try {
    const { answers, location, sector, finalThoughts } = await req.json();

    // Calculate overallScore and criterionScores on the backend
    let overallScore = 0;
    const criterionScores: { [key: string]: number } = {};
    let totalWeightedScore = 0;
    let totalPossibleWeight = 0;

    // Filter out special questions (location, sector, final-thoughts) from scoring
    const scorableQuestions = questions.filter(q => 
      q.inputType !== 'location' && 
      q.inputType !== 'sector' && 
      q.inputType !== 'final-thoughts'
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
    });

    overallScore = totalPossibleWeight > 0 ? (totalWeightedScore / totalPossibleWeight) * 5 : 0; // Normalize to a 0-5 scale

    // Save to database
    const result = await prisma.digitalMaturitySurveyResult.create({
      data: {
        country: location.country || '',
        region: location.region || '',
        sector: sector || '',
        overallScore,
        finalThoughts: finalThoughts || '',
        criterionScores,
        rawAnswers: answers, // Save raw answers for detailed analysis
      },
    });

    return NextResponse.json({ message: 'Survey submitted successfully', resultId: result.id }, { status: 200 });
  } catch (error: unknown) { // Explicitly type error as unknown
    console.error('Error submitting digital maturity survey:', error);
    let errorMessage = 'Internal Server Error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json({ message: errorMessage, error: errorMessage }, { status: 500 });
  } finally {
    // No need to disconnect prisma client here, as it's a singleton
  }
}
