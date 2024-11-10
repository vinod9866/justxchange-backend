import { Request, Response } from 'express';
import { categoryService } from '../services/category.service';
import { categorySchema } from '../validators/category.validator';
import { ICategory, ICategoryRes } from '../interfaces/category';
import { exceptionMsger } from '../utils/exceptionMsger';

export const categoryController = {
    createCategory: async (req: Request, res: Response) => {
        /* #swagger.responses[201] = {
            schema: {
                data: 
                    { $ref: "#/components/schemas/category" }   
            }
        } */
        const { error } = categorySchema.validate(req.body);
        if (error) {
            return res.status(400).json(exceptionMsger(error));
        }

        try {
            const { categoryName } = req.body;

            const category = await categoryService.createCategory({
                categoryName,
            });
            const response = category;
            res.status(201).json({ data: response });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    getAllCategories: async (req: Request, res: Response) => {
        /* #swagger.responses[200] = {
            schema: {
                data: [
                    { $ref: "#/components/schemas/category" }
                ]
            }
        } */
        try {
            const categories: ICategory[] =
                await categoryService.getAllCategories();
            const response = categories;
            res.status(200).json({ data: response });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    getCategoryById: async (req: Request, res: Response) => {
        /* #swagger.responses[200] = {
            schema: {
                data: 
                    { $ref: "#/components/schemas/category" }
                
            }
        } */
        try {
            const category = await categoryService.getCategoryById(
                req.params.id,
            );
            if (!category) {
                const response = 'Category not found';
                return res.status(404).json(exceptionMsger(response));
            }
            const response = category;
            res.json({ data: response });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    updateCategory: async (req: Request, res: Response) => {
        /* #swagger.responses[200] = {
            schema: {
                message: 'Category updated successfully'
            }
        } */
        const { error } = categorySchema.validate(req.body);
        if (error) {
            const response = error.details[0].message;
            return res.status(400).json(exceptionMsger(response));
        }

        try {
            const { categoryName } = req.body;
            const category = await categoryService.updateCategory(
                req.params.id,
                { categoryName },
            );
            if (!category) {
                const response = 'Category not found';
                return res.status(404).json(exceptionMsger(response));
            }
            const response = 'Category updated successfully';
            res.json({ message: response });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    deleteCategory: async (req: Request, res: Response) => {
        /* #swagger.responses[200] = {
            schema: {
                message: 'Category deleted successfully'
            }
        } */
        try {
            await categoryService.deleteCategory(req.params.id);
            const response = 'Category deleted successfully';

            res.status(200).json({ message: response });
        } catch (err) {
            const response = 'Category not found';
            res.status(500).json(exceptionMsger(response));
        }
    },
};
