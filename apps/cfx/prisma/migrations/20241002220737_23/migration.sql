/*
  Warnings:

  - A unique constraint covering the columns `[storage_id]` on the table `storage_child` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `storage_child` DROP FOREIGN KEY `storage_child_storage_id_fkey`;

-- CreateIndex
CREATE UNIQUE INDEX `storage_child_storage_id_key` ON `storage_child`(`storage_id`);

-- AddForeignKey
ALTER TABLE `storage_child` ADD CONSTRAINT `storage_child_storage_id_fkey` FOREIGN KEY (`storage_id`) REFERENCES `storages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
