// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50

let mult = 1;
while(mult <= 10) {
    let resultado = mult * 5;
    console.log(`${mult} x 5 = ${resultado}`);
    mult++;
}

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)

let num = 1

while(num <= 99) {
    if (num % 2 !== 0) {
        console.log(num);
    }
    num++;
}

// Exercícios III: Conte de 50 até 75

let numero1 = 50;
while (numero1 <= 75) {
  console.log(numero1);
  numero1++; 
}