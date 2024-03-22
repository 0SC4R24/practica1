const { validationResult } = require("express-validator");

/**
 * Validates the request using the validationResult function and handles the results.
 * If the validation fails, it sends a 403 status code and the error message.
 * If the validation passes, it calls the next middleware.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (error) {
        res.status(403)
        res.send(error);
    }
}

module.exports = validateResults;