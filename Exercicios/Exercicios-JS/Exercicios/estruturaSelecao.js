//1.3 Estruturas de seleção

//1. Defina uma variável para armazenar um caractere e determine se é uma vogal ou uma consoante. Use um switch-case para implementar a lógica.
let letr = "f";
switch (letr) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    console.log(`A letra: ${letr}, é uma vogal`);
    break;
    default:
    console.log(`A letra: ${letr}, é uma consoante.`)
}
console.log("\n")
//2. Defina uma variável para armazenar um mês do ano (em número) e im-prima o nome do mês correspondente. Use um switch-case para imple-mentar a lógica.
let mes = 5;
switch (mes) {
    case 1:
        console.log(`O mês escolhido é ${'Janeiro'}`);
    break;
    case 2:
        console.log(`O mês escolhido é ${'Fevereiro'}`);
    break;
    case 3:
        console.log(`O mês escolhido é ${'Março'}`);
    break;
    case 4:
        console.log(`O mês escolhido é ${'Abril'}`);
    break;
    case 5:
        console.log(`O mês escolhido é ${'Maio'}`);
    break;
    case 6:
        console.log(`O mês escolhido é ${'Junho'}`);
    break;
    case 7:
        console.log(`O mês escolhido é ${'Julho'}`);
    break;
    case 8:
        console.log(`O mês escolhido é ${'Agosto'}`);
    break;
    case 9:
        console.log(`O mês escolhido é ${'Setembro'}`);
    break;
    case 10:
        console.log(`O mês escolhido é ${'Outubro'}`);
    break;
    case 11:
        console.log(`O mês escolhido é ${'Novembro'}`);
    break;
    case 12:
        console.log(`O mês escolhido é ${'Dezembro'}`);
    break;
    default:
        console.log(`Você não escolheu um mês vlido`);
}
console.log("\n")
//3. Defina uma variável para armazenar um número de 1 a 12 e imprima o número de dias correspondente ao mês. Use um switch-case para implementar a lógica. Considere que fevereiro tem 28 dias em anos não bissextos.

let month = 6;
switch (month) {
    case 2:
        console.log(`O mês ${month} tem 28 dias em anos não bissextos, em anos bissextos tem 29 dias`);
    break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 11:
    case 12:
        console.log(`O mês ${month} tem 31 dias.`);
    break;
    default:
        console.log(`O mês ${month} tem 30 dias.`);
}
console.log("\n")
//4. Defina uma variável para armazenar um número de 1 a 4 e imprima o nome da estação do ano correspondente. Use um switch-case para im-plementar a lógica.

let est = 1;
switch (est) {
    case 1:
    console.log(`A ${est} é o Outono`);
    break;
    case 2:
    console.log(`O ${est} é o Inverno`);
    break;
    case 3:
    console.log(`A ${est} é o Primavera`);
    break;
    case 4:
    console.log(`O ${est} é o Verão`);
    break;
    default:
    console.log(`Escolha uma estação válida`);
}
console.log("\n")
//5. Defina uma variável para armazenar uma nota (de 0 a 10) e imprima a menção correspondente. Use um switch-case para implementar a ló-gica. Considere as seguintes faixas de notas: de 0 a 4 - Insuficiente, de 5 a 6 - Regular, de 7 a 8 - Bom, de 9 a 10 - Excelente.

let nota = 10;
switch(nota) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        console.log(`Sua nota é: ${nota}. Sua nota é insuficiente.`);
        break;
    case 5:
    case 6:
        console,log(`Sua nota é: ${nota}. Sua nota é regular.`);
        break;
    case 7:
    case 8:
        console.log(`Sua nota é: ${nota}. Sua nota é Boa.`);
        break;
    case 9:
    case 10:
        console.log(`Sua nota é: ${nota}. Sua nota é excelente!`);
        break;
    default:
        console.log(`Insira uma nota válida.`);
}