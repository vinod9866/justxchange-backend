import { Request, Response } from 'express';
import { categoryService } from '../services/category.service';
import { categorySchema } from '../validators/category.validator';

export const categoryController = {
    createCategory: async (req: Request, res: Response) => {
        const { error } = categorySchema.validate(req.body);
        if (error) {
            const response = error.message;
            return res.status(400).json(response);
        }

        try {
            const { categoryName } = req.body;
            const category = await categoryService.createCategory(categoryName);
            const response = category;
            res.status(201).json(response);
        } catch (err: any) {
            const response = err.message;
            res.status(500).json(response);
        }
    },

    getAllCategories: async (req: Request, res: Response) => {
        try {
            const categories = await categoryService.getAllCategories();
            const response = categories;
            res.json(response);
        } catch (err: any) {
            const response = err.message;
            res.status(500).json(response);
        }
    },

    getCategoryById: async (req: Request, res: Response) => {
        try {
            const category = await categoryService.getCategoryById(
                Number(req.params.id),
            );
            if (!category) {
                const response = 'Category not found';
                return res.status(404).json(response);
            }
            const response = category;
            res.json(response);
        } catch (err: any) {
            const response = err.message;
            res.status(500).json(response);
        }
    },

    updateCategory: async (req: Request, res: Response) => {
        const { error } = categorySchema.validate(req.body);
        if (error) {
            const response = error.details[0].message;
            return res.status(400).json(response);
        }

        try {
            const category = await categoryService.updateCategory(
                Number(req.params.id),
                req.body,
            );
            if (!category) {
                const response = 'Category not found';
                return res.status(404).json(response);
            }
            const response = 'Category updated successfully';
            res.json(response);
        } catch (err: any) {
            const response = err.message;
            res.status(500).json(response);
        }
    },

    deleteCategory: async (req: Request, res: Response) => {
        try {
            await categoryService.deleteCategory(Number(req.params.id));
            const response = 'Category deleted successfully';

            res.status(204).json(response);
        } catch (err: any) {
            const response = err.message;
            res.status(500).json(response);
        }
    },
};
