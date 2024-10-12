import { Router } from 'express';
import categoryRoutes from './category.routes';
import productRoutes from './product.routes';
import imageRoutes from './image.routes';

const router = Router();
// Public routes (user login/signup...etc routes)

// Protected routes (Require authentication)
// router.use(authMiddleware); // Apply auth middleware to all routes that follow this

router.use(categoryRoutes /* #swagger.tags = ['Category']  */);

router.use(productRoutes /* #swagger.tags = ['Product'] */);

router.use(imageRoutes /* #swagger.tags = ['Image'] */);

export default router;
