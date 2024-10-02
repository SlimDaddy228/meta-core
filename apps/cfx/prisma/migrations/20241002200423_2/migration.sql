/*
  Warnings:

  - You are about to drop the `_itemstostorageitems` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `item_id` to the `storage_items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_itemstostorageitems` DROP FOREIGN KEY `_ItemsToStorageItems_A_fkey`;

-- DropForeignKey
ALTER TABLE `_itemstostorageitems` DROP FOREIGN KEY `_ItemsToStorageItems_B_fkey`;

-- DropForeignKey
ALTER TABLE `storage_items` DROP FOREIGN KEY `storage_items_storage_id_fkey`;

-- AlterTable
ALTER TABLE `storage_items` ADD COLUMN `item_id` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_itemstostorageitems`;

-- AddForeignKey
ALTER TABLE `storage_items` ADD CONSTRAINT `storage_items_storage_id_fkey` FOREIGN KEY (`storage_id`) REFERENCES `storages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storage_items` ADD CONSTRAINT `storage_items_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `items`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
