import { userService } from '../services';
import { Request, Response } from 'express';
import { exceptionMsger } from '../utils/exceptionMsger';
import { otpVerifySchema } from '../validators/otp.validator';
import userSchema from '../validators/user.validator';

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

    verifyOtp : async (req: Request, res: Response) => {
        const { error } = await otpVerifySchema.validateAsync(req.body);
        if (error) {
            return res
                .status(400)
                .json(exceptionMsger(error.details[0].message));
        }
        try {
            const verifyOtp = await userService.verifyOtp(req.body);
            res.json({ data: { verifyOtp } });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    saveUser : async (req: Request, res: Response) => {
        const { error } = await userSchema.validateAsync(req.body);
        if (error) {
            return res
                .status(400)
                .json(exceptionMsger(error.details[0].message));
        }
        try {
            const response = await userService.saveUser(req.body);
            res.json({ data: response });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },

    loginUser : async (req: Request, res: Response) => {
        const { error } = await userSchema.validateAsync(req.body);
        if (error) {
            return res
                .status(400)
                .json(exceptionMsger(error.details[0].message));
        }
        try {
            const response = await userService.saveUser(req.body);
            res.json({ data: response });
        } catch (err) {
            res.status(500).json(exceptionMsger(err));
        }
    },
};
