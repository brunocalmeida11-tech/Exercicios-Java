const prompt = require('prompt-sync')();

console.log("--- Troca de Valores entre Variáveis ---");
let A = prompt("Insira o valor para a variável A: ");
let B = prompt("Insira o valor para a variável B: ");

let temp = A;
A = B;
B = temp;

console.log(`Os numeros após a troca ficaram: A = ${A}, B = ${B}`);
