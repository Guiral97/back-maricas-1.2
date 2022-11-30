const joi = require("joi");

const schema = joi.object({
    itineraryId: joi.string().required().messages({
        "string.empty": "The field 'itineraryId' is required, please enter it",
        "any.required": "The field 'itineraryId' is required, please enter it",
    }),
    name: joi.string().required().messages({
        "string.empty": "Name is required",
        "any.required": "Name is required",
    }),
    icon: joi.string().uri().required().messages({
        "string.empty": "Icon is required",
        "any.required": "Icon is required",
    }),
    iconBack: joi.string().uri().required().messages({
        "string.empty": "IconBack is required",
        "any.required": "IconBack is required",
    }),
    userId: joi.array(),
});

module.exports = schema;    