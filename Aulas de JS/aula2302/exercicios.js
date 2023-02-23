// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).

function imc(peso, altura) {
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`)
    // console.log(`Seu peso é ${peso} e sua altura ${altura}. Então seu IMC é: ${peso / (altura* altura)}`)
    return calculo
}

// let calculoImc = imc(80, 1.83);

// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

function porcentagem(a) {
    let res = a * 100;
    return res //`${res.toFixed(1)}%`
}

// let calculoPorcentagem = porcentagem(0.68);
// console.log(`${calculoPorcentagem}%`)

// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true

function isPositivo(a) {
    return a > 0;
    // let int = a;
    // if(int >= 0) {
    //     return true
    // }else {
    //     return false
    // }
}

// let num = isPositivo(-20);
// console.log(num);

// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

function number1(a) {
    let salario = console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(a));
    return salario
}

// let meuSalario = number1(8750);

function contar(a) {
    for(i = 1; i <= a; i++) {
        console.log(i)
    }
}

// contar(55);

function nomeCompleto (nome, sobreNome) {
    return nome + " " + sobreNome
    // let nameCompleto = nome + " " + sobreNome
    // console.log(nameCompleto);
}

//console.log(nomeCompleto("Lucas", "Damaso"));

// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI
// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function areaCirculo(r1) {
    return Math.PI * (r1 * r1);
}


function nivelCirculo(areaReal) {
    if (areaReal >= 1 && areaReal <=20) {
        return "Nivel I";
    } else if (areaReal >= 21 && areaReal <=40){
        return "Nível II";
    }else {
        return "Nível inválido";
    }
}

console.log(nivelCirculo(areaCirculo(2)));


/*function areaCirculo(raio){
    return Math.PI * (raio * raio)
}

function nivelCirculo(area){
    if(area >= 1 && area <= 20){
        return 'Nível I'
    }else if(area >= 21 && area <= 40){
        return 'Nivel II'
    }else{
        return 'Nivel Inválido'
    }
}

console.log(nivelCirculo(areaCirculo(3)))*/