/**
 * Object containing the models for the application.
 * @typedef {Object} Models
 * @property {Object} comerciosModel - The comercios model.
 */
const models = {
    comerciosModel: require("./nosql/comercios")
}

module.exports = models;