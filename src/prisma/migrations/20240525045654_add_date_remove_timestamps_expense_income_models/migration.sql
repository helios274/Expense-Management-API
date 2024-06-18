/*
  Warnings:

  - You are about to drop the column `created_at` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `expenses` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `incomes` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `incomes` table. All the data in the column will be lost.
  - Added the required column `date` to the `expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `incomes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "expenses" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "incomes" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
