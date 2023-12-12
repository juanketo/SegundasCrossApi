const Personaje = require("../models/personajes");

const obtenerPersonajes = async(req, res) =>{
    try{
        const personajes = await Personaje.find({});
        if (personajes.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: "No existen personajes en la base de datos"
            })
        }
        return res.json({
            ok: true,
            msg: "Personajes obtenidos satisfactoriamente",
            personajes: personajes
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}

const obtenerPersonajePorId = async(req, res) => {
    try {
        const id = req.params.id;
        const personaje = await Personaje.findById(id);
        if(!personaje){
            return res.json({
                ok: true,
                msg: "no hay personaje con ese id"
            })
        }
        return res.json({
            ok: true,
            msg: "personaje obtenido",
            personaje: personaje
        })
    }catch (error){
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: "error en el servidor"
            })
        }
}

const agregarPersonaje = async(req, res) => {
    try {
        const personaje = req.body
        const nuevoPersonaje = new Personaje(personaje)
        await nuevoPersonaje.save();

        return res.json({
            ok: true,
            msg: "Se ha agregado con exito!",
            personaje: nuevoPersonaje
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}

const actualizarPersonaje = async(req, res) => {
    try {
        const id = req.params.id;
        const personaje = await Personaje.findById(id);

        if(!personaje){
            return res.status(404).json({
                ok: false,
                msg: "no hay personajes con ese id"
            })
        }
        const personajeActualizado = await Personaje.findByIdAndUpdate(id, req.body)
        
        return res.json({
            ok: true,
            msg: "personaje actualizado",
            personaje: personajeActualizado
        })
    }catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}

const eliminarPersonaje = async(req, res) => {
    try {
        const id = req.params.id;
        const personaje = await Personaje.findById(id);

        if(!personaje){
            return res.status(404).json({
                ok: false,
                msg: "no hay personajes con ese id"
            })
        }
        const personajeEliminado = await Personaje.findByIdAndDelete(id)
        return res.json({
            ok: true,
            msg: "personaje eliminado",
            personaje: personajeEliminado
        })
    }catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}

module.exports = {
    obtenerPersonajePorId,
    obtenerPersonajes,
    agregarPersonaje,
    actualizarPersonaje,
    eliminarPersonaje
}