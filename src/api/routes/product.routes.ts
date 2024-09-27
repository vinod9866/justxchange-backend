import { Router } from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller';

const router = Router();

// Create a new Product
router.post('/products', createProduct);

// Get all Products
router.get('/products', getAllProducts);

// Get Product by ID
router.get('/products/:id', getProductById);

// Update Product
router.put('/products/:id', updateProduct);

// Delete Product
router.delete('/products/:id', deleteProduct);

export default router;
