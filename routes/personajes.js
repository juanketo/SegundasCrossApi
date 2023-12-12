const {Router} = require("express");
const { obtenerPersonajes, agregarPersonaje, actualizarPersonaje, eliminarPersonaje, obtenerPersonajePorId } = require("../controllers/personajes");

const router = Router();

router.get("/", obtenerPersonajes);

router.get("/busqueda/:id", obtenerPersonajePorId);

router.post("/", agregarPersonaje);

router.put("/:id", actualizarPersonaje);

router.delete("/:id", eliminarPersonaje);

module.exports = router;