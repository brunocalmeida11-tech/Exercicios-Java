const prompt = require('prompt-sync')();

console.log("--- Conversão de Fahrenheit ---");
let temperaturaFahrenheit = Number(prompt("Insira a temperatura em Fahrenheit: "));

let result = (temperaturaFahrenheit - 32) * 5/9;

console.log(`A temperatura em Celsius é ${result}°C`);
