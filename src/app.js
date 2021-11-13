// Importando Express e Atribuindo Variáveis de execução

const express = require("express");
const app = express();
const port = 4010;
const router = require("./routes");

// Importando Módulos necessários 

const path = require("path");
const logger = require("morgan");


// Definindo a View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

// Morgan para permitir logs

app.use(logger("dev"));

// Habilitando JSON e Formulários
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Rotas
app.use(router);

// Definindo em qual porta o servidor será inicializado

app.listen(port, ()=> {
    console.log(`O Servidor está rodando na porta ${port}`);
})