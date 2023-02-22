// Exercício I
// Defina 3 variáveis com notas de 0 a 10. Calcule a média
// das três notas. Em seguida mostre no console o status do aluno:
//      Maior ou igual 7 = Aprovado
//      Abaixo de 7 ou maior que 5 = Reforço
//      Menor que 5 = Reprovação

nota1 = 4;
nota2 = 5;
nota3 = 5;
media = (nota1 + nota2 + nota3) / 3

if(media < 5) {
    console.log(`Sua nota é: ${media.toFixed(2)}. Você foi reprovado.`)
}else if (media < 7 && media > 5) {
    console.log(`Sua nota é: ${media.toFixed(2)}. Você esta de reforço`)
} else {
    console.log(`Sua nota é: ${media.toFixed(2)}. Você esta aprovado!`)
}

// Exercício II
// Simule a tabela do IMC com base no valor calculado
// no exercício anterior. Indique o status com base no valor do IMC.

let peso = 81
let altura = 1.83
let imc = peso / (altura*altura)

if(imc < 18.5) {
  console.log(`Seu IMC é: ${imc.toFixed(2)}. Então sua classificação é: abaixo do peso.`) 
} else if (imc >= 18.5 && imc < 25) {
  console.log(`Seu IMC é: ${imc.toFixed(2)}. Então sua classificação é: peso normal.`) 
} else if (imc >= 25 && imc < 30) {
  console.log(`Seu IMC é: ${imc.toFixed(2)}. Então sua classificação é: sobrepeso.`) 
} else if (imc >= 30 && imc < 35) {
  console.log(`Seu IMC é: ${imc.toFixed(2)}. Então sua classificação é: Obesidade grau 1.`) 
} else if (mc >= 35 && imc < 40) {
  console.log(`Seu IMC é: ${imc.toFixed(2)}. Então sua classificação é: Obesidade grau 2.`) 
} else {
  console.log(`Seu IMC é: ${imc.toFixed(2)}. Então sua classificação é: Obesidade Grau 3.`) 
}


// Exercício III: Defina um número a e um número b.
// Verifica qual o maior, ou menor, ou se são

a = 89
b = 8
if (a > b) {
    console.log(`${a} é maior que ${b}`)
} else if ( b > a) {
    console.log(`${b} é maior que ${a}`)
} else {
    console.log(`Os números são igual`)
}