const prompt = require('prompt-sync')();

console.log("--- Quadrado da Divisão ---");

// Entrada de dados
let numero1 = Number(prompt("Insira o primeiro valor numérico inteiro: "));
let numero2 = Number(prompt("Insira o segundo valor numérico inteiro: "));

// Processamento
let divisao = numero1 / numero2;
let quadrado = divisao * divisao;

// Saída de dados
console.log(`\n${numero1} ÷ ${numero2} = ${divisao}`);
console.log(`Quadrado do resultado: ${Math.floor(quadrado)}`);
