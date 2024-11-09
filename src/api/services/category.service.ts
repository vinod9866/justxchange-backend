import { PrismaClient } from '@prisma/client';
import { ICategory } from '../interfaces';
import logger from '../../config/Logger';

const prisma = new PrismaClient();

export const categoryService = {
    createCategory: async (categoryData: ICategory) => {
        const category = await prisma.category.create({
            data: categoryData,
        });
        return category;
    },

    getAllCategories: async () => {
        logger.info('get all categories');
        return await prisma.category.findMany();
    },

    getCategoryById: async (id: number) => {
        return await prisma.category.findUnique({
            where: { categoryId: id },
        });
    },

    updateCategory: async (id: number, categoryData: any) => {
        return await prisma.category.update({
            where: { categoryId: id },
            data: categoryData,
        });
    },

    deleteCategory: async (id: number) => {
        await prisma.category.delete({
            where: { categoryId: id },
        });
    },
};
