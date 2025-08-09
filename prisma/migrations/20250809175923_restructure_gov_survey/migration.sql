/*
  Warnings:

  - You are about to drop the column `criterionScores` on the `GovernmentSurveyResult` table. All the data in the column will be lost.
  - You are about to drop the column `overallScore` on the `GovernmentSurveyResult` table. All the data in the column will be lost.
  - You are about to drop the column `rawAnswers` on the `GovernmentSurveyResult` table. All the data in the column will be lost.
  - Added the required column `sectionScores` to the `GovernmentSurveyResult` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."GovernmentSurveyResult" DROP COLUMN "criterionScores",
DROP COLUMN "overallScore",
DROP COLUMN "rawAnswers",
ADD COLUMN     "sectionScores" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "public"."GovernmentSurveyAnswer" (
    "id" TEXT NOT NULL,
    "surveyResultId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "serviceType" TEXT,
    "selectedOptionIndex" INTEGER NOT NULL,
    "calculatedScore" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "GovernmentSurveyAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "GovernmentSurveyAnswer_surveyResultId_idx" ON "public"."GovernmentSurveyAnswer"("surveyResultId");

-- AddForeignKey
ALTER TABLE "public"."GovernmentSurveyAnswer" ADD CONSTRAINT "GovernmentSurveyAnswer_surveyResultId_fkey" FOREIGN KEY ("surveyResultId") REFERENCES "public"."GovernmentSurveyResult"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
