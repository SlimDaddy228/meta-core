/*
  Warnings:

  - You are about to drop the column `createdAt` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `eyeColor` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `faceFeatures` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `hairColor` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `headBlend` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `character_customization` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `item_id` on the `storage_items` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `user_ids` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `user_ids` table. All the data in the column will be lost.
  - You are about to drop the `storage_child` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `eye_color` to the `character_customization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `face_features` to the `character_customization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hair_color` to the `character_customization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `head_blend` to the `character_customization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `character_customization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `directory_item_id` to the `storage_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `user_ids` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `storage_child` DROP FOREIGN KEY `storage_child_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `storage_child` DROP FOREIGN KEY `storage_child_storage_id_fkey`;

-- DropForeignKey
ALTER TABLE `storage_items` DROP FOREIGN KEY `storage_items_item_id_fkey`;

-- AlterTable
ALTER TABLE `character_customization` DROP COLUMN `createdAt`,
    DROP COLUMN `eyeColor`,
    DROP COLUMN `faceFeatures`,
    DROP COLUMN `hairColor`,
    DROP COLUMN `headBlend`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `eye_color` INTEGER NOT NULL,
    ADD COLUMN `face_features` JSON NOT NULL,
    ADD COLUMN `hair_color` JSON NOT NULL,
    ADD COLUMN `head_blend` JSON NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `characters` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `storage_items` DROP COLUMN `item_id`,
    ADD COLUMN `directory_item_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user_ids` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `update_at` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `storage_child`;

-- CreateTable
CREATE TABLE `storage_nodes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `storage_id` INTEGER NOT NULL,
    `item_id` INTEGER NOT NULL,

    UNIQUE INDEX `storage_nodes_storage_id_key`(`storage_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `storage_nodes` ADD CONSTRAINT `storage_nodes_storage_id_fkey` FOREIGN KEY (`storage_id`) REFERENCES `storages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storage_nodes` ADD CONSTRAINT `storage_nodes_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `storage_items`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storage_items` ADD CONSTRAINT `storage_items_directory_item_id_fkey` FOREIGN KEY (`directory_item_id`) REFERENCES `directory_items`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
