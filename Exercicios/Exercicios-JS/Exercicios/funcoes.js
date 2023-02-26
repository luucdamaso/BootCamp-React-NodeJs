//1. Escreva uma função que receba um número e retorne seu dobro.

function retornaDobro(a) {
    return a + a
}

console.log(retornaDobro(10));
console.log("\n");
//2. Escreva uma função que receba um número e retorne seu quadrado.

function retornaQuadrado (a) {
    return a * a
}

console.log(retornaQuadrado(9));
console.log("\n");
//3. Escreva uma função que receba nome, idade, endereço e retorne uma mensagem no formato: "Olá, eu sou X, tenho X ano(s) e moro em X". Faça uso da interpolação de strings.

function dados(nome, idade, endereço) {
    console.log(`Olá, eu sou ${nome} tenho ${idade} ano(s) e moro em ${endereço}`)
}

dados("Lucas", "25", "Embu Guaçu");
console.log("\n");
//4. Escreva uma função que receba dia, mês e ano e retorne a data por extenso no formato "DD/MM/AAAA".

function data(dia, mes, ano) {
    console.log(`${dia}/${mes}/${ano}`)
}

data(10, 06, 1997);
console.log("\n");
//5. Escreva uma função que receba um preço de um produto e um percen-tual. Retorne o valor aplicado ao desconto.

function desconto(valor, percentual) {
    const desconto1 = valor * (percentual/100);
    const descontoReal = valor - desconto1
    return console.log(`O valor do tenis é: R$${valor}, mas com ${percentual} de desconto fica: R$${descontoReal}`)
}

desconto(750, 20);

/*function valorDesconto(preco, percentual) {
    const desconto = preco * (percentual / 100);
    return preco - desconto;
    }
    // Estamos calculando um desconto 20% nos 100 reais = 80
    console.log(valorDesconto(100, 20));*/

console.log("\n");
//6. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes indicada pelo segundo parâme-tro. Exemplo: repetir("batata", 3) -> "batatabatatabatata". OBS: Utilize um loop para resolver.

function repetir(palavra, numero) {
    let emLinha = ""
    for(i = 1; i <= numero; i++){
        emLinha += palavra + " "
    }
    return emLinha
}
console.log(repetir("batata", 3));

// function repetir(palavra, vezes) {
//     let resultado = "";
//     for (let i = 0; i < vezes; i++) {
//     resultado += palavra;
//     }
//     return resultado;
//     }
//     console.log(repetir("batata", 3)); // "batatabatatabatata"
console.log("\n");
//7. Escreva uma função que recebe outra função e invoca ela.

const teclado = (preço) => {
    let desconto = preço * (10/100);
    let valorTeclado =  preço - desconto;
    return valorTeclado;
}


function baratoCaro(preço) {
    let valorTeclado = teclado(preço);
    if(valorTeclado >= 1000) {
        return `R$${valorTeclado.toFixed(2)} Muito caro`
    } else if(valorTeclado >= 750){
        return `R$${valorTeclado.toFixed(2)} Aceitavel`
    } else {
        return `R$${valorTeclado.toFixed(2)} Vamos levar!`
    }
}

console.log(baratoCaro(teclado(900)));

// function invocarFuncao(funcao) {
//     funcao();
//     }
//     function minhaFuncao() {
//     console.log("Essa é a minha função!");
//     }
//     invocarFuncao(minhaFuncao);
console.log("\n");
//8. Transforme os itens 1, 2 e 3 em arrow function expressions.
const retornaDobro1 = (a) => {
    return a + a
}

console.log(retornaDobro1(10));
console.log("\n");

const retornaQuadrado1 = (a) => {
    return a * a
}

console.log(retornaQuadrado1(9));
console.log("\n");

const dados1 = (nome, idade, endereço) => {
    console.log(`Olá, eu sou ${nome} tenho ${idade} ano(s) e moro em ${endereço}`)
}

dados1("Lucas", 25, "Embu Guaçu");