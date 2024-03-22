const { comerciosModel } = require('../models');
const { matchedData } = require('express-validator');
const { handleHttpError } = require('../utils/handleError');

/**
 * Retrieves items from the comerciosModel and sends the data as a response.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the response is sent.
 */
const getItems = async (req, res) => {
    try {
        const data = await comerciosModel.find({});

        if (req.query.orderBy === "cif") {
            data.sort((a, b) => {
                if (a.cif < b.cif) return -1;
                if (a.cif > b.cif) return 1;
                return 0;
            })
        }
        
        res.send(data);
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEMS", 403);
    }
}

/**
 * Retrieves an item from the comerciosModel based on the provided CIF.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the item is retrieved and sent in the response.
 */
const getItem = async (req, res) => {
    try {
        const { cif } = matchedData(req);
        const data = await comerciosModel.findOne({cif});
        res.send(data);
    } catch (err) {
        handleHttpError(res, "ERROR_GET_ITEM");
    }
}

/**
 * Creates a new item.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the item is created.
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await comerciosModel.create(body);
        res.send(data);
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEM");
    }
}

/**
 * Updates an item in the comercios collection.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the item is updated.
 */
const updateItem = async (req, res) => {
    try {
        const { cif, ...body } = matchedData(req);
        const data = await comerciosModel.findOneAndUpdate({cif}, body);
        res.send(data);
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_ITEM");
    }
}

/**
 * Deletes an item from the comerciosModel collection.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the item is deleted.
 */
const deleteItem = async (req, res) => {
    try {
        const { cif } = matchedData(req);

        let data;
        if (req.query.deleteBy === "physical") data = await comerciosModel.deleteOne({cif});
        else data = await comerciosModel.delete({cif});

        res.send(data);
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEM");
    }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };