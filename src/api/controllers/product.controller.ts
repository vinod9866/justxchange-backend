// src/controllers/productController.ts
import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import { ProductAttributes } from '../interfaces/product.attributes';
import productSchema from '../validators/product.validator';


class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }
  

  // Create a new product
  public createProduct = async (req: Request, res: Response) => {
    const { error } = await productSchema.validateAsync(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    try {
      const product: ProductAttributes = await this.productService.create(req.body);
      res.status(201).json(product);
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  };

  // Get all products
  public getAllProducts = async (req: Request, res: Response) => {
    try {
      const products: ProductAttributes[] = await this.productService.getAll();
      res.json(products);
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  };

  // Get a product by ID
  public getProductById = async (req: Request, res: Response) => {
    try {
      const product: ProductAttributes | null = await this.productService.getById(Number(req.params.id));
      if (!product) return res.status(404).json({ error: 'Product not found' });
      res.json(product);
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  };

  // Update a product by ID
  public updateProduct = async (req: Request, res: Response) => {
    try {
      const product: ProductAttributes | null = await this.productService.update(Number(req.params.id), req.body);
      if (!product) return res.status(404).json({ error: 'Product not found' });
      res.json(product);
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  };

  // Delete a product by ID
  public deleteProduct = async (req: Request, res: Response) => {
    try {
      const deletedCount: number = await this.productService.delete(Number(req.params.id));
      if (!deletedCount) return res.status(404).json({ error: 'Product not found' });
      res.status(204).send();
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  };
}

export default ProductController;