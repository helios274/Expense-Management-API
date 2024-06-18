/*
  Warnings:

  - You are about to drop the column `source` on the `incomes` table. All the data in the column will be lost.
  - Added the required column `source_id` to the `incomes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "incomes" DROP CONSTRAINT "incomes_source_fkey";

-- AlterTable
ALTER TABLE "incomes" DROP COLUMN "source",
ADD COLUMN     "source_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "incomes" ADD CONSTRAINT "incomes_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "sources"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
