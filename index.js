require("dotenv").config();

// imports
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { connectToDatabase } = require("./mongodb");

const app = express();
const session = require("express-session");

// porta na qual o servidor vai rodar
var port = process.env.PORT || 3333;

app.use(cors()); // permitindo acesso externo
app.use(express.json());
app.use(routes);
app.use(
  session({
    secret: "SMvPKD06S6CbpOQJyZaWXkYafJp2xMhcFUU73E2yRoh61WHVFt",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json()); // configuradno respostas JSON
app.listen(port, () => console.log("Servidor online na porta", port)); // abrindo a porta para conexões

connectToDatabase(); //conectando com o banco de dados
