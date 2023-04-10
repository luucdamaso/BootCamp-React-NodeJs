function celsiusFahrenheit(celsius) {
    const temp = (celsius * 1.8 + 32).toFixed(2);
    return temp
}

function fahrenheitCelsius(fahrenheit) {
    const temp = ((fahrenheit - 32) / 1.8).toFixed(2);
    return temp
}

module.exports = {celsiusFahrenheit, fahrenheitCelsius}