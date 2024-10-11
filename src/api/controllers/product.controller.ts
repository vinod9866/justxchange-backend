// src/controllers/productController.ts
import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import { ProductAttributes } from '../interfaces/product.attributes';
import productSchema from '../validators/product.validator';
import { createResponse } from '../utils/response.formatter';


class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }
  

  // Create a new product
  public createProduct = async (req: Request, res: Response) => {
    const { error } = productSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    try {
      const product: ProductAttributes = await this.productService.create(req.body);
      res.status(201).json(createResponse(false, "Product saved successfully", product));
    } catch (err:any) {
      res.status(500).json(createResponse(true, err.message ));
    }
  };

  // Get all products
  public getAllProducts = async (req: Request, res: Response) => {
    try {
      const products: ProductAttributes[] = await this.productService.getAll();
      res.json(createResponse(false, "Saved products", products));
    } catch (err:any) {
      res.status(500).json(createResponse(true, err.message ));
    }
  };

  // Get a product by ID
  public getProductById = async (req: Request, res: Response) => {
    try {
      const product: ProductAttributes | null = await this.productService.getById(Number(req.params.id));
      if (!product) return res.status(404).json(createResponse(true, 'Product not found'));
      res.json(createResponse(false , "Get saved products", product));
    } catch (err:any) {
      res.status(500).json(createResponse(true, err.message));
    }
  };

  // Update a product by ID
  public updateProduct = async (req: Request, res: Response) => {
    try {
      const product: ProductAttributes | null = await this.productService.update(Number(req.params.id), req.body);
      if (!product) return res.status(404).json(createResponse(true, 'Product not found'));
      res.json(createResponse(false, "Updated products successfylly", product));
    } catch (err:any) {
      res.status(500).json(createResponse(true, err.message));
    }
  };

  // Delete a product by ID
  public deleteProduct = async (req: Request, res: Response) => {
    try {
      const deletedCount: number = await this.productService.delete(Number(req.params.id));
      if (!deletedCount) return res.status(404).json(createResponse(true, 'Product not found'));
      res.status(204).json(createResponse(false , "Product deleted"))
    } catch (err:any) {
      res.status(500).json(createResponse(true, err.message));
    }
  };
}

export default ProductController;