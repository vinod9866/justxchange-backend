import { Request, Response } from 'express';
import { chatService } from '../services';

export const chatController = {
    createChat: async (req: Request, res: Response) => {
        const { productId, buyerId } = req.body;
        try {
            const chat = await chatService.createChat(productId, buyerId);
            res.status(201).json(chat);
        } catch (error) {
            res.status(400).json({ error: error });
        }
    },

    sendMessage: async (req: Request, res: Response) => {
        const { chatId, userId, messageText } = req.body;
        try {
            const message = await chatService.addMessage(
                chatId,
                userId,
                messageText,
            );
            res.status(201).json(message);
        } catch (error) {
            res.status(400).json({ error: error });
        }
    },

    getChatMessages: async (req: Request, res: Response)=> {
        const { chatId } = req.params;
        try {
            const messages = await chatService.getChatMessages(Number(chatId));
            res.status(200).json(messages);
        } catch (error) {
            res.status(404).json({ error: 'Chat not found' });
        }
    },

    getUserChats: async(req: Request, res: Response)=> {
        const { userId } = req.params;
        try {
            const chats = await chatService.getUserChats(Number(userId));
            res.status(200).json(chats);
        } catch (error) {
            res.status(404).json({ error: error });
        }
    },
};