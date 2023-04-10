const os = require("os")
const fs = require("fs")
const CPF = require("cpf")

console.log(CPF.generate());
console.log(CPF.format("75135985202"));
console.log(CPF.isValid("39581997862"));

let cpfs = '';
for (let i = 0; i < 1000; i++) {
  cpfs += CPF.generate() + '\n';
}

// fs.writeFileSync('./cpfAleatorios.txt', cpfs);

const arquivo = fs.readFileSync("./cpfAleatorios.txt")
console.log(arquivo.toString());