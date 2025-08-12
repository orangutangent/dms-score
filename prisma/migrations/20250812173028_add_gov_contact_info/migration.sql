/*
  Warnings:

  - You are about to drop the column `resultId` on the `ContactInfo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[digitalMaturityResultId]` on the table `ContactInfo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[governmentResultId]` on the table `ContactInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."ContactInfo" DROP CONSTRAINT "ContactInfo_resultId_fkey";

-- DropIndex
DROP INDEX "public"."ContactInfo_resultId_key";

-- AlterTable
ALTER TABLE "public"."ContactInfo" DROP COLUMN "resultId",
ADD COLUMN     "digitalMaturityResultId" TEXT,
ADD COLUMN     "governmentResultId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "ContactInfo_digitalMaturityResultId_key" ON "public"."ContactInfo"("digitalMaturityResultId");

-- CreateIndex
CREATE UNIQUE INDEX "ContactInfo_governmentResultId_key" ON "public"."ContactInfo"("governmentResultId");

-- AddForeignKey
ALTER TABLE "public"."ContactInfo" ADD CONSTRAINT "ContactInfo_digitalMaturityResultId_fkey" FOREIGN KEY ("digitalMaturityResultId") REFERENCES "public"."DigitalMaturitySurveyResult"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ContactInfo" ADD CONSTRAINT "ContactInfo_governmentResultId_fkey" FOREIGN KEY ("governmentResultId") REFERENCES "public"."GovernmentSurveyResult"("id") ON DELETE CASCADE ON UPDATE CASCADE;
