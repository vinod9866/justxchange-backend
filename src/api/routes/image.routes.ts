import { Router } from "express";
import ImageController from "../controllers/image.controller";
import multer from "multer";

const router = Router();
const imageController = new ImageController();
const upload = multer({ storage: multer.memoryStorage() }); 
router.post('/upload-image', upload.single('image'), (req, res) => imageController.uploadImage(req,res));

export default router;