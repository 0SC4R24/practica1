const express = require('express');
const router = express.Router();


const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/comercios');
const { validatorCreateItem, validatorGetItem, validatorGetItems, validatorUpdateItem, validatorDeleteItem } = require('../validators/comercios');

/**
 * Route for getting all items.
 * @name GET /
 * @function
 * @memberof module:routes/comercios
 * @param {function} validatorGetItems - Middleware function for validating the request parameters.
 * @param {function} getItems - Controller function for handling the route.
 */
router.get("/", validatorGetItems, getItems);

/**
 * Route for getting a specific item.
 * @name GET /:cif
 * @function
 * @memberof module:routes/comercios
 * @param {function} validatorGetItem - Middleware function for validating the request parameters.
 * @param {function} getItem - Controller function for handling the route.
 */
router.get("/:cif", validatorGetItem, getItem);

/**
 * Route for creating a new item.
 * @name POST /
 * @function
 * @memberof module:routes/comercios
 * @param {function} validatorCreateItem - Middleware function for validating the request parameters.
 * @param {function} createItem - Controller function for handling the route.
 */
router.post("/", validatorCreateItem, createItem);

/**
 * Route for updating an existing item.
 * @name PUT /:cif
 * @function
 * @memberof module:routes/comercios
 * @param {function} validatorUpdateItem - Middleware function for validating the request parameters.
 * @param {function} updateItem - Controller function for handling the route.
 */
router.put("/:cif", validatorUpdateItem, updateItem);

/**
 * Route for deleting an item.
 * @name DELETE /:cif
 * @function
 * @memberof module:routes/comercios
 * @param {function} validatorDeleteItem - Middleware function for validating the request parameters.
 * @param {function} deleteItem - Controller function for handling the route.
 */
router.delete("/:cif", validatorDeleteItem, deleteItem);

module.exports = router;