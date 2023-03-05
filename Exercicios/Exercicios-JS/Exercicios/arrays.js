//1. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let numero of numeros) {
//     console.log(numero);
// }

// for(let i = 1; i <= numeros.length; i++) {
//     console.log(i)
// }

numeros.forEach((number) => console.log(number));

//2. Crie uma função que recebe um array de strings como parâmetro e re-torne um novo array apenas com as strings acima de 5 caracteres.



// function acima5 (strings) {
//     let acimaDe5 = []
//     for(let i = 0; i < strings.length; i++){
//         if(strings[i].length > 5) {
//         acimaDe5.push(strings[i]);
//     } 
//     }
//     return acimaDe5;
// }
// console.log(acima5(strings));
let strings = ["Alex", "Eduarda", "Ester", "Alexia", "Layza"]
let string = strings.filter((palavra) => palavra.length > 5 );
console.log(string)

//3. Crie uma função que recebe um array de números e retorna um novo array com apenas os números que são maiores que a média do array do parâmetro.

// function maioresQueMedia(numbers) {
//     let soma = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       soma += numbers[i];
//     }
//     const media = soma / numbers.length;
//     const maiores = [];
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > media) {
//         maiores.push(numbers[i]);
//       }
//     }
//     return maiores;
//   }
  
//   console.log(maioresQueMedia([5, 8, 9, 10, 7]));

let garrafa = [12, 14, 16, 18, 20];
function numerosMaioresQueAMedia(array) {
    let soma = 0; // 0 => 12 => 26 
    for (let i = 0; i < array.length; i++) { // For => looping
        soma += array[i]; // soma = soma + array[i]
    }

    const media = soma / array.length;

    console.log(media);

    let comparador = garrafa.filter((numero) => numero > media);
    console.log(comparador);
}

numerosMaioresQueAMedia(garrafa);


//4. Crie um array de booleans e realize um OU de todas os valores.

let booleans = [true, false, true, false, true, false];
let controle = false;
for(let i = 0; i < booleans.length; i++) {
  controle = controle || booleans[i];
}
console.log(controle);

//5. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. In-dique quais alunos faltaram.

let alunos = ['lucas', 'nai', 'danilo', 'joao', 'jessica'];
let presenca = ['lucas', 'nai'];

function listaDePresenca(presentes, faltantes) {
  let faltantes1 = [];
  for(let i = 0; i < presentes.length; i++){
    let aluno = presentes[i];
    if(!faltantes.includes(aluno) ){
      faltantes1.push(aluno)
    }
  }
  return faltantes1;
}
console.log(listaDePresenca(alunos, presenca));
//6. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.

let number = [2, 3, 8, 7, 9, 1];
const quadrado = [];
number.map((num) => quadrado.push(num * num));
console.log(quadrado);

//7. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.

const nomeArquivos = ['nome.png', 'imagem.jpg', 'java.mp3', 'node.mp4'];
const extensão = 'mp3';
const arquivosExt = nomeArquivos.filter((arq => arq.endsWith(extensão)));
console.log(arquivosExt);

// function nomeExtensao(arquivos, extensao){
//   for (let i = 0; i < arquivos.length; i++) {
//     let arquivo = arquivos[i]
//     if(arquivo.slice(-3) == extensao){
//       arquivosExt.push(arquivo);
//     }
//   }
//   console.log(arquivosExt);
// }


//8. Crie uma função que recebe um número, em seguida retorne um array de números aleatórios com o tamanho especificado pelo número.

let numero = 8;
const numbers = [];
function numeroAleatorio(number) {
  for (let i = 0; i < number; i++) {
    numbers.push(Math.floor(Math.random() * 100));
  }
  console.log(numbers);
}

numeroAleatorio(numero);

//9. Refaça os itens 1, 2, 6, e 7. Utilize as funções map, filter e forEach.

