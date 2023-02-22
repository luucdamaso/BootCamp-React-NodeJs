// 1.2 Estruturas condicionais

//1. Crie três variáveis: a, b e c. Estas variáveis armazenam números. Exiba qual destes números é o maior.
let a = 9;
let b = 7;
let c = 55;

let maior;

if(a > b && a > c) {
    maior = a
} else if (b > a && b > c) {
    maior = b
} else {
    maior = c
}
console.log(`O maior número é ${maior}`);
console.log('\n');

//2. Crie três variáveis que representam os três lados de um triângulo. Aplica a seguinte regra para definir se o triângulo é possível: Se a soma de dois lados é maior que o terceiro lado.
/*let l1 = 55;
let l2 = 25;
let l3 = 10;
let triangulo;
if (l1 + l2 >= l3 && l1 + l3 >= l2 && l2 + l3 >= l1) {
    triangulo = true
    console.log(`É possivel fazer um triangulo com a soma de dois lados.`);
} else {
    triangulo = false
    console.log(`Não é possivel fazer um triangulo com a soma de dois lados.`);
}
console.log('\n');*/

let lado1 = 55;
let lado2 = 25;
let lado3 = 10;
if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    console.log(`O triângulo é possível.`);
}else {
    console.log(`O triângulo não é possível.`)
}
console.log('\n');
//3. Crie uma variável idade. Caso seja uma idade inválida (negativa ou maior que 130) mostre uma mensagem de aviso.
let idade = 25
if (idade <= 0 || idade >= 130) {
    console.log(`Sua idade é invalida.`)
} else {
    console.log(`Parabéns pelos seus ${idade} anos!`)
}
console.log('\n');
//4. Crie duas variáveis: salário e quantidadeDependentes. Siga a seguinte regra para aplicar ajustes salariais: Caso não possua dependentes não realizar ajustes no salário, se houver entre 1 e 5 aumentar em 30% o salário. Caso seja acima de 5 aumentar em 40% o salário.
let salario = 2158;
let quantidadeDependentes = 6;
if(quantidadeDependentes >= 1 && quantidadeDependentes <= 5) {
    console.log(`Você recebeu um aumento salárial de 30%! Agora seu salário é esse: ${(salario * 0.3) + salario}`)
}else if (quantidadeDependentes > 5) {
    console.log(`Você recebeu um aumento salárial de 40%! Agora seu salário é esse: ${(salario * 0.4) + salario}`)
}else {
    console.log(`Você não se aplica a essa politica de aumento.`)
}
console.log('\n');
//5. Crie uma variável para armazenar um dia da semana (1 - Domingo, 2 - Segunda, ... 7 -Sábado). Com base no valor indique se é final de semana ou dia de útil.
/*let d1 = "Domingo";
let d2 = "Segunda";
let d3 = "Terça";
let d4 = "Quarta";
let d5 = "Quinta";
let d6 = "Sexta";
let d7 = "Sabado";
let diaSemana = d1;
if(diaSemana === d1 || diaSemana === d7){
    console.log(`Hoje é ${diaSemana}, vamos aproveitar o fim de semana!`)
} else {
    console.log(`Hoje é ${diaSemana}, Vamos trabalhar porque ainda é dia útil.`)
}
console.log('\n');*/
let diaSemana = 7;
if(diaSemana >= 2 && diaSemana <= 6){
    console.log('Dia útil');
}else {
    console.log('Final de semana')
}
console.log('\n');
//6. Crie uma variável ano e verifique se este ano é bissexto. Um ano é bis-sexto quando: Caso 1) É um número divisível por 4, mas não é divisível por 100. Caso 2) É um número divisível por 4, por 100 e por 400.
/*let ano = 2017;
if (ano % 4 === 0 || ano % 100 === 0){
    console.log(`o ano ${ano} é um ano bissexto!`)
} else if (ano % 4 === 0 || ano % 100 === 0 || ano % 400 === 0){
    console.log(`o ano ${ano} é um ano bissexto!`)
}else {
    console.log(`o ano ${ano} não é um ano bissexto!`)
}*/

let ano = 2024;
if (
    (ano % 4 == 0 && ano % 100 != 0) || (ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 0)
) {
    console.log(`${ano} é um ano bissexto`);
}else {
    console.log(`${ano} não é um ano bissexto`);
}