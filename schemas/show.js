const joi = require("joi");

const schema = joi.object({
    hotelId: joi.any(),
    name: joi.string().required().messages({
        "string.empty": "Name is required",
        "any.required": "Name is required",
    }),
    description: joi.string().required().messages({
        "string.empty": "The field 'description' is required, please enter it",
        "any.required": "The field 'description' is required, please enter it",
    }),
    photo: joi.string().required().uri().messages({
        'string.empty': 'Photo is required',
        'string.uri': 'Photo must be a valid URL',
        'any.required': 'Photo is required',
        }),
    price: joi.number().min(0).required().messages({
        "number.base": "The field 'price' must be a number",
        "number.empty": "The field 'price' is required, please enter it",
        "any.required": "The field 'price' is required, please enter it",
        "number.min": "The field 'price' must be greater than or equal to 0",
    }),
    date: joi.date().required().messages({
        "date.base": "The field 'date' must be a date",
        "date.empty": "The field 'date' is required, please enter it",
        "any.required": "The field 'date' is required, please enter it",
    }),
    userId: joi.any()
});

module.exports = schema;    