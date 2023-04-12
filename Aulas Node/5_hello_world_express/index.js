const express = require("express");
const fs = require("fs");
const cpf = require("cpf");
const { log } = require("console");
const authUsuarios = require("./usuarios.js");
const usuarios = require("./usuarios.js");

//Define uma aplicação backend em Express
// Recursos pré-configurados
const app = express();

app.get("/", (requisicao, resposta) => {
  resposta.send("<h1>Hello, World!</h1>");
});

app.get("/teste", (req, res) => {
  // Manipulador de rota
  res.send("<p>O que deseja amigo?</p>");
});

app.get("/inicio", (req, res) => {
  const arquivo = fs.readFileSync("./inicio.html");
  res.send(arquivo.toString());
});

app.get("/ajuda", (req, res) => {
  const arquivo = fs.readFileSync("./ajuda.html");
  res.send(arquivo.toString());
});
// Parametro de caminho/rota
app.get("/funcionarios/:cod", (req, res) => {
  // req.params = guarda todos os paramentros de rota
  // const cpf = req.params.cpf;
  const { cod } = req.params;
  if (cpf.isValid(cod)) {
    // Por padrão o resultado é 200
    res.send(`Funcionário encontrado: ${cod}`);
  } else {
    res.status(400).send(`O CPF é inválido`);
  }
});

app.get("/pessoas/:nome/:empresa", (req, res) => {
  const { nome, empresa } = req.params;
  res.send(`${nome} é um colaborador da  ${empresa}`);
});

app.get("/imc/:peso/:altura", (req, res) => {
  const alt = parseFloat(req.params.altura);
  const pes = parseFloat(req.params.peso);
  const imc = pes / (alt * alt);
  res.send(`<p>Seu IMC é: ${imc.toFixed(2)}</p>`);
});

app.get("/cpfs/:numero", (req, res) => {
  const numero = Number(req.params.numero);
  //   let cpfs = "";
  //   for (let i = 0; i < numero; i++) {
  //     cpfs += cpf.generate() + "</br>";
  //   }
  //   res.send(`${cpfs}`);
  for (let i = 0; i < numero; i++) {
    res.write(`<p>${cpf.generate()}</p>`);
  }
  res.end();
});

app.get("/youtube", (req, res) => {
  const { canal, video } = req.query;
  res.send(`Canal do Youtube: ${canal}. Video: ${video}`);
});

// Params = mais restrito a url
// /cpfs/5

//Query = mais flexível, mas suja mais a url
// /cpfs?numero=5

app.get("/home", (req, res) => {
  const { nome } = req.query;
  console.log();
  if (nome) {
    // Truthy values
    res.send(`Bem vindo`);
  } else {
    res.status(400).send(`Nome não definido`);
  }
});

app.get("/soma", (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  console.log();
  if (num1 && num2) {
    res.send(`${num1 + num2}`);
  } else {
    res.status(400).send(`Numero não definido`);
  }
});

app.get("/linguagem", (req, res) => {
  const { lang } = req.query;
  console.log();
  if (lang === "en") {
    res.send(`Welcome`);
  } else if (lang === "pt-br") {
    res.send(`Bem-vindo`);
  } else {
    res.status(400).send(`Linguagem não definido/suportado`);
  }
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/novo", (req, res) => {
  const { nome, email } = req.query;
  const novoUsuario = { nome: nome, email: email };
  usuarios.push(novoUsuario);
  res.status(201).json({ message: "Usuário adicionado" });
});

app.get("/usuarios/:index", (req, res) => {
  const index = Number(req.params.index);
  const usuarioEncontrado = usuarios[index];
  if (usuarioEncontrado) {
    res.json(usuarioEncontrado);
  } else {
    res.status(404).json({ mensagem: "Usuário não encontrado" });
  }
});

//HOMEWORK

// Exercício I: Crie uma rota "/usuarios/email", e filtre o usuário com o email fornecido via parâmetros de rota. Caso não encontre, responda com 404.
// => /usuarios/email/gabriel.braga@soulcode.com

app.get("/usuarios/email/:email", (req, res) => {
  const { email } = req.params;
  let usuarioValido = authUsuarios.find((el) => el.email === email);
  if (usuarioValido !== undefined) {
    res.json(`${usuarioValido.nome} Seja bem-vindo(a)`);
  } else {
    res.status(400).json(`Email inválido`);
  }
});

// Exercício II: Crie uma rota "/usuarios/novo", e por meio dos parâmetros de consulta colete nome e email para inserir no array de usuários.
// /usuarios/novo?email=jr@email.com&nome=José

// Inicializa a escuta de requisição do servidor
app.listen(3000, () => {
  //Roda sempre que o servidor incia com sucesso
  console.log("Servidor rodando em http://localhost:3000/");
});

// GET = leitura de dados
// POST = escrita de dados
// PUT = atualização de dados
// DELETE = remoção de dados
