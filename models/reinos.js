const {model, Schema} = require("mongoose");
const ReinosSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    gobernante: {
        type: String,
        required: true,
    },
    ubicacion: {
        type: String,
        required: true,
    },
});

module.exports = model("Reinos", ReinosSchema)