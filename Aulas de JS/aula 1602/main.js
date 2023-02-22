// Estrutura de seleção

let lang = "eng";

// if(lang === "pt") {
//     console.log("Olá, mundo!");
// } else if (lang === "es") {
//     console.log("Hola, Mundo!");
// } else if (lang === "eng") {
//     console.log("Hello, World!");
// } else {
//     console.log(`Não há suporte para o idioma ${lang}`)
// }

// switch-case = escolha-caso
switch(lang) {
    case "pt":
        console.log("Olá, Mundo!");
        break;
    case "es":
        console.log("Hola, Mundo!");
        break;
    case "eng":
        console.log("Hello, World!");
        break;
    default: //caso não encontre nenhuma
        console.log(`Não há suporte para o idioma ${lang}`)
}

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

let dia = 5;

switch(dia) {
    case 1:
        console.log(`Hoje é Domingo`)
    break;
    case 2:
        console.log(`Hoje é Segunda-feira`)
    break;
    case 3:
        console.log(`Hoje é Terça-feira`)
    break;
    case 4:
        console.log(`Hoje é Quarta-feira`)
    break;
    case 5:
        console.log(`Hoje é Quinta-feira`)
    break;
    case 6:
        console.log(`Hoje é sexta-feira`)
    break;
    case 7:
        console.log(`Hoje é Ssabado-feira`)
    break;
    default:
        console.log("Esse dia não existe.")
}

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.

/*let comida = "batata"
    switch(comida) {

    case "batata":
    console.log(`Humm, adoro`)
    break;
    case "carne":
    C
    break;
    case "chocolate":
    console.log(`Humm, adoro`)
    break;
    case "pizza":
    console.log(`As vezes`)
    break;
    case "sanduíche":
    console.log(`As vezes`)
    break;
    default:
        console.log("Quero não!")

    }*/

let comida = "churrasco"

switch(comida) {
    case 'batata':
    case 'carne':
    case 'chocolate':
        console.log(`Humm, adoro`);
    break;
    case 'pizza':
    case 'sanduiche':
        console.log(`As vezes`);
    break;
    default:
        console.log("Quero não!");
}

/*let comida = "abacate";

if (comida === "batata" || comida === "carne" || comida === "chocolate") {
  console.log("Hum, adoro!");
} else if (comida === "pizza" || comida === "sanduíche") {
  console.log("As vezes...");
} else {
  console.log("Quero não!");
}*/

// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

let num = 2;

if(num === 0) {
    console.log("O número é zero");
}else if (num % 2 === 0) {
    console.log("O número é par");
}/*if (num %2 !==0)*/else {
// neste caso é desnecessario
    console.log("O número é ímpar")
}

/*let number = 5;

if(number % 2 === 0) {
    console.log("O número é par");
} else{
    console.log('O número impar');
}*/

/*let a = 3
let b = 2

if (b % 2 == 0) {
    console.log("Número par")
} else {
    console.log("número impar")
}*/