// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.

let numeros= [1,2,3,4,5,6,7,8,9,10];
let contador = 0
for(let i =0; i < numeros.length; i++){
    contador += numeros[i]
}
console.log(`A soma é ${contador}`);

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.
let notas = [10, 7.5, 8.8, 9.0, 7.2];
let soma = 0;
for(let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media = soma / notas.length;
console.log("A média das notas é: " + media);

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.
let num = [7, 11, 20, 9.4, 34, 50, 66];
let maiorNumero = num[0];
for(let i = 0; i < num.length; i++){
    if(num[i] > maiorNumero){
        maiorNumero = num[i];
    }
 }
   console.log(`O maior numero é ${maiorNumero}`)

// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.
 let frutas =["maçã","pera", "banana", "abacaxi"]
 for(let fruta of frutas){
    console.log(`${fruta} tem ${fruta.length}`)
 }
// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.
let numbers = [];
for (let i = 0; i < 5; i++) {
  numbers.push(Math.floor(Math.random() * 100));
}


let numerosPares = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    numerosPares.push(numbers[i]);
  }
}


let somaPares = 0;
for (let i = 0; i < numerosPares.length; i++) {
  somaPares += numerosPares[i];
}

console.log("Array original: " + numbers);
console.log("Array apenas com números pares: " + numerosPares);
console.log("Soma dos números pares: " + somaPares);

function exercicio5() {
    let numeros = [];
  
    for (let i = 0; i < 5; i++) {
      numeros.push(Math.floor(Math.random() * 100));
    }
  
    let pares = [];
    for (let num of numeros) {
      if (num % 2 === 0) {
        pares.push(num);
      }
    }
  
    let somaPares = 0;
    for (let par of pares) {
      somaPares += par;
    }
  
    console.log(somaPares);
  }

// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)

function verificaExtensao(nomeArquivo) {
    return nomeArquivo.endsWith('.mp3') || nomeArquivo.endsWith('.wav');
  }
  
  console.log(verificaExtensao('musica.mp3')); 
  console.log(verificaExtensao('som.wav')); 
  console.log(verificaExtensao('audio.mpeg')); 

// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.

function extrairDigitosVerificadores(cpf) {
    const digitosVerificadores = cpf.slice(-2); 
    return digitosVerificadores;
  }
  
  const cpf = "056.985.990-23";
  const digitosVerificadores = extrairDigitosVerificadores(cpf);
  console.log(digitosVerificadores); 

// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida. BATATA -> ATATAB

function inverteString(str) {
    let novaStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      novaStr += str[i];
    }
    return novaStr;
  }
  
  console.log(inverteString("BATATA")); 

// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]

function inverterArray(array) {
    let novoArray = [];
  
    for (let i = array.length - 1; i >= 0; i--) {
      novoArray.push(array[i]);
    }
  
    return novoArray;
  }
  
  let meuArray = [1, 2, 3];
  let arrayInvertido = inverterArray(meuArray);
  
  console.log(arrayInvertido); 
