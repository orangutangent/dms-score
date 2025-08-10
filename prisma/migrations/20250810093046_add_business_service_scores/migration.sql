-- CreateTable
CREATE TABLE "public"."DigitalMaturitySurveyServiceScore" (
    "id" TEXT NOT NULL,
    "resultId" TEXT NOT NULL,
    "serviceCode" TEXT NOT NULL,
    "overallScore" DOUBLE PRECISION NOT NULL,
    "criterionScores" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DigitalMaturitySurveyServiceScore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DigitalMaturitySurveyServiceScore_resultId_idx" ON "public"."DigitalMaturitySurveyServiceScore"("resultId");

-- AddForeignKey
ALTER TABLE "public"."DigitalMaturitySurveyServiceScore" ADD CONSTRAINT "DigitalMaturitySurveyServiceScore_resultId_fkey" FOREIGN KEY ("resultId") REFERENCES "public"."DigitalMaturitySurveyResult"("id") ON DELETE CASCADE ON UPDATE CASCADE;
