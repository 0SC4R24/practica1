const { check } = require('express-validator');
const validateResults = require("../utils/handleValidator");

/**
 * Array of validator for creating an item.
 * @type {Array<Function>}
 */
const validatorCreateItem = [
    check("nombre").exists().notEmpty(),
    check("cif").exists().notEmpty(),
    check("direccion").exists().notEmpty(),
    check("email").exists().notEmpty(),
    check("telefono").exists().notEmpty(),
    check("id_pagina").exists().notEmpty(),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

/**
 * Validates the request parameters for getting an item.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Function} - The next middleware function.
 */
const validatorGetItem = [
    check("cif").exists().notEmpty(),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

/**
 * Validator for getting items.
 *
 * @type {Array<Function>}
 */
const validatorGetItems = [
    check("orderBy").optional().isIn(["cif"]),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

/**
 * Validator for updating an item.
 *
 * @type {Array<Function>}
 */
const validatorUpdateItem = [
    check("cif").exists().notEmpty(),
    check("nombre").optional(),
    check("direccion").optional(),
    check("email").optional(),
    check("telefono").optional(),
    check("id_pagina").optional(),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

/**
 * Validates the request body for deleting an item.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {Function} - The next middleware function.
 */
const validatorDeleteItem = [
    check("cif").exists().notEmpty(),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports = { validatorCreateItem, validatorGetItem, validatorGetItems, validatorUpdateItem, validatorDeleteItem }