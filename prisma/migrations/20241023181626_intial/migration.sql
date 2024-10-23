-- CreateTable
CREATE TABLE "products" (
    "id" UUID NOT NULL,
    "product_id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "product_name" VARCHAR(50) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "category_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "images" TEXT[],
    "condition" TEXT,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER NOT NULL DEFAULT 1,
    "updated_by" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "category_id" SERIAL NOT NULL,
    "category_name" VARCHAR(50) NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER NOT NULL DEFAULT 1,
    "updated_by" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "user_id" SERIAL NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email_address" VARCHAR(50) NOT NULL,
    "mobile_number" VARCHAR(15) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "mobile_verified" BOOLEAN NOT NULL DEFAULT false,
    "college_name" VARCHAR(200) NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER NOT NULL DEFAULT 1,
    "updated_by" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_id_key" ON "products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "categories_id_key" ON "categories"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_address_key" ON "users"("email_address");

-- CreateIndex
CREATE UNIQUE INDEX "users_mobile_number_key" ON "users"("mobile_number");

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;
