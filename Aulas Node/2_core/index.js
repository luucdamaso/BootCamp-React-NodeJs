//Core modules = modulos embutidos 

// Módulo operational system (os)
const { log } = require("console");
const os = require("os")

console.log(os.arch());
console.log(os.platform());
console.log(os.type());
console.log(os.version());
console.log(os.uptime());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus().length);
console.log(os.homedir());
console.log(os.hostname());

// Módulo fs = filesysten
const fs = require("fs");

fs.writeFileSync("./batata.txt", "Batata é bom demais")

const arquivo = fs.readFileSync("./batata.txt")
console.log(arquivo.toString());

fs.writeFileSync(`./sistema.txt`, `${os.type()}\n${os.version()}`)