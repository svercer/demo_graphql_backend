/*
  Warnings:

  - Added the required column `amount` to the `Price` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Price" ADD COLUMN     "amount" TEXT NOT NULL;
