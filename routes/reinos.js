const {Router} = require("express");
const { obtenerReinos, obtenerReinoPorId, agregarReino, actualizarReino, eliminarReino } = require("../controllers/reinos");

const router = Router();

router.get("/", obtenerReinos);

router.get("/busqueda/:id", obtenerReinoPorId);

router.post("/", agregarReino);

router.put("/:id", actualizarReino);

router.delete("/:id", eliminarReino);

module.exports = router;