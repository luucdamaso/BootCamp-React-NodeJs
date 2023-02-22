// 1.4 Estruturas de repetição

//1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.
/*let number = 1;
while (number <= 10){
    if(number % 2 === 0) {
        console.log(`${number} é par.`)
    }
    number++
}*/
let num = 2;
while (num <= 10) {
    console.log(num);
    num += 2;
}

console.log("\n");
//2. Use um laço for para imprimir na tela a tabuada do 7 (de 1 a 10).
let tab = 7;
for(i = 1; i <= 10; i++){
    console.log(`${i} x ${tab} = ${i * tab}`);
}
console.log("\n");
//3. Use um laço for para imprimir na tela a sequência de Fibonacci até o décimo termo.
/*let fib = 0;
for(i = 1; i <= 10; i++){
    console.log(`${fib = fib + i}`)
}*/

let primeiroTermo = 0;
let segundoTermo = 1;
for (let i = 1; i <= 10; i++) {
const proximoTermo = primeiroTermo + segundoTermo;
primeiroTermo = segundoTermo;
segundoTermo = proximoTermo;
console.log(primeiroTermo);
}

console.log("\n");
/*4. Mostre a seguinte figura com utilização de laços:
*
**
***
****
*****
*/
/*let fig = '*';
for (i = 1; i <= 5; i++) {
    console.log(`${i * fig}`)
}*/
let text = "";
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        text += "*";
        }
        text += "\n"
        }
        console.log(text);
console.log("\n");
//5. Escreva um programa que use um laço for para imprimir na tela os números de 10 a 1 (em ordem decrescente).
for(i = 10; i >= 1; i--){
    console.log(`${i}`)
}

console.log("\n");
//6. Mostre apenas os números ímpares de 1 até 1000.
for(i = 1; i <= 50; i++){
    if( i % 2 === 1){
        console.log(`${i}`)
    }
}