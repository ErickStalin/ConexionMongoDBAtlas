require('dotenv').config()
const connection = require("./database.js");
const express = require("express");

const app = express();

// Configurar las rutas
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.get("/autor", (req, res) => {
  res.send("¡Hola! ¿Cómo estás?");
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor web iniciado en el puerto ${port}`);
});

connection();
