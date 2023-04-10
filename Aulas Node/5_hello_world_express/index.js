const express = require("express");

//Define uma aplicação backend em Express
// Recursos pré-configurados
const app = express();

app.get("/", (requisicao, resposta) => {
    resposta.send("<h1>Hello, World!</h1>");
});

// Inicializa a escuta de requisição do servidor
app.listen(3000);