require("dotenv").config();
const express = require("express");
const dbConexion = require("./database/config");
const cors = require("cors");

dbConexion()
const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/personajes", require("./routes/personajes"))
app.use("/api/reinos", require("./routes/reinos"))
app.listen(process.env.PORT, () => {
    console.log(`App escuchando en http://localhost:${process.env.PORT}`);
})