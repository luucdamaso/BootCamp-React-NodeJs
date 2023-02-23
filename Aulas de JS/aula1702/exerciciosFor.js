// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50
console.log(`\n Exercício 1 (for)`);
for (let num = 1; num <= 5; num++) {
    console.log(`${num} x 5 = ${num*5}`);
}

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)

console.log(`\n Exercício 2 (for)`);
for (let num = 1; num <= 10; num++) {
    if(num % 2 == 1) {
        console.log(`${num} é impar!`)
    }
}

// Exercícios III: Conte de 50 até 75

console.log(`\n Exercício 3 (for)`);
for (let num = 50; num <= 55; num++) {
    console.log(num)
}