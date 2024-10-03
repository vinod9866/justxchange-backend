import { Router } from 'express';
import ProductController from '../controllers/product.controller';


const router = Router();

const productController = new ProductController();

/**
 * @api {post} /products Create a Product
 * @apiName CreateProduct
 * @apiGroup Product
 *
 * @apiBody {String} name Name of the product.
 * @apiBody {Number} price Price of the product.
 * @apiBody {String} description Description of the product.
 *
 * @apiSuccess {String} id Unique ID of the product.
 * @apiSuccess {String} name Name of the product.
 * @apiSuccess {Number} price Price of the product.
 * @apiSuccess {String} description Description of the product.
 *
 * @apiError (Error 500) InternalServerError There was an error creating the product.
 */
router.post('/products', productController.createProduct);

router.get('/products', productController.getAllProducts);

// Get Product by ID
router.get('/products/:id', productController.getProductById);

// Update Product
router.put('/products/:id', productController.updateProduct);

// Delete Product
router.delete('/products/:id', productController.deleteProduct);

export default router;
