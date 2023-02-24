// Exercício I: Crie uma função que recebe 2 números e um operador (+, -, *, /)
// e faça a operação indicada entre os 2 números. Não tem retorno.

function calculadora(n1, n2, string) {
    if (string == "/" ) {
        console.log(`${n1} / ${n2} = ${n1 / n2}`)
    } else if (string == "+") {
        console.log(`${n1} + ${n2} = ${n1 + n2}`)
    }else if (string == "-") {
        console.log(`${n1} - ${n2} = ${n1 - n2}`)
    } else if (string === "*") {
        console.log(`${n1} x ${n2} = ${n1 * n2}`)
    } else {
        console.log("Operador não definidor")
    }
}

//console.log(calculadora(5, 3, "-"))

/*
function calculadora(a, b, operador) {
  if (operador === "+") {
    console.log(`${a} + ${b} = ${a + b}`);
  } else if (operador === "-") {
    console.log(`${a} - ${b} = ${a - b}`);
  } else if (operador === "*") {
    console.log(`${a} * ${b} = ${a * b}`);
  } else if (operador === "/") {
    console.log(`${a} / ${b} = ${a / b}`);
  } else {
    console.log("Operador não definido.");
  }
}
*/

//numbers(5, 8);

// Exercício II: Crie uma função que converte celsius em fahrenheit
// C = (F - 32) / 1.8
// Em seguida crie uma outra função (checarTemperatura) que recebe uma temperatura 
// como parâmetro:
// Caso esteja abaixo de 10: "Muito frio!"
// Esteja entre 11 e 15: "Clima bom!"
// Esteja entre 16 e 30: "Agradável..."
// Seja maior que 30: "Hell"

function celsius(t) {
    let c = (t - 32) /1.8;
    return c;
}

function checarTemperatura(celsius) {
    if(celsius < 11) {
        return "Muito frio!"
    } else if (celsius >= 11 && celsius <= 15){
        return "Clima bom!"
    } else if (celsius >= 16 && celsius <=30) {
        return "Agradável..."
    } else {
        return "hell"
    }
}

console.log(checarTemperatura(celsius(75)));

/*
function toCelsius(tempF) {
  let tempC = (tempF - 32) / 1.8;
  return tempC;
}

let tempCidade = toCelsius(75);

function checarTemperatura(temp) {
  if (temp < 11) {
    console.log("Muito frio!");
  } else if (temp >= 11 && temp < 16) {
    console.log("Clima bom!");
  } else if (temp >= 16 && temp < 31) {
    console.log("Agradável!");
  } else {
    console.log("Hell!");
  }
}

*/