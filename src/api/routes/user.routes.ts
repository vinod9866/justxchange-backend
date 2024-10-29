import Router from 'express';
import { userController } from '../controllers';
const router = Router();

router.get('/signup/:mobileNumber', userController.sendOtpToUser);

export default router;
