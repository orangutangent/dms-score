/*
  Warnings:

  - You are about to drop the column `sectionScores` on the `GovernmentSurveyResult` table. All the data in the column will be lost.
  - You are about to drop the `GovernmentSurveyAnswer` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `criterionScores` to the `GovernmentSurveyResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overallScore` to the `GovernmentSurveyResult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rawAnswers` to the `GovernmentSurveyResult` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."GovernmentSurveyAnswer" DROP CONSTRAINT "GovernmentSurveyAnswer_surveyResultId_fkey";

-- AlterTable
ALTER TABLE "public"."GovernmentSurveyResult" DROP COLUMN "sectionScores",
ADD COLUMN     "criterionScores" JSONB NOT NULL,
ADD COLUMN     "overallScore" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "rawAnswers" JSONB NOT NULL;

-- DropTable
DROP TABLE "public"."GovernmentSurveyAnswer";
