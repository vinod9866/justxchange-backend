import Joi from 'joi';

export const otpVerifySchema = Joi.object({
    mobileNumber: Joi.string().min(3).required().messages({
        'string.empty': 'Mobile number is required',
        'any.required': 'Mobile number is required',
    }),
    otp: Joi.string().min(6).max(6).required().messages({
        'string.empty': 'Mobile number is required',
        'any.required': 'Mobile number is required',
    }),
});

