-- DropForeignKey
ALTER TABLE `storages` DROP FOREIGN KEY `storages_character_id_fkey`;

-- AddForeignKey
ALTER TABLE `storages` ADD CONSTRAINT `storages_character_id_fkey` FOREIGN KEY (`character_id`) REFERENCES `characters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
