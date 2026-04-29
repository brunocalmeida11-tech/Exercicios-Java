const prompt = require('prompt-sync')();

console.log("--- Conversão de Dólar para Real ---");

let valorDolar = Number(prompt("Insira o valor em dólar (US$): "));

const cotacaoDolar = 5.60; 

let result = valorDolar * cotacaoDolar;

console.log(`US$ ${valorDolar} = R$ ${result}`);
