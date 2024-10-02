/*
  Warnings:

  - You are about to drop the column `amount` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `height` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `positionX` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `positionY` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `items` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[character_id]` on the table `storages` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `storage_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `storage_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positionX` to the `storage_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positionY` to the `storage_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `storage_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `character_id` to the `storages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `items` DROP COLUMN `amount`,
    DROP COLUMN `height`,
    DROP COLUMN `positionX`,
    DROP COLUMN `positionY`,
    DROP COLUMN `width`;

-- AlterTable
ALTER TABLE `storage_items` ADD COLUMN `amount` INTEGER NOT NULL,
    ADD COLUMN `height` INTEGER NOT NULL,
    ADD COLUMN `positionX` INTEGER NOT NULL,
    ADD COLUMN `positionY` INTEGER NOT NULL,
    ADD COLUMN `width` INTEGER NOT NULL,
    MODIFY `storage_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `storages` ADD COLUMN `character_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `storages_character_id_key` ON `storages`(`character_id`);

-- AddForeignKey
ALTER TABLE `storages` ADD CONSTRAINT `storages_character_id_fkey` FOREIGN KEY (`character_id`) REFERENCES `characters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
