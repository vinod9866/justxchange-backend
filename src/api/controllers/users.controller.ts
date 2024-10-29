import { userService } from '../services';
import { Request, Response } from 'express';
import { exceptionMsger } from '../utils/exceptionMsger';

export const userController = {
    sendOtpToUser: async (req: Request, res: Response) => {
        try {
            const messageId = await userService.sendOtpToUser(
                req.params.mobileNumber,
            );
            res.json({ data: { messageId } });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },
};
