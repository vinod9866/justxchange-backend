import { PrismaClient } from '@prisma/client';
import { smsService } from './sms.service';
import { IVerifyOtp } from '../interfaces';
import { IUser } from '../interfaces/user';
import { generateToken } from './auth.service';

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

    verifyOtp : async (body: IVerifyOtp) => {
        const { mobileNumber, otp } = body;
      
        try {
            const user = await prisma.user.findUnique({where: { mobileNumber }});

            if(!user){
                throw new Error("Mobile number not found")
            }
      
            if (user.otp !== otp) {
                throw new Error("Ivalid Otp");
            }
      
            if (user.otpExpiry && user.otpExpiry < new Date()) {
                throw new Error('OTP has expired.');
            }
      
            await prisma.user.update({
                where: { mobileNumber },
                data: { mobileVerified: true, otp: null, otpExpiry: null },
            });
      
            return 'OTP verified successfully.'
        } catch (error) {
            console.error('Error verifying OTP:', error);
            throw error;
        }
    },

    saveUser : async (body: IUser) => {      
        try {
            const user = await prisma.user.findUnique({where: { mobileNumber : body.mobileNumber }});

            if(!user){
                throw new Error("Mobile number not found")
            }
      
            if (!user.mobileVerified) {
                throw new Error("Mobile number not verified");
            }
      
            await prisma.user.update({
                where: { mobileNumber: body.mobileNumber },
                data: { firstName: body.firstName, lastName: body.lastName, college: body.college, email: body.email },
            });

            const token = generateToken(user.userId);
      
            return { token }
        } catch (error) {
            console.error('Error saving user:', error);
            throw error;
        }
    },
      
};
