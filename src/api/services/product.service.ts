import { PrismaClient } from '@prisma/client';
import { IProduct } from '../interfaces';

const prisma = new PrismaClient();

export const productService = {
    create: async (productData: IProduct) => {
        return await prisma.product.create({
            data: productData,
        });
    },

    getAll: async () => {
        return await prisma.product.findMany();
    },

    getById: async (id: number) => {
        return await prisma.product.findUnique({
            where: { productId: id },
        });
    },

    update: async (id: number, productData: IProduct) => {
        return await prisma.product.update({
            where: { productId: id },
            data: productData,
        });
    },

    delete: async (id: number) => {
        return await prisma.product.delete({
            where: { productId: id },
        });
    },
};
