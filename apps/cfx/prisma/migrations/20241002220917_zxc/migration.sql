-- DropForeignKey
ALTER TABLE `storage_child` DROP FOREIGN KEY `storage_child_storage_id_fkey`;

-- AddForeignKey
ALTER TABLE `storage_child` ADD CONSTRAINT `storage_child_storage_id_fkey` FOREIGN KEY (`storage_id`) REFERENCES `storages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
