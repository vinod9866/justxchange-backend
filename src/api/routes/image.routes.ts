import { Router } from 'express';
import imageController from '../controllers/image.controller';
import multer from 'multer';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });
router.post('/upload-image', upload.single('image'), (req, res) =>
    imageController.uploadImage(req, res),
);

export default router;
