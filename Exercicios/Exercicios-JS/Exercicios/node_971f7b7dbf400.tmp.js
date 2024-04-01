//1. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let numero of numeros) {
    console.log(numero);
}

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

//2. Crie uma função que recebe um array de strings como parâmetro e re-torne um novo array apenas com as strings acima de 5 caracteres.

let arrayDeStrings = ["Olá", "Mundo", "JavaScript", "NodeJS", "ReactJS", "Typescript"];
function contadorDeStrings (array){
    let strings5 = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > 5){
            strings5.push(array[i]);
        }
    }
    return strings5;
}
console.log(contadorDeStrings(arrayDeStrings));

//3. Crie uma função que recebe um array de números e retorna um novo array com apenas os números que são maiores que a média do array do parâmetro.

function media (array) {
    let total = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)
    let media = total / array.length;
    let numerosMaioresMedia = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > media) {
            numerosMaioresMedia.push(array[i]);
        }
    }
    return numerosMaioresMedia
}

console.log(media(numeros));

//4. Crie um array de booleans e realize um OU de todas os valores.

let arrayDeBooleans = [true, false, true, true, false];
let resultado = arrayDeBooleans.reduce((acumulador, valorAtual) => acumulador || valorAtual, false);
console.log(resultado);

//5. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. In-dique quais alunos faltaram.

let nomesAlunos = ["João", "Maria", "Pedro", "Ana", "Carlos"];

let listaPresenca = ["João", "Pedro", "Ana"];

function alunosAusentes(total, presentes) {
    let ausentes = [];
    for (let i = 0; i < total.length; i++) {
        if (!presentes.includes(total[i])) {
            ausentes.push(total[i]);
        }
    }
    return ausentes;
}

console.log(alunosAusentes(nomesAlunos, listaPresenca));

//6. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.

function elevarAoQuadrado(array) {
    let aoQuadrado = [];
    for (let i = 0; i < array.length; i++) {
           let numeroQuadrado =  array[i]*array[i];
           aoQuadrado.push(numeroQuadrado);
    }
    return aoQuadrado;
}

console.log(elevarAoQuadrado(numeros));

//7. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de ar-quivo que forem dessa extensão.

let nomesArquivos = ["arquivo1.txt", "documento.docx", "foto.jpg", "planilha.xlsx"];
let extensao = ".jpg";

function arquivosDaExtensao(array, extensao) {
    let nomeArquivo = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].endsWith(extensao)){
            nomeArquivo.push(array[i]);
        }
    }
    return nomeArquivo;
}

console.log(arquivosDaExtensao(nomesArquivos, extensao));

//8. Crie uma função que recebe um número, em seguida retorne um array de números aleatórios com o tamanho especificado pelo número.

function numerosAleatorios(tamanho) {
    let arrayAleatorio = [];
    for (let i = 0; i < tamanho; i++) {
        arrayAleatorio.push(Math.random());
    }
    return arrayAleatorio;
}

let tamanho = 5;
console.log(numerosAleatorios(tamanho));

//9. Refaça os itens 1, 2, 6, e 7. Utilize as funções map, filter e forEach.