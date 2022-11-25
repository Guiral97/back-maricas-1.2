const joi = require('joi');

const schema = joi.object({
        name: joi.string().required().min(3).max(20).messages({
                'string.empty': 'Name is required',
                'string.min': 'Name must be at least 3 characters long',
                'string.max': 'Name must be at most 20 characters long',
                'any.required': 'Name is required',
        }),
        photo: joi.array().min(3).items(joi.string().required().uri()).required().messages({
                'any.required': 'Photo is required',
                'string.empty': 'Photo is required',
                'string.uri': 'Photo must be a valid URL'
        }),
        capacity: joi.number().required().messages({
                'number.empty': 'Capacity is required',
                'any.required': 'Capacity is required',
        }),
        cityId: joi.string().required().messages({
                'any.required': 'City is required',
        }),
        userId: joi.string().required().messages({
                'any.required': 'User is required',
        }),
});

module.exports = schema;