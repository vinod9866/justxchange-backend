import { Request, Response } from 'express';
import CategoryService from '../services/category.service';
import { categorySchema } from '../validators/category.validator';
import { CategoryAttributes } from '../interfaces/category.attributes';
import { createResponse } from '../utils/response.formatter';


class CategoryController {
  
  private categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  // Create a new category
  public createCategory = async (req: Request, res: Response) => {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      const response = createResponse(true, error.details[0].message);
      return res.status(400).json(response);
    }

    try {
      const category: CategoryAttributes = await this.categoryService.create(req.body);
      const response = createResponse(false,'Category saved successfully', category);
      res.status(201).json(response);
    } catch (err:any) {
      const response = createResponse(true, err.message)
      res.status(500).json(response);
    }
  };

  // Get all categories
  public getAllCategories = async (req: Request, res: Response) => {
    try {
      const categories: CategoryAttributes[] = await this.categoryService.getAll();
      const response = createResponse(false, "Saved categories", categories)
      res.json(response);
    } catch (err:any) {
      const response = createResponse(true, err.message)
      res.status(500).json(response);
    }
  };

  // Get category by ID
  public getCategoryById = async (req: Request, res: Response) => {
    try {
      const category: CategoryAttributes | null = await this.categoryService.getById(Number(req.params.id));
      if (!category) {
        const response = createResponse(true, 'Category not found')
        return res.status(404).json(response);
      }
      const response = createResponse(false, 'Saved categories', category)
      res.json(response);
    } catch (err:any) {
      const response = createResponse(true, err.message)
      res.status(500).json(response);
    }
  };

  // Update category by ID
  public updateCategory = async (req: Request, res: Response) => {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      const response = createResponse(true, error.details[0].message)
      return res.status(400).json(response);
    }

    try {
      const category: CategoryAttributes | null = await this.categoryService.update(Number(req.params.id), req.body);
      if (!category) {
        const response = createResponse(true, 'Category not found')
        return res.status(404).json(response);
      }
      const response = createResponse(false, "Category updated successfully", category);
      res.json(response);
    } catch (err:any) {
      const response = createResponse(true, err.messages)
      res.status(500).json(response);
    }
  };

  // Delete category by ID
  public deleteCategory = async (req: Request, res: Response) => {
    try {
      await this.categoryService.delete(Number(req.params.id));
      const response = createResponse(false, "Category deleted successfully");
      res.status(204).json(response);
    } catch (err:any) {
      const response = createResponse(true, err.message)
      res.status(500).json(response);
    }
  };
}

export default CategoryController;
