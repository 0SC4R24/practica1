/**
 * Middleware function to validate the API key in the request headers.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'Api-publica-123') {
            next();
        } else {
            res.status(403).send("api key no es correcto");
        }
    } catch (err) {
        res.status(403).send(err);
    }
}

module.exports = customHeader;