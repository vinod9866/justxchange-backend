import { Router } from 'express';
import multer from 'multer';
import { imageController } from '../controllers';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });
router.post('/upload-image', upload.single('image'), (req, res) =>
    imageController.uploadImage(req, res),
);

export default router;
