const prompt = require('prompt-sync')();

console.log("--- Cálculo de Raiz ---");

// Entrada de dados
let base = Number(prompt("Insira a base da raiz: "));
let indice = Number(prompt("Insira o índice da raiz: "));

// Processamento
let resultado = Math.pow(base, 1/indice);

// Saída de dados
console.log(`\n${indice}√${base} = ${resultado.toFixed(1)}`);
