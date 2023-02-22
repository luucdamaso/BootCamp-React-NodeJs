// Dia 14.02
//Variáveis e operadores

let nomeCompleto; // camel case

nomeCompleto = "Lucas Damaso";  // atribuição

// console.log("batata");
// console.log(nomeCompleto);
// nomeCompleto = "Layza Damaso"  // re-atribuição (redefinir)
// console.log(nomeCompleto);

let idade = 19;
idade = 25;

// console.log(idade);

// concatenação
// console.log("Meu nome é " + nomeCompleto + " e tenho " + idade + " anos");

//const = define uma constante = impede a re-atribuição
const cpf = "000.000.000-00"
//cpf = "batata";

//Tipos
let golsSofridos = 3; //numero = number
let chanceDerrota = 0.55; // numero decimal
let posseBola = 33.57; // 33,57
let nomeTime = "Valência"; // string
let patrocinio; //undefined = não tem valor definido
patrocinio = "Soulcode";
// boolean = 2 valores possiveis (true e false)
let timeGanhou = true; //"Lê: É verdade que o timeGanhou"
let timePerdeu = false; //"Lê: É falso que o timePerdeu"

// Operadores aritméticos
let soma = 200 + 100;
let sub = 100 - 55;
let mult = 5 * 7;
let div = 400/25;
let resto = 8%3;
let expressao = (soma + sub) * div;
let expressao2 = mult - div / resto;
// console.log("A soma é: " + soma);
// console.log("A subtração é: " + sub);
// console.log("A multiplicação é: " + mult);
// console.log("A divisão é: " + div);
// console.log("O resto da divisão é: " + resto);
// console.log(`O resultado da expressao é ${expressao}`);// Template strings
// console.log(`O resultado da expressao é ${expressao2}`);

let i = 0;
//i = i + 1; // O novo valor de i é 0 + 1 = 1
//i = i + 1; // O novo valor de i é 1 + 1 = 2
//i = i + 1; // o novo valor de i é 2 + 1 = 3
//i = i + 1; // o novo valor de i é 3 + 1 = 4
i++; // i = i + 1
//console.log(i);
i++; // altera o valor de i somando i + 1 = incremento
//console.log(i);
i--; // i = i - 1 = decremento
//console.log(i);

let a = 3;
let b = 5;

//console.log(a > b); // A é maior que B?
//console.log(a < b); // A é menor que B?
//console.log(b >= a); // B é maior ou igual a A?
//console.log(a <= b); // A é menor ou igual B?
//console.log(a == b); // A é IGUAL a B?
//console.log(a != b); // A é diferente de B?

//console.log(a == "3"); // A é igual a "3"?
//console.log(a === "3"); // A é estritamente igual a "3"?
//console.log(a !== "3"); // A é estritamente diferente a "3"?
// O operador === compara VALOR e TIPO

let alt = 1.83;
let pes = 80;
console.log(`Meu IMC é ${(pes / (alt*alt)).toFixed(2)}`)

let r1 = 3;
let pi1 = 3.14;
console.log(`O valor da área do circulo é ${(pi1*r1*r1).toFixed(2)}`);

let raio = 25;
let pi2 = 3.14;
console.log(`O valor da circuferência é ${(2*pi2*raio).toFixed(2)}`)

let cel = 27
console.log(`Sua temperatura em fahrenheit é: ${cel*1.8+32}`)