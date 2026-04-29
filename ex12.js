const prompt = require('prompt-sync')();

console.log("--- Conversão de Real para Dólar ---");

let valorReal = Number(prompt("Insira o valor em real (R$): "));

const cotacaoDolar = 5.60; 

let valorDolar = valorReal / cotacaoDolar;

console.log(`R$ ${valorReal.toFixed(2)} = US$ ${valorDolar.toFixed(2)}`);
