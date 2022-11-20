const joi = require('joi');

const schema = joi.object({
        name: joi.string().required().min(3).max(20).messages({
                'string.empty': 'Name is required',
                'string.min': 'Name must be at least 3 characters long',
                'string.max': 'Name must be at most 20 characters long',
                'any.required': 'Name is required',
                }),
        continent: joi.string().required().min(3).max(20).messages({
                'string.empty': 'Continent is required',
                'string.min': 'Continent must be at least 3 characters long',
                'string.max': 'Continent must be at most 20 characters long',
                'any.required': 'Continent is required',
                }),
        photo: joi.string().required().uri().messages({
                'string.empty': 'Photo is required',
                'string.uri': 'Photo must be a valid URL',
                'any.required': 'Photo is required',
                }),
        population: joi.number().required().min(25000).max(15000000).messages({
                'number.empty': 'Population is required',
                'number.min': 'Population must be at least 25000',
                'number.max': 'Population must be at most 15000000',
                'any.required': 'Population is required',
                }),
        userId: joi.any().messages({
                'any.required': 'User is required',
                }),
});

module.exports = schema;