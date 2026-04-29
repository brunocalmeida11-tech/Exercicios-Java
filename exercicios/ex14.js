const prompt = require('prompt-sync')();

console.log("--- Quadrado da Soma de Três Números ---");

let numero1 = Number(prompt("Insira o primeiro valor numérico: "));
let numero2 = Number(prompt("Insira o segundo valor numérico: "));
let numero3 = Number(prompt("Insira o terceiro valor numérico: "));

let soma = numero1 + numero2 + numero3;
let quadradoDaSoma = soma * soma;

console.log(`(${numero1} + ${numero2} + ${numero3})² = ${quadradoDaSoma}`);