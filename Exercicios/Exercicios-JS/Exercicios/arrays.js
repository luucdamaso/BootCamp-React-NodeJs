//1. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let numero of numeros) {
    console.log(numero);
}

for(let i = 1; i <= numeros.length; i++) {
    console.log(i)
}

//2. Crie uma função que recebe um array de strings como parâmetro e re-torne um novo array apenas com as strings acima de 5 caracteres.

let strings = ["Alex", "Eduarda", "Ester", "Alexia", "Layza"]

function acima5 (strings) {
    let acimaDe5 = []
    for(let i = 0; i < strings.length; i++){
        if(strings[i].length > 5) {
        acimaDe5.push(strings[i]);
    } 
    }
    return acimaDe5;
}
console.log(acima5(strings));

//3. Crie uma função que recebe um array de números e retorna um novo array com apenas os números que são maiores que a média do array do parâmetro.

function maioresQueMedia(numbers) {
    let soma = 0;
    for (let i = 0; i < numbers.length; i++) {
      soma += numbers[i];
    }
    const media = soma / numbers.length;
    const maiores = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > media) {
        maiores.push(numbers[i]);
      }
    }
    return maiores;
  }
  
  console.log(maioresQueMedia([5, 8, 9, 10, 7]));

//4. Crie um array de booleans e realize um OU de todas os valores.

//5. Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. In-dique quais alunos faltaram.



//6. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.

//7. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.

//8. Crie uma função que recebe um número, em seguida retorne um array de números aleatórios com o tamanho especificado pelo número.

//9. Refaça os itens 1, 2, 6, e 7. Utilize as funções map, filter e forEach.