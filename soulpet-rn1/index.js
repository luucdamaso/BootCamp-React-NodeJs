// Vai disponibilizar o uso de variáveis de ambiente
require("dotenv").config();
const express = require("express");

// Configração do App
const app = express();
app.use(express.json()); // Possibilitar transitar dados usando JSON

// Configuração do Bando de Dados
const {connection, authenticate} = require("./database/database")
authenticate(connection); // efetivar a conexão
//Configurar o model da aplicação
const Cliente = require("./database/cliente")
const Endereco = require("./database/endereco")
// Definição de rotas
app.get("/clientes", async(req, res) => {
   const listaClientes = await Cliente.findAll();
   res.json(listaClientes);
});

app.get("/clientes/:id", async(req, res) => {
    // SELECT * FROM clientes WHERE id = ;
    const cliente = await Cliente.findOne({ where: {id: req.params.id}, include: [Endereco] });
    if(cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({message: "Usuário não encontrado."});
    }
})

app.post("/clientes", async(req, res) => {
    const { nome, email, telefone, endereco } = req.body;
    
    try {
        // Dentro de 'novo' estará o objeto criado
        const novo = await Cliente.create(
            { nome, email, telefone, endereco }, {include: [Endereco]}// Permite inserir cliente e endereço em um comando
            );
        res.status(201).json(novo);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Um erro aconteceu!"})
    }
});

// Escuta de eventos (Listen)
app.listen(3000, () => {
    // Gerar as tabelas a partir do model
    // Force = apaga tudo e recria as tabelas
    connection.sync({force: true});
    console.log("Servidor rodando em http://localhost:3000");
});