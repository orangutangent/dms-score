-- CreateTable
CREATE TABLE IF NOT EXISTS "public"."GovernmentSurveyServiceScore" (
    "id" TEXT NOT NULL,
    "resultId" TEXT NOT NULL,
    "serviceCode" TEXT NOT NULL,
    "overallScore" DOUBLE PRECISION NOT NULL,
    "criterionScores" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "GovernmentSurveyServiceScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX IF NOT EXISTS "GovernmentSurveyServiceScore_resultId_idx" ON "public"."GovernmentSurveyServiceScore"("resultId");

-- AddForeignKey
ALTER TABLE "public"."GovernmentSurveyServiceScore"
ADD CONSTRAINT "GovernmentSurveyServiceScore_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "public"."GovernmentSurveyResult"("id") ON DELETE CASCADE ON UPDATE CASCADE;

