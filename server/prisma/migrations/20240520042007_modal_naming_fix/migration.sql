/*
  Warnings:

  - You are about to drop the column `Delivery_time` on the `frete` table. All the data in the column will be lost.
  - You are about to drop the column `Width_max` on the `frete` table. All the data in the column will be lost.
  - You are about to drop the column `Width_min` on the `frete` table. All the data in the column will be lost.
  - You are about to alter the column `heigh_min` on the `frete` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `heigh_max` on the `frete` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `delivery_time` to the `frete` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width_max` to the `frete` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width_min` to the `frete` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "frete" DROP COLUMN "Delivery_time",
DROP COLUMN "Width_max",
DROP COLUMN "Width_min",
ADD COLUMN     "delivery_time" INTEGER NOT NULL,
ADD COLUMN     "width_max" INTEGER NOT NULL,
ADD COLUMN     "width_min" INTEGER NOT NULL,
ALTER COLUMN "heigh_min" SET DATA TYPE INTEGER,
ALTER COLUMN "heigh_max" SET DATA TYPE INTEGER;
