// Vai disponibilizar o uso de variáveis de ambiente
require("dotenv").config();
const express = require("express");

// Configração do App
const app = express();
app.use(express.json()); // Possibilitar transitar dados usando JSON

// Configuração do Bando de Dados
const {connection, authenticate} = require("./database/database")
authenticate(connection); // efetivar a conexão

// Definição de rotas

// Escuta de eventos (Listen)
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});