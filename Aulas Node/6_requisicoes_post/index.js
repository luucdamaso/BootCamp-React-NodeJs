const express = require("express");

// Configurações do app
const app = express();
app.use(express.json()); // Lê o body no formato JSON

// Rotas
app.post("/enviar", (req, res) => {
    //req.body representa os dados enviados da requisição POST
    console.log(req.body);
    const {nome, email, senha, frutasFavoritas} = req.body;
    res.json(`Recebido ${nome}, ${email}, ${senha}, ${frutasFavoritas}`)
});

// IMC/Calcular
app.post("/imc", (req, res) => {
    const {peso, altura} = req.body;
    if ((peso !== undefined)&&(altura !== undefined)) {
        const imc = peso/altura**2;
        res.json({resultado: (imc).toFixed(2)});
    } else {
        res.status(400).json({message: "Dados inválidos para calcular."})
    }
})

// Escuta das requisições
app.listen(3000, () => {
    console.log("servidor rodando em http://localhost:3000/");
});