require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Configurações de Banco de Dados
mongoose.connect(process.env.MONGODB_URL);
const Tarefa = require("./models/tarefa")

// Rotas
const tarefasRoutes = require("./routes/tarefas");
app.use(tarefasRoutes)

// Escuta de eventos
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
  });

// 1) Conexão com Mongo usando URL
// 2) Criar o modelo de Tarefa/
// 3) AS rotas Get, POST, PUT e DELETE