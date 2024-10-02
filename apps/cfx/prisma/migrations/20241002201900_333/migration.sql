/*
  Warnings:

  - Made the column `storage_id` on table `storage_items` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `storage_items` DROP FOREIGN KEY `storage_items_storage_id_fkey`;

-- DropForeignKey
ALTER TABLE `storages` DROP FOREIGN KEY `storages_character_id_fkey`;

-- AlterTable
ALTER TABLE `storage_items` MODIFY `storage_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `storages` MODIFY `character_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `storages` ADD CONSTRAINT `storages_character_id_fkey` FOREIGN KEY (`character_id`) REFERENCES `characters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storage_items` ADD CONSTRAINT `storage_items_storage_id_fkey` FOREIGN KEY (`storage_id`) REFERENCES `storages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
