import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const favouriteService = {

    addCategoryFavorite: async (userId: number, categoryId: number) => {
        const existingFavorite = await prisma.categoryFovourite.findFirst({
            where: { userId, categoryId },
        });
        if (existingFavorite) return existingFavorite;

        return await prisma.categoryFovourite.create({
            data: {
                userId,
                categoryId,
            },
        });
    },

    getUserCategoryFavorites: async (userId: number) => {
        return await prisma.categoryFovourite.findMany({
            where: { userId },
            include: { category: true },
        });
    },

    removeCategoryFavorite: async (userId: number, categoryId: number) => {
        return await prisma.categoryFovourite.deleteMany({
            where: { userId, categoryId },
        });
    },

    addProductFavorite: async (userId: number, productId: number) => {
        const existingFavorite = await prisma.productFovourite.findFirst({
            where: { userId, productId },
        });
        if (existingFavorite) return existingFavorite;

        return await prisma.productFovourite.create({
            data: {
                userId,
                productId,
            },
        });
    },

    getUserProductFavorites: async (userId: number) => {
        return await prisma.productFovourite.findMany({
            where: { userId },
            include: { product: true },
        });
    },

    removeProductFavorite: async (userId: number, productId: number) => {
        return await prisma.productFovourite.deleteMany({
            where: { userId, productId },
        });
    },
};
