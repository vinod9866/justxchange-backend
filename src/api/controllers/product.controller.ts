// src/controllers/productController.ts
import { Request, Response } from 'express';
import { productService } from '../services/product.service';
import { IProduct } from '../interfaces/product';
import productSchema from '../validators/product.validator';
import { exceptionMsger } from '../utils/exceptionMsger';

export const productController = {
    // Create a new product
    createProduct: async (req: Request, res: Response) => {
        const { error } = await productSchema.validateAsync(req.body);
        if (error) {
            return res
                .status(400)
                .json(exceptionMsger(error.details[0].message));
        }
        try {
            const product: IProduct = await productService.create(req.body);
            res.status(201).json({
                message: 'Product created successfully',
                data: product,
            });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    // Get all products
    getAllProducts: async (req: Request, res: Response) => {
        try {
            const products: IProduct[] = await productService.getAll();
            res.json({ data: products });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    // Get a product by ID
    getProductById: async (req: Request, res: Response) => {
        try {
            const product: IProduct | null = await productService.getById(
                Number(req.params.id),
            );
            if (!product)
                return res
                    .status(404)
                    .json(exceptionMsger('Product not found'));
            res.json({ data: product });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    // Update a product by ID
    updateProduct: async (req: Request, res: Response) => {
        try {
            const product: IProduct | null = await productService.update(
                Number(req.params.id),
                req.body,
            );
            if (!product)
                return res
                    .status(404)
                    .json(exceptionMsger('Product not found'));
            res.json({
                message: 'Updated product successfully',
                data: product,
            });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    // Delete a product by ID
    deleteProduct: async (req: Request, res: Response) => {
        try {
            await productService.delete(Number(req.params.id));
            res.status(204).json({ message: 'Product deleted successfully' });
        } catch (err) {
            const response = 'Product not found';
            res.status(500).json(exceptionMsger(response));
        }
    },
};
