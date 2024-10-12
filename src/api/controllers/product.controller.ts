// src/controllers/productController.ts
import { Request, Response } from 'express';
import { productService } from '../services/product.service';
import { IProduct } from '../interfaces/product';
import productSchema from '../validators/product.validator';
import { createResponse } from '../utils/response.formatter';

export const productController = {
    // Create a new product
    createProduct: async (req: Request, res: Response) => {
        const { error } = await productSchema.validateAsync(req.body);
        if (error) {
            return res
                .status(400)
                .json(createResponse(true, error.details[0].message));
        }
        try {
            const product: IProduct = await productService.create(req.body);
            res.status(201).json(
                createResponse(false, 'Product saved successfully', product),
            );
        } catch (err: any) {
            res.status(500).json(createResponse(true, err.message));
        }
    },

    // Get all products
    getAllProducts: async (req: Request, res: Response) => {
        try {
            const products: IProduct[] = await productService.getAll();
            res.json(createResponse(false, 'Saved products', products));
        } catch (err: any) {
            res.status(500).json(createResponse(true, err.message));
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
                    .json(createResponse(true, 'Product not found'));
            res.json(createResponse(false, 'Get saved products', product));
        } catch (err: any) {
            res.status(500).json(createResponse(true, err.message));
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
                    .json(createResponse(true, 'Product not found'));
            res.json(
                createResponse(false, 'Updated product successfully', product),
            );
        } catch (err: any) {
            res.status(500).json(createResponse(true, err.message));
        }
    },

    // Delete a product by ID
    deleteProduct: async (req: Request, res: Response) => {
        try {
            await productService.delete(Number(req.params.id));
            res.status(204).json(createResponse(false, 'Product deleted'));
        } catch (err: any) {
            res.status(500).json(createResponse(true, err.message));
        }
    },
};
