import { Request, Response } from 'express';
import { favouriteService } from '../services';

export const favoriteController = {
    addCategoryFavorite: async (req: Request, res: Response) => {
        try {
            const userId = 1; // Assuming `req.user` holds authenticated user info
            const { categoryId } = req.body;
            const favorite = await favouriteService.addCategoryFavorite(
                userId,
                categoryId,
            );
            res.status(201).json(favorite);
        } catch (error) {
            res.status(500).json({ error: 'Error adding category favorite' });
        }
    },

    getUserCategoryFavorites: async (req: Request, res: Response) => {
        try {
            const userId = 1;
            const favorites =
                await favouriteService.getUserCategoryFavorites(userId);
            res.status(200).json(favorites);
        } catch (error) {
            res.status(500).json({
                error: 'Error fetching category favorites',
            });
        }
    },

    removeCategoryFavorite: async (req: Request, res: Response) => {
        try {
            const userId = 1;
            const { categoryId } = req.params;
            await favouriteService.removeCategoryFavorite(
                userId,
                parseInt(categoryId),
            );
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error removing category favorite' });
        }
    },

    addProductFavorite: async (req: Request, res: Response) => {
        try {
            const userId = 1;
            const { productId } = req.body;
            const favorite = await favouriteService.addProductFavorite(
                userId,
                productId,
            );
            res.status(201).json(favorite);
        } catch (error) {
            res.status(500).json({ error: 'Error adding product favorite' });
        }
    },

    getUserProductFavorites: async (req: Request, res: Response) => {
        try {
            const userId = 1;
            const favorites =
                await favouriteService.getUserProductFavorites(userId);
            res.status(200).json(favorites);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching product favorites' });
        }
    },

    removeProductFavorite: async (req: Request, res: Response) => {
        try {
            const userId = 1;
            const { productId } = req.params;
            await favouriteService.removeProductFavorite(
                userId,
                parseInt(productId),
            );
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Error removing product favorite' });
        }
    },
};
