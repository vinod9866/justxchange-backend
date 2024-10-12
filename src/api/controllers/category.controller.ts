import { Request, Response } from 'express';
import { categoryService } from '../services/category.service';
import { categorySchema } from '../validators/category.validator';
import { createResponse } from '../utils/response.formatter';

export const categoryController = {
    createCategory: async (req: Request, res: Response) => {
        const { error } = categorySchema.validate(req.body);
        if (error) {
            const response = createResponse(true, error.details[0].message);
            return res.status(400).json(response);
        }

        try {
            const category = await categoryService.createCategory(req.body);
            const response = createResponse(
                false,
                'Category saved successfully',
                category,
            );
            res.status(201).json(response);
        } catch (err: any) {
            const response = createResponse(true, err.message);
            res.status(500).json(response);
        }
    },

    getAllCategories: async (req: Request, res: Response) => {
        try {
            const categories = await categoryService.getAllCategories();
            const response = createResponse(
                false,
                'Saved categories',
                categories,
            );
            res.json(response);
        } catch (err: any) {
            const response = createResponse(true, err.message);
            res.status(500).json(response);
        }
    },

    getCategoryById: async (req: Request, res: Response) => {
        try {
            const category = await categoryService.getCategoryById(
                Number(req.params.id),
            );
            if (!category) {
                const response = createResponse(true, 'Category not found');
                return res.status(404).json(response);
            }
            const response = createResponse(false, 'Saved category', category);
            res.json(response);
        } catch (err: any) {
            const response = createResponse(true, err.message);
            res.status(500).json(response);
        }
    },

    updateCategory: async (req: Request, res: Response) => {
        const { error } = categorySchema.validate(req.body);
        if (error) {
            const response = createResponse(true, error.details[0].message);
            return res.status(400).json(response);
        }

        try {
            const category = await categoryService.updateCategory(
                Number(req.params.id),
                req.body,
            );
            if (!category) {
                const response = createResponse(true, 'Category not found');
                return res.status(404).json(response);
            }
            const response = createResponse(
                false,
                'Category updated successfully',
                category,
            );
            res.json(response);
        } catch (err: any) {
            const response = createResponse(true, err.message);
            res.status(500).json(response);
        }
    },

    deleteCategory: async (req: Request, res: Response) => {
        try {
            await categoryService.deleteCategory(Number(req.params.id));
            const response = createResponse(
                false,
                'Category deleted successfully',
            );
            res.status(204).json(response);
        } catch (err: any) {
            const response = createResponse(true, err.message);
            res.status(500).json(response);
        }
    },
};
