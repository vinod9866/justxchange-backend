import { Product } from '../models';
import { Category } from '../models';
import { ProductAttributes } from '../models/product.model';

class ProductService {
  // Create a new product
  async createProduct(data: ProductAttributes) {
    return Product.create(data);
  }

  // Get all products with category data
  async getAllProducts() {
    return Product.findAll({ include: 'category' });
  }

  // Get a product by ID
  async getProductById(id: number) {
    return Product.findByPk(id, { include: 'category' });
  }

  // Update a product by ID
  async updateProduct(id: number, data: Partial<ProductAttributes>) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product.update(data);
  }

  // Delete a product by ID
  async deleteProduct(id: number) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product.destroy();
  }
}

export default new ProductService();
