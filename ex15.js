const prompt = require('prompt-sync')();

console.log("--- Produto e Soma de Quatro Números ---");

let numero1 = Number(prompt("Insira o primeiro valor numérico: "));
let numero2 = Number(prompt("Insira o segundo valor numérico: "));
let numero3 = Number(prompt("Insira o terceiro valor numérico: "));
let numero4 = Number(prompt("Insira o quarto valor numérico: "));


let produto = numero1 * numero3;
let soma = numero2 + numero4;

console.log(`Produto do primeiro e terceiro: ${numero1} × ${numero3} = ${produto}`);
console.log(`Soma do segundo e quarto: ${numero2} + ${numero4} = ${soma}`);
