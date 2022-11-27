const joi = require("joi");

const schema = joi.object({
    cityId: joi.any(),
    name: joi.string().required().messages({
        "string.empty": "Name is required",
        "any.required": "Name is required",
    }),
    photo: joi.array().items(joi.string().uri()).length(3).required().messages({
        "any.required": "The field 'photo' is required, please enter it",
        "string.empty": "The field 'photo' is required, please enter it",
        "string.base": "Enter the photo of the itinerary please",
        "array.length": "The field 'photo' must have 3 photos",
    }),
    description: joi.string().required().messages({
        "string.empty": "The field 'description' is required, please enter it",
        "any.required": "The field 'description' is required, please enter it",
    }),
    price: joi.number().min(0).required().messages({
        "number.base": "The field 'price' must be a number",
        "number.empty": "The field 'price' is required, please enter it",
        "any.required": "The field 'price' is required, please enter it",
        "number.min": "The field 'price' must be greater than or equal to 0",
    }),
    duration: joi.number().min(0).required().messages({
        "number.base": "The field 'duration' must be a number",
        "number.empty": "The field 'duration' is required, please enter it",
        "any.required": "The field 'duration' is required, please enter it",
        "number.min": "The field 'duration' must be greater than or equal to 0",
    }),
    userId: joi.any()
});

module.exports = schema;    