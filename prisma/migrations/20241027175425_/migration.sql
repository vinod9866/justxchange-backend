/*
  Warnings:

  - You are about to drop the column `email_address` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_email_address_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "email_address",
ADD COLUMN     "email" VARCHAR(50) NOT NULL;

-- CreateTable
CREATE TABLE "Address" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "mobile_number" VARCHAR(15) NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "CategoryFovourites" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoryFovourites_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "ProductFovourites" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductFovourites_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "UserTransactions" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserTransactions_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "Chats" (
    "id" UUID NOT NULL,
    "address_id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chats_pkey" PRIMARY KEY ("address_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address_id_key" ON "Address"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryFovourites_id_key" ON "CategoryFovourites"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductFovourites_id_key" ON "ProductFovourites"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserTransactions_id_key" ON "UserTransactions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Chats_id_key" ON "Chats"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryFovourites" ADD CONSTRAINT "CategoryFovourites_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryFovourites" ADD CONSTRAINT "CategoryFovourites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFovourites" ADD CONSTRAINT "ProductFovourites_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductFovourites" ADD CONSTRAINT "ProductFovourites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTransactions" ADD CONSTRAINT "UserTransactions_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTransactions" ADD CONSTRAINT "UserTransactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
