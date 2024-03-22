const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete")

/**
 * Represents the schema for a Comercio.
 *
 * @typedef {Object} ComercioScheme
 * @property {string} nombre - The name of the comercio.
 * @property {string} cif - The CIF (tax identification number) of the comercio.
 * @property {string} direccion - The address of the comercio.
 * @property {string} email - The email address of the comercio.
 * @property {string} telefono - The phone number of the comercio.
 * @property {number} id_pagina - The ID of the associated pagina.
 * @property {Date} createdAt - The timestamp when the comercio was created.
 * @property {Date} updatedAt - The timestamp when the comercio was last updated.
 */
const ComercioScheme = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        cif: {
            type: String,
            required: true
        },
        direccion: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        telefono: {
            type: String,
            required: true
        },
        id_pagina: {
            type: Number,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

ComercioScheme.plugin(mongooseDelete, {overrideMethods: "all"})
module.exports = mongoose.model("Comercio", ComercioScheme);