const prompt = require('prompt-sync')();

console.log("--- Diferença entre Maior e Menor ---");

let numero1 = Number(prompt("Insira o primeiro valor numérico inteiro: "));
let numero2 = Number(prompt("Insira o segundo valor numérico inteiro: "));

let maior = numero1 > numero2 ? numero1 : numero2;
let menor = numero1 < numero2 ? numero1 : numero2;
let diferenca = maior - menor;

console.log(`Diferença entre o maior e o menor: ${diferenca}`);

