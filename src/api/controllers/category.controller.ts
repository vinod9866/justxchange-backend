import { Request, Response } from 'express';
import CategoryService from '../services/category.service';
import { categorySchema } from '../validators/category.validator';
import { CategoryAttributes } from '../interfaces/category.attributes';


class CategoryController {
  private categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  // Create a new category
  public createCategory = async (req: Request, res: Response) => {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    try {
      const category: CategoryAttributes = await this.categoryService.create(req.body);
      res.status(201).json(category);
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  };

  // Get all categories
  public getAllCategories = async (req: Request, res: Response) => {
    try {
      const categories: CategoryAttributes[] = await this.categoryService.getAll();
      res.json(categories);
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  };

  // Get category by ID
  public getCategoryById = async (req: Request, res: Response) => {
    try {
      const category: CategoryAttributes | null = await this.categoryService.getById(Number(req.params.id));
      if (!category) return res.status(404).json({ error: 'Category not found' });
      res.json(category);
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  };

  // Update category by ID
  public updateCategory = async (req: Request, res: Response) => {
    const { error } = categorySchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    try {
      const category: CategoryAttributes | null = await this.categoryService.update(Number(req.params.id), req.body);
      if (!category) return res.status(404).json({ error: 'Category not found' });
      res.json(category);
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  };

  // Delete category by ID
  public deleteCategory = async (req: Request, res: Response) => {
    try {
      await this.categoryService.delete(Number(req.params.id));
      res.status(204).send();
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  };
}

export default CategoryController;
