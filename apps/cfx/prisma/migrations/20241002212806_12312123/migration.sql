/*
  Warnings:

  - You are about to drop the `item_attributes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `items` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `item_attributes` DROP FOREIGN KEY `item_attributes_item_id_fkey`;

-- DropForeignKey
ALTER TABLE `storage_items` DROP FOREIGN KEY `storage_items_item_id_fkey`;

-- DropTable
DROP TABLE `item_attributes`;

-- DropTable
DROP TABLE `items`;

-- CreateTable
CREATE TABLE `storage_child` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `storage_id` INTEGER NOT NULL,
    `item_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `directory_items` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `directory_items_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `directory_item_attributes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `value` JSON NOT NULL,
    `item_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `storage_child` ADD CONSTRAINT `storage_child_storage_id_fkey` FOREIGN KEY (`storage_id`) REFERENCES `storages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storage_child` ADD CONSTRAINT `storage_child_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `storage_items`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `storage_items` ADD CONSTRAINT `storage_items_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `directory_items`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `directory_item_attributes` ADD CONSTRAINT `directory_item_attributes_item_id_fkey` FOREIGN KEY (`item_id`) REFERENCES `directory_items`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
