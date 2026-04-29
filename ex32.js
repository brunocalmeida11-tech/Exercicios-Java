const prompt = require('prompt-sync')();

console.log("--- Ordenação de Três Números Inteiros ---");

let num1 = Number(prompt("Insira o primeiro número inteiro: "));
let num2 = Number(prompt("Insira o segundo número inteiro: "));
let num3 = Number(prompt("Insira o terceiro número inteiro: "));

let numeros = [num1, num2, num3];
numeros.sort((a, b) => a - b);

console.log(`Números em ordem crescente: ${numeros.join(", ")}`);