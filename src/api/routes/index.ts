import { Router } from 'express';
import categoryRoutes from './category.routes';
import productRoutes from './product.routes';
import imageRoutes from './image.routes';
import chatRoutes from './chats.routes';
import favouriteRoutes from './favourites.routes';
import userRoutes from './user.routes';
import { attachSwaggerResponses } from '../../middleware/response';

const router = Router();
router.use(attachSwaggerResponses);
// Public routes (user login/signup...etc routes)

// Protected routes (Require authentication)
// router.use(authMiddleware); // Apply auth middleware to all routes that follow this

router.use(categoryRoutes /* #swagger.tags = ['Category']  */);

router.use(productRoutes /* #swagger.tags = ['Product'] */);

router.use(imageRoutes /* #swagger.tags = ['Image'] */);

router.use(chatRoutes /* #swagger.tags = ['Chats'] */);

router.use(favouriteRoutes /* #swagger.tags = ['Favourites'] */);

router.use(userRoutes /* #swagger.tags = ['Sms'] */);

export default router;
