const Reino = require("../models/reinos");

const obtenerReinos = async(req, res) =>{
    try{
        const reinos = await Reino.find({});
        if (reinos.length === 0) {
            return res.status(404).json({
                ok: false,
                
                msg: "No existen reinos en la base de datos"
            })
        }
        return res.json({
            ok: true,
            msg: "Reinos obtenidos satisfactoriamente",
            reinos: reinos
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
           
            msg: "Error en el servidor"
        })
    }
}

const obtenerReinoPorId = async(req, res) => {
    try {
        const id = req.params.id;
        const reino = await Reino.findById(id);
        if(!reino){
            return res.json({
                ok: true,
                msg: "no hay reino con ese id"
            })
        }
        return res.json({
            ok: true,
            msg: "reino obtenido",
            reino: reino
        })
    }catch (error){
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: "error en el servidor"
            })
        }
}

const agregarReino = async(req, res) => {
    try {
        const reinos = req.body
        const nuevoReino = new Reino(reinos)
        await nuevoReino.save();

        return res.json({
            ok: true,
            msg: "Se ha agregado con exito!",
            reinos: nuevoReino
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}

const actualizarReino = async(req, res) => {
    try {
        const id = req.params.id;
        const reinos = await Reino.findById(id);

        if(!reinos){
            return res.status(404).json({
                ok: false,
                msg: "no hay reinos con ese id"
            })
        }
        const reinoActualizado = await Reino.findByIdAndUpdate(id, req.body)
        
        return res.json({
            ok: true,
            msg: "reino actualizado",
            reinos: reinoActualizado
        })
    }catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}

const eliminarReino = async(req, res) => {
    try {
        const id = req.params.id;
        const reinos = await Reino.findById(id);

        if(!reinos){
            return res.status(404).json({
                ok: false,
                msg: "no hay un reino con ese id"
            })
        }
        const reinoEliminado = await Reino.findByIdAndDelete(id)
        return res.json({
            ok: true,
            msg: "reino eliminado",
            reinos: reinoEliminado
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
    obtenerReinoPorId,
    obtenerReinos,
    agregarReino,
    actualizarReino,
    eliminarReino
}