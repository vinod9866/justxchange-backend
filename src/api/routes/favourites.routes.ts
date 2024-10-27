import Router from 'express';
import { favoriteController } from '../controllers';
const router = Router();

router.post('/category/favourites', favoriteController.addCategoryFavorite);
router.get('/category/favourites', favoriteController.getUserCategoryFavorites);
router.delete('/category/favourites/:id', favoriteController.removeCategoryFavorite);
router.post('/product/favourites', favoriteController.addProductFavorite);
router.get('/product/favourites', favoriteController.getUserProductFavorites);
router.delete(
    '/product/favourites/:id',
    favoriteController.removeProductFavorite,
);

export default router;
