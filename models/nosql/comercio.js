const mongoose = require("mongoose");

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
        id: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Comercio", ComercioScheme);