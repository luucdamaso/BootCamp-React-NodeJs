// Operadores lógicos: NOT (!), AND (&&), OR(||)

// Operador NOT (!) = Inverte o valor lógico
let ligado = true;
let desligado = !ligado;

/*
    Tabela(NOT)
    !true = false
    !false = true
*/

// Operador AND (&&) = Todas as expressões tem que ser true

let gasolinaTanque = 1;
let naReserva = gasolinaTanque < 5;
let podeAbastecer = desligado && naReserva;
let podeViajar = ligado && !naReserva;
let ficaEmCasa = !podeViajar;

/*
    Tabela Verdade (E)
    true && true = true
    true && false = false
    false && true = false
    false && false = false
*/

// Operador OR (||) = Basta uma expressão ser true

let taPodendo = podeViajar || podeAbastecer;

/* 
    Tabela Verdade (OU)
    true || true = true
    true || false = true
    false || true = true
    false || false = false
*/

let idade = 100;
let podeBeber = idade >= 18 && idade <= 59; // De 18 até 59 anos
let podeDirigir = idade >= 18 || idade <= 59;
console.log(podeDirigir);

let media = 8.5;
let saberIngles = true;
let aprovado = media >= 7;

// O candidato será contratado caso esteja aprovado e saiba inglês

let contratado = aprovado && saberIngles;
console.log(aprovado || saberIngles);

let x = 5;
let y = 10;

let expressao = x > 3 && y < 20; // true
let expressao2 = y != 20 || x >= 5; // true
let expressao3 = y === 100 || x < 10; // true
let expressao4 = !x === 5; // false

// Estruturas condicionais (IF-ELSE)

/*
    if (condição) {
        //faz algo se a condição for verdadeira
    }
*/

let idadeUsuario = 17;

if (idadeUsuario >= 18) {
  // Executa se for verdade
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}

let nota = 6.5;

if (nota >= 7) {
  // está aprovado
  console.lob(`Você esta aprovado com nota ${nota}`);
} else {
  // não esta aprovado
  console.log(`Você esta reprovado. Tente de novo`);
}

let numero = 0;

if (numero > 0) {
  console.log(`${numero} é positivo!`);
} else if (numero < 0) {
  console.log(`${numero} é negativo`);
} else {
  // se nenuma das condições acima for verdadeira
  console.log(`O número é zero`);
}

if (idadeUsuario >= 18 && idadeUsuario <= 59) {
  console.log(`Você tem ${idadeUsuario} então pode beber! Com moderação!`);
} else {
  console.log(`Você tem ${idadeUsuario} então não pode beber.`);
}
