const prompt = require('prompt-sync')();

console.log("--- Cálculo de Prestação em Atraso ---");
let valorOriginal = Number(prompt("Insira o valor original da prestação: "));
let mesesAtraso = Number(prompt("Insira o número de meses em atraso: "));
let taxaJuros = Number(prompt("Insira a taxa de juros mensal (%): "));

let result = valorOriginal * (1 + (taxaJuros / 100) * mesesAtraso);

console.log(`O valor da prestação em atraso é R$ ${result}`);