/*
  Warnings:

  - You are about to drop the column `created_at` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `eye_color` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `face_features` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `hair_color` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `head_blend` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `character_customization` table. All the data in the column will be lost.
  - Added the required column `eyeColor` to the `character_customization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `faceFeatures` to the `character_customization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hairColor` to the `character_customization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `headBlend` to the `character_customization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `character_customization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `character_customization` DROP COLUMN `created_at`,
    DROP COLUMN `eye_color`,
    DROP COLUMN `face_features`,
    DROP COLUMN `hair_color`,
    DROP COLUMN `head_blend`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `eyeColor` INTEGER NOT NULL,
    ADD COLUMN `faceFeatures` JSON NOT NULL,
    ADD COLUMN `hairColor` JSON NOT NULL,
    ADD COLUMN `headBlend` JSON NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
