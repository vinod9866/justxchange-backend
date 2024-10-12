import { Router } from 'express';
import { productController } from '../controllers/product.controller';

const router = Router();

router.post('/products', productController.createProduct);

router.get('/products', productController.getAllProducts);

// Get Product by ID
router.get('/products/:id', productController.getProductById);

// Update Product
router.put('/products/:id', productController.updateProduct);

// Delete Product
router.delete('/products/:id', productController.deleteProduct);

export default router;
