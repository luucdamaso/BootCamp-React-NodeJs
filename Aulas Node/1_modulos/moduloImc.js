function calcularImc(peso, altura) {
    const pesoImc =  (peso/(altura * altura)).toFixed(2)
    if (pesoImc < 18.5) {
        return (`Seu IMC é: ${pesoImc} . E você esta abaixo do peso. `)
    } else if (pesoImc > 18.5 && pesoImc < 24.9) {
        return (`Seu IMC é: ${pesoImc} . E você esta com peso normal. `)
    }  else if (pesoImc > 25.0 && pesoImc < 29.9) {
        return (`Seu IMC é: ${pesoImc} . E você esta com excesso de peso. `)
    }  else if (pesoImc > 30.0 && pesoImc < 34.9) {
        return (`Seu IMC é: ${pesoImc} . E você esta com Obesidade classe 1. `)
    }  else if (pesoImc > 35.0 && pesoImc < 39.9) {
        return (`Seu IMC é: ${pesoImc} . E você esta com Obesidade classe 2. `)
    } else if (pesoImc >= 40.0) {
        return (`Seu IMC é: ${pesoImc} . E você esta com Obesidade classe 3. `)
    } 

}

// Deste arquivo, irei exportar apenas a função calcularImc
module.exports = calcularImc;