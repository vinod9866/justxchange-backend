/*
  Warnings:

  - The primary key for the `category_favourites` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_id` on the `category_favourites` table. All the data in the column will be lost.
  - The primary key for the `chats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_id` on the `chats` table. All the data in the column will be lost.
  - The primary key for the `messages` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_id` on the `messages` table. All the data in the column will be lost.
  - The primary key for the `product_favourites` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_id` on the `product_favourites` table. All the data in the column will be lost.
  - The primary key for the `user_transactions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_id` on the `user_transactions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_chat_id_fkey";

-- AlterTable
ALTER TABLE "category_favourites" DROP CONSTRAINT "category_favourites_pkey",
DROP COLUMN "address_id",
ADD COLUMN     "category_favourite_id" SERIAL NOT NULL,
ADD CONSTRAINT "category_favourites_pkey" PRIMARY KEY ("category_favourite_id");

-- AlterTable
ALTER TABLE "chats" DROP CONSTRAINT "chats_pkey",
DROP COLUMN "address_id",
ADD COLUMN     "chat_id" SERIAL NOT NULL,
ADD CONSTRAINT "chats_pkey" PRIMARY KEY ("chat_id");

-- AlterTable
ALTER TABLE "messages" DROP CONSTRAINT "messages_pkey",
DROP COLUMN "address_id",
ADD COLUMN     "message_id" SERIAL NOT NULL,
ADD CONSTRAINT "messages_pkey" PRIMARY KEY ("message_id");

-- AlterTable
ALTER TABLE "product_favourites" DROP CONSTRAINT "product_favourites_pkey",
DROP COLUMN "address_id",
ADD COLUMN     "product_favourite_id" SERIAL NOT NULL,
ADD CONSTRAINT "product_favourites_pkey" PRIMARY KEY ("product_favourite_id");

-- AlterTable
ALTER TABLE "user_transactions" DROP CONSTRAINT "user_transactions_pkey",
DROP COLUMN "address_id",
ADD COLUMN     "transaction_id" SERIAL NOT NULL,
ADD CONSTRAINT "user_transactions_pkey" PRIMARY KEY ("transaction_id");

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("chat_id") ON DELETE RESTRICT ON UPDATE CASCADE;
