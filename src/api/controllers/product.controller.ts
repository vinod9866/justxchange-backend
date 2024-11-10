// src/controllers/productController.ts
import { Request, Response } from 'express';
import { productService } from '../services';
import { IProduct } from '../interfaces/product';
import productSchema from '../validators/product.validator';
import { exceptionMsger } from '../utils/exceptionMsger';

export const productController = {
    // Create a new product
    createProduct: async (req: Request, res: Response) => {
        /* #swagger.responses[200] = {
        schema: {
            message: 'Product created successfully',
            data: [
                { $ref: "#/components/schemas/product" }
            ]
        }
    } */
        try {
            // Validate request body
            await productSchema.validateAsync(req.body);

            const productData = {
                ...req.body,
                amount: parseFloat(req.body.amount),
                categoryId: parseFloat(req.body.categoryId),
            };
            const product: IProduct = await productService.create(productData);

            // Respond with success
            res.status(200).json({
                message: 'Product created successfully',
                data: product,
            });
        } catch (err: any) {
            if (err.isJoi) {
                // Handle Joi validation errors
                const message = err.details
                    ? err.details[0].message
                    : 'Validation error';
                return res.status(400).json({ error: message });
            }
            // Handle general server errors
            res.status(500).json(exceptionMsger(err.message || 'Server error'));
        }
    },

    // Get all products
    getAllProducts: async (req: Request, res: Response) => {
        /* #swagger.responses[200] = {
            schema: {
                data: [
                    { $ref: "#/components/schemas/product" }
                ]
            }
        } */
        try {
            const products = await productService.getAll();
            res.json({ data: products });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    // Get a product by ID
    getProductById: async (req: Request, res: Response) => {
        /* #swagger.responses[200] = {
            schema: {
                data: 
                    { $ref: "#/components/schemas/product" }
                
            }
        } */
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
        /* #swagger.responses[200] = {
            schema: {
                message: 'Updated product successfully',
                data: 
                    { $ref: "#/components/schemas/product" }
                
            }
        } */
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

    getByCategoryId: async (req: Request, res: Response) => {
        try {
            const products: IProduct[] | [] =
                await productService.getByCategoryId(
                    Number(req.params.categoryId),
                );

            res.json({ data: products });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },
};
