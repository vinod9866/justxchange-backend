import { PrismaClient } from '@prisma/client';
import { smsService } from './sms.service';

const prisma = new PrismaClient();

export const userService = {
    sendOtpToUser: async (mobileNumber: string) => {
        try {
            let user = await prisma.user.findUnique({
                where: { mobileNumber },
            });
            const otp = Math.floor(100000 + Math.random() * 900000).toString();
            const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
            if (!user) {
                user = await prisma.user.create({
                    data: {
                        mobileNumber,
                        otp,
                        otpExpiry,
                    },
                });
            } else {
                await prisma.user.update({
                    where: { mobileNumber },
                    data: { otp, otpExpiry },
                });
            }

            const message = smsService.sendSms(mobileNumber, otp);
            console.log(`Message sent: ${message}`);
            return message;
        } catch (error) {
            console.error('Error sending SMS:', error);
            throw error;
        }
    },
};
