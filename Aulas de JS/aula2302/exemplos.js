//Aula 23.02
// Tópicos: funções

//Função = procedimento = método

//Sintaxe básica

function dizOla () { // declaração de função
    console.log("Hello, World!")
}

//Invocação = chamada
//dizOla ();

function exemplo01 () { // escopo de função
    let a = 5;
    let b = 10;
    console.log(`A soma é: ${a + b}`);
}

//exemplo01();

let num1 = 3;
let num2 = 5;

function exemplo2() {
    console.log(`A soma é ${num1 + num2}`);
}

// exemplo2 ();
num1 = 10;
num2 = 15;
// exemplo2();

// Parâmetros = entrada = o que a função precisa para executar
// = Informaçao dinâmica
// a e b são PARÂMETROS
function soma(a, b) {
    console.log(`A soma de ${a} + ${b} = ${a + b}`);
}

// soma(20, 75);

function calculadora(a, b, c) {
    console.log(`A soma é ${a + b + c}`);
    console.log(`A subtração é ${ a - b - c}`);
    console.log(`A multiplicação é ${a * b * c}`);
    console.log(`A divisão é ${a/b/c}`);
}

//chamada
// calculadora(10, 5, 2);

let numero1 = 50;
let numero2 = 25;
let numero3 = 40;
// calculadora(numero1, numero2, numero3);

// function notas(a, b, c) {
//     console.log(`A média das notas é: ${(a + b + c)  / 2}`);
// }

// notas(7.5, 8.0, 9.0);

function media (n1, n2, n3) {
    let resultado = (n1 + n2 + n3) / 3;
    console.log(`A média é ${resultado}`);
    return resultado; // inidica que o valor da várial será "externalizado"
}

// let medBiologia = media(7.5, 8.0, 9.0);
// let medMatematica = media(7, 6, 3.5);
// let medPortugues = media (7.7, 9.6, 4.5);

// console.log(`Biologia = ${medBiologia}`);
// console.log(`Matemática = ${medMatematica}`);
// console.log(`Português = ${medPortugues}`);

// Função ENTRADA(parâmetro) -> PROCESSAMENTO(lógica) -> SAÍDA(retorno)
// y = f(x)
// f = função
// x = parâmetro
// y = resultado/retorno

function estaAprovado(n1, n2, n3) {
    let med = media(n1, n2, n3);

    if (med >= 7) {
        return true;
    } else {
        return false
    }
}

let statusAluno = estaAprovado (6.5, 7.0, 8.6);
console.log(statusAluno);