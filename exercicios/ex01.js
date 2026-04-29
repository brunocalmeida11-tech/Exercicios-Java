const prompt = require('prompt-sync')();

console.log("--- Soma de Valores ---");
let temperaturaCelsius = Number(prompt("Insira a temperatura em Celsius: "));

let temperaturaFahrenheit = temperaturaCelsius * 9/5 + 32;

console.log(`A temperatura em Fahrenheit é ${temperaturaFahrenheit}°F`)