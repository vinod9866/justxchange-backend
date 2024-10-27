/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CategoryFovourites` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chats` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductFovourites` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserTransactions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_user_id_fkey";

-- DropForeignKey
ALTER TABLE "CategoryFovourites" DROP CONSTRAINT "CategoryFovourites_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryFovourites" DROP CONSTRAINT "CategoryFovourites_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_productId_fkey";

-- DropForeignKey
ALTER TABLE "Chats" DROP CONSTRAINT "Chats_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductFovourites" DROP CONSTRAINT "ProductFovourites_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductFovourites" DROP CONSTRAINT "ProductFovourites_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserTransactions" DROP CONSTRAINT "UserTransactions_productId_fkey";

-- DropForeignKey
ALTER TABLE "UserTransactions" DROP CONSTRAINT "UserTransactions_user_id_fkey";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "CategoryFovourites";

-- DropTable
DROP TABLE "Chats";

-- DropTable
DROP TABLE "ProductFovourites";

-- DropTable
DROP TABLE "UserTransactions";

-- CreateTable
CREATE TABLE "addresses" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "mobile_number" VARCHAR(15) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "category_favourites" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_favourites_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "product_favourites" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_favourites_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "user_transactions" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_transactions_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "chats" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chats_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "messages" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "chat_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("address_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "addresses_id_key" ON "addresses"("id");

-- CreateIndex
CREATE UNIQUE INDEX "category_favourites_id_key" ON "category_favourites"("id");

-- CreateIndex
CREATE UNIQUE INDEX "product_favourites_id_key" ON "product_favourites"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_transactions_id_key" ON "user_transactions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "chats_id_key" ON "chats"("id");

-- CreateIndex
CREATE UNIQUE INDEX "messages_id_key" ON "messages"("id");

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_favourites" ADD CONSTRAINT "category_favourites_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "category_favourites" ADD CONSTRAINT "category_favourites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_favourites" ADD CONSTRAINT "product_favourites_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_favourites" ADD CONSTRAINT "product_favourites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_transactions" ADD CONSTRAINT "user_transactions_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_transactions" ADD CONSTRAINT "user_transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "chats"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
