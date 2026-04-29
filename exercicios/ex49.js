const prompt = require('prompt-sync')();

console.log("--- Potência de uma Base Elevada a um Expoente ---");

let base = Number(prompt("Digite a base: "));
let expoente = Number(prompt("Digite o expoente: "));

let resultado = Math.pow(base, expoente);
console.log(`${base} elevado a ${expoente} é igual a ${resultado}.`);