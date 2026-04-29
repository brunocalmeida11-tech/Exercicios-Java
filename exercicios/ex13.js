const prompt = require('prompt-sync')();

console.log("--- Soma dos Quadrados de Três Números ---");

let numero1 = Number(prompt("Insira o primeiro valor numérico: "));
let numero2 = Number(prompt("Insira o segundo valor numérico: "));
let numero3 = Number(prompt("Insira o terceiro valor numérico: "));

let quadrado1 = numero1 * numero1;
let quadrado2 = numero2 * numero2;
let quadrado3 = numero3 * numero3;

let somaQuadrados = quadrado1 + quadrado2 + quadrado3;

console.log(`${numero1}² + ${numero2}² + ${numero3}² = ${somaQuadrados}`);
