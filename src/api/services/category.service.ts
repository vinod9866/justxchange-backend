import Category from "../../db/models/category.model";
import { CategoryAttributes } from "../interfaces/category.attributes";

class CategoryService {
  // Create a new category
  public async create(categoryData: CategoryAttributes): Promise<CategoryAttributes> {
    const category = await Category.create(categoryData);
    return category;
  }

  // Get all categories
  public async getAll(): Promise<CategoryAttributes[]> {
    return await Category.findAll();
  }

  // Get category by ID
  public async getById(id: number): Promise<CategoryAttributes | null> {
    return await Category.findByPk(id);
  }

  // Update category by ID
  public async update(id: number, categoryData: CategoryAttributes): Promise<CategoryAttributes | null> {
    const category = await Category.findByPk(id);
    if (!category) return null;

    await category.update(categoryData);
    return category;
  }

  // Delete category by ID
  public async delete(id: number): Promise<void> {
    const category = await Category.findByPk(id);
    if (category) {
      await category.destroy();
    }
  }
}

export default CategoryService;
