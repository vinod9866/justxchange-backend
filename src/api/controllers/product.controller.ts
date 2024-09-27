import { Request, Response } from 'express';
import productService from '../services/product.service';

// Create a new Product
export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Get all Products with Category
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Get Product by ID
export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await productService.getProductById(Number(req.params.id));
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(product);
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Update Product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await productService.updateProduct(Number(req.params.id), req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

// Delete Product
export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    await productService.deleteProduct(Number(req.params.id));
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
