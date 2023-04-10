const http = require("http");
const os = require("os")
const fs = require("fs")
const CPF = require("cpf")

const host = "localhost";
const porta = 3000;
const cpfAleatorio = CPF.generate();

const servidor = http.createServer((requisicao, resposta) => {
    resposta.write("<h1>Hello, World!</h1>\n");
    resposta.write(`<p>${os.platform()}</br>${os.type()}</br>${os.version()}</br>${os.uptime()}</br>${os.freemem()}</br>${os.totalmem()}</br>${os.cpus().length}</br>${os.homedir()}</br>${os.hostname()}</br></p>`);
    resposta.write(`${cpfAleatorio}`);
    resposta.end();
});

servidor.listen(porta, host);