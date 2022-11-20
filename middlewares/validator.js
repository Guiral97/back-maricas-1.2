const validator = (schema) => {
    return (req, res, next) => {
        const data = schema.validate(req.body, { abortEarly: false });
        if (data.error) {
            return res.status(400).json({
                successs: false,
                message: data.error.details.map((err) => err.message),
            });
        }
        next();
    }
}

module.exports = validator;