const joi = require('joi');

const schema = joi.object({
        name: joi.string().required().min(3).max(50).messages({
                'string.empty': 'Name is required',
                'string.min': 'Name must be at least 3 characters long',
                'string.max': 'Name must be at most 50 characters long',
                'any.required': 'Name is required',
        }),
        photo: joi.array().min(3).items(joi.string().required().uri()).required().messages({
                'any.required': 'Photo is required',
                'string.empty': 'Photo is required',
                'string.uri': 'Photo must be a valid URL'
        }),
        capacity: joi.number().required().min(20).max(1000).messages({
                'number.empty': 'Capacity is required',
                'number.min': 'Capacity must be at least 20',
                'number.max': 'Capacity must be at most 1000',
                'any.required': 'Capacity is required',
        }),
        cityId: joi.any().messages({
                'any.required': 'City is required',
        }),
        userId: joi.any().messages({
                'any.required': 'User is required',
        }),
});

module.exports = schema;