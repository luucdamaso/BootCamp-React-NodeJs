// Somar Elementos de um Array:
// Escreva uma função que recebe um array de números como parâmetro e usa o método forEach() para somar todos os elementos do array. A função deve retornar a soma total.

let numeros = [10, 12, 14, 16, 55, -20, 21, 23, 25, 27, 29, 30];
let soma = 0;

numeros.forEach(valor => soma += valor);
console.log(soma);

// Imprimir Elementos com Índice:
// Crie uma função que recebe um array de strings como parâmetro e imprime cada elemento do array seguido pelo seu índice no formato "elemento - índice". Use o método forEach() para iterar sobre o array.

numeros.forEach(function (valor, indice) {
    console.log(`valor: ${valor} - indice: ${indice}`);
});

// Filtrar Números Pares:
// Implemente uma função que recebe um array de números como parâmetro e usa o método forEach() para filtrar apenas os números pares do array. A função deve retornar um novo array contendo apenas os números pares.

let par = [];
numeros.forEach(valor => { if (valor % 2 === 0) { par.push(valor); }});
console.log(par);

// Converter Números para Strings:
// Escreva uma função que recebe um array de números como parâmetro e usa o método forEach() para converter cada número em uma string. A função deve retornar um novo array contendo as strings correspondentes aos números.

let paraString = [];
numeros.forEach(valor => { paraString.push(valor.toString()) });
console.log(paraString);

// Verificar se Todos os Números São Positivos:
// Crie uma função que recebe um array de números como parâmetro e usa o método forEach() para verificar se todos os números no array são positivos. A função deve retornar true se todos os números forem positivos e false caso contrário.

function Positivos(numeros) {
    let todosPositivos = true;
    numeros.forEach(valor => {if (valor <= 0) { todosPositivos = false; }});
    return todosPositivos;
}

console.log(Positivos(numeros));

// Calcular Média de Notas:
// Crie uma função que recebe um array de números representando notas de alunos. Use o método forEach() para calcular a média dessas notas e retorne o resultado.
let notas = [8, 5, 3, 10, 4, 2, 6, 7];
function mediaAlunos(notas) {
    let media = 0;
    notas.forEach(valor => { media += valor})
    return media / notas.length;
}
console.log(mediaAlunos(notas));

// Contar Número de Vogais:
// Escreva uma função que recebe uma string como parâmetro e usa o método forEach() para contar o número de vogais (a, e, i, o, u) na string.

function contarVogais(word) {
    contador = 0;
    word = word.toLowerCase();
    word.split('').forEach(valor => {
        if (valor === 'a' || valor === 'e' || valor === 'i' || valor === 'o' || valor === 'u') {
            contador++;
        }
    });
    return contador;
}

console.log(contarVogais('OnePiece'));

// Encontrar o Maior Valor em um Array:
// Implemente uma função que recebe um array de números como parâmetro e usa o método forEach() para encontrar o maior valor no array. Retorne o maior valor encontrado.

let maior = numeros[0];
numeros.forEach(valor => {
    if (valor > maior) {
        maior = valor;
    }
});

console.log(maior);

// Filtrar Nomes com Tamanho Específico:
// Crie uma função que recebe um array de strings (nomes) e um número inteiro (tamanho). Use o método forEach() para filtrar e retornar apenas os nomes no array que têm o tamanho especificado.

let nomes = ['Lucas', 'Layza', 'Alvaro', 'Alana'];
let tamanho = 5;
let nomesFiltrados = [];
nomes.forEach((valor) => {
    if (valor.length <= tamanho) {
        nomesFiltrados.push(valor)
    }
});

console.log(nomesFiltrados);


// Verificar se um Número é Primo:
// Escreva uma função que recebe um número inteiro como parâmetro e usa o método forEach() para verificar se o número é primo. Retorne true se for primo e false caso contrário.

let numeroChecado = [];
numeros.forEach(valor => {
    let ehPrimo = (valor > 1);
    for (let i = 2; i <= Math.sqrt(valor); i++) {
        if (valor % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    numeroChecado.push(ehPrimo);
});

console.log(numeroChecado);