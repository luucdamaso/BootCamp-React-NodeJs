// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.

let dinheiro = 200
let idade = 18

if(idade >= 18 && 20 <= dinheiro) {
   let troco = dinheiro - 20; // dinheiro -=20
    console.log(`Você tem ${idade} anos então pode comprar bebida. Seu troco é ${troco}`);
}else {
    console.log(`Você não pode comprar bebidas`);
}

// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.

salario = 800

if(salario < 500) {
    let aumento1 = salario + 50; // salario += 50
    console.log(`Você recebeu um aumento, seu novo salario é: R${aumento1}`);
} else if (salario > 500 && salario <= 1000) {
    let aumento2 = salario + 25; // salario += 25
    console.log(`Você recebeu um aumento, seu novo salário é: RS ${aumento2}`);
} else {
    console.log(`Parabéns seu salário já é muito bom.`);
}