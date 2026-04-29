const prompt = require('prompt-sync')();

console.log("--- Cálculo de Potência ---");

let base = Number(prompt("Insira a base (número inteiro): "));
let expoente = Number(prompt("Insira o expoente (número inteiro): "));

let resultado = Math.pow(base, expoente);

console.log(`\n${base}^${expoente} = ${resultado}`);
