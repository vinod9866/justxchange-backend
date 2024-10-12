import { Router } from 'express';
import categoryRoutes from './category.routes';
import productRoutes from './product.routes';
import imageRoutes from './image.routes';

const router = Router();
// Public routes (user login/signup...etc routes)
router.use(categoryRoutes);
router.use(productRoutes);
router.use(imageRoutes);

// Protected routes (Require authentication)
// router.use(authMiddleware); // Apply auth middleware to all routes that follow this

export default router;
