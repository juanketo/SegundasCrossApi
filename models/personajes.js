const {model, Schema} = require("mongoose");
const PersonajesSchema = new Schema({
    
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    sexo:{
        type: String,
        required: true,
    },
    especie: {
        type: String,
        required: true
    },
    ocupacion: {
        type: String,
        required: true,
    },
    reino: {
        type: String,
        required: true,
    },
});

module.exports = model("personaje", PersonajesSchema)