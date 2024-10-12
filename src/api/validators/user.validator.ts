import Joi from 'joi';

const userSchema = Joi.object({
    userId: Joi.number().optional(), // Optional as it may not be provided during creation
    firstName: Joi.string().trim().required().messages({
        'string.empty': 'First name is required',
        'any.required': 'First name is required',
    }),
    lastName: Joi.string().trim().required().messages({
        'string.empty': 'Last name is required',
        'any.required': 'Last name is required',
    }),
    email: Joi.string().email().trim().required().messages({
        'string.email': 'Email must be valid',
        'string.empty': 'Email is required',
        'any.required': 'Email is required',
    }),
    mobile: Joi.string().trim().required().messages({
        'string.empty': 'Mobile number is required',
        'any.required': 'Mobile number is required',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': 'Password must be at least 6 characters long',
        'string.empty': 'Password is required',
        'any.required': 'Password is required',
    }),
    emailVerified: Joi.boolean().default(false), // Default to false if not provided
    mobileVerified: Joi.boolean().default(false), // Default to false if not provided
    college: Joi.string().trim().required().messages({
        'string.empty': 'College is required',
        'any.required': 'College is required',
    }),
});

// Export the schema
export default userSchema;
