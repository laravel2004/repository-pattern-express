/*
  Warnings:

  - You are about to drop the column `tilte` on the `activity` table. All the data in the column will be lost.
  - Added the required column `title` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activity` DROP COLUMN `tilte`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
