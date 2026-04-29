const prompt = require('prompt-sync')();

console.log("--- Cálculo do Quadrado de um Número ---");
let numero = parseInt(prompt("Insira um valor numérico inteiro: "));

let quadrado = numero * numero;

console.log(`O quadrado de ${numero} é ${quadrado}`);
