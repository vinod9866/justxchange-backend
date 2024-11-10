import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const chatService = {
    createChat: async (productId: number, buyerId: number) => {
        const existingChat = await prisma.chat.findFirst({
            where: { productId, buyerId },
        });

        if (existingChat) {
            return existingChat;
        }

        return await prisma.chat.create({
            data: {
                productId,
                buyerId,
            },
        });
    },

    addMessage: async (chatId: number, userId: number, messageText: string) => {
        const chat = await prisma.chat.findUnique({ where: { chatId } });
        if (!chat) throw new Error('Chat not found');

        return await prisma.message.create({
            data: {
                chatId,
                userId,
                message: messageText,
            },
        });
    },

    getChatMessages: async (chatId: number) => {
        return await prisma.message.findMany({
            where: { chatId },
            orderBy: { createdDate: 'asc' },
        });
    },

    getUserChats: async (userId: number) => {
        return await prisma.chat.findMany({
            where: {
                OR: [{ buyerId: userId }],
            },
            include: {
                product: true,
                buyer: true,
                message: { take: 1, orderBy: { createdDate: 'desc' } },
            },
        });
    },
};
