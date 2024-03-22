/**
 * Handles HTTP errors by sending an error response with the specified message and status code.
 *
 * @param {object} res - The response object.
 * @param {string} message - The error message to send.
 * @param {number} [code=403] - The HTTP status code to send. Defaults to 403 (Forbidden).
 */
const handleHttpError = (res, message, code = 403) => {
    res.status(code).send(message);
}

module.exports = { handleHttpError };