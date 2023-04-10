const calcularImc = require("./moduloImc");

const calculadora = require("./moduloCalculadora");
const conversores = require("./moduloConversores");
const autenticar = require("./login");

// const resultado = calcularImc(87.5, 1.88);
console.log(calcularImc(83.8, 1.83));

console.log(conversores.celsiusFahrenheit(35));
console.log(conversores.fahrenheitCelsius(35));
console.log(autenticar("Alice@batata.com", 123456));