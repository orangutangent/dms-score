-- CreateTable
CREATE TABLE "public"."DigitalMaturitySurveyResult" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT NOT NULL DEFAULT '',
    "sector" TEXT NOT NULL DEFAULT '',
    "overallScore" DOUBLE PRECISION NOT NULL,
    "finalThoughts" TEXT NOT NULL DEFAULT '',
    "criterionScores" JSONB NOT NULL,
    "rawAnswers" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DigitalMaturitySurveyResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."GovernmentSurveyResult" (
    "id" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT NOT NULL DEFAULT '',
    "overallScore" DOUBLE PRECISION NOT NULL,
    "finalThoughts" TEXT NOT NULL DEFAULT '',
    "criterionScores" JSONB NOT NULL,
    "rawAnswers" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GovernmentSurveyResult_pkey" PRIMARY KEY ("id")
);
