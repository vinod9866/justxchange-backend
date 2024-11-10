import { PrismaClient } from '@prisma/client';
import { ICategory } from '../interfaces';

const prisma = new PrismaClient();

export const categoryService = {
    createCategory: async (categoryData: ICategory) => {
        const existingCategory = await prisma.category.findFirst({
            where: { categoryName: categoryData.categoryName },
        });

        if (existingCategory) {
            throw new Error('Category name already exists.');
        }
        const category = await prisma.category.create({
            data: categoryData,
        });
        return category;
    },

    getAllCategories: async () => {
        return await prisma.category.findMany({
            select: { id: true, categoryName: true },
        });
    },

    getCategoryById: async (id: string) => {
        return await prisma.category.findUnique({
            where: { id: id },
            select: { id: true, categoryName: true },
        });
    },

    updateCategory: async (id: string, categoryData: ICategory) => {
        return await prisma.category.update({
            where: { id: id },
            data: categoryData,
        });
    },

    deleteCategory: async (id: string) => {
        await prisma.category.delete({
            where: { id: id },
        });
    },
};
