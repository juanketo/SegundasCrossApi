const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");
const dbConexion = async() => {
    try{
        await mongoose.connect(process.env.MONGOURI);
        console.log("Se conecto a la base de datos")
    }catch{
        console.log(error);
        throw new Error("No se conecto a la Base de Datos");
    }
}
module.exports = dbConexion;