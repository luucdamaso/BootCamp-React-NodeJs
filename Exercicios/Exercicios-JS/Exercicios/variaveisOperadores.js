// 1.1 Variáveis e operadores

//1. Crie uma variável que armazene uma temperatura em Fahrenheit, e re-alize a conversão para Celsius.
let fahr = 55;
console.log(`A temperatura em Fahrenheit é: ${fahr} e em Celsius é: ${((fahr - 32)/ 1.8).toFixed(2)}`)
console.log('\n');
//2.Crie duas variáveis nome e sobrenome. Crie uma nova variável chamada nomeCompleto e realize a concatenação de nome e sobrenome com template strings.
let nome = "Layza"
let sobreNome = "Damaso"
let nomeCompleto = nome +" "+ sobreNome
console.log("Seu nome completo é: " + nomeCompleto )
console.log('\n');

//3. Crie cinco variáveis que representam cinco notas de um estudante. Calcule a média ponderada, sabendo que o peso das notas são respectiva-mente: 3, 2, 1, 4 e 5.

let n1 = 7;
let n2 = 6;
let n3 = 9;
let n4 = 3;
let n5 = 8;
let media = ((n1 * 3) + (n2 * 2) + (n3 * 1) + (n4 * 4) + (n5 * 5)) / 15;
console.log(`Sua média é: ${(media).toFixed(2)}`)
console.log('\n')

//4. Crie duas variáveis que representam as dimensões (em km) de um terreno: comprimento e largura. Calcule a área deste terreno, em seguida converta para hectares. Nota: 1 km2 equivale a 100 hectares.

let comp = 20;
let larg = 40;
let area = comp * larg;
let hect = area * 100;
console.log(`${area} km² => ${hect} ha`)
console.log('\n');

//5. Crie uma variável que armazena uma temperatura em Kelvin. Converta para Celsius. A equação é: C = K − 273

let kel = 300;
console.log(`A temperatura informada em Kelvin é: ${kel}. Em Celsius é: ${kel - 273}`);
console.log('\n');

