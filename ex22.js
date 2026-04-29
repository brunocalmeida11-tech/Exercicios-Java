const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume da Esfera ---");

// Entrada de dados
let raio = Number(prompt("Insira o raio da esfera: "));

// Processamento
let volume = (4/3) * Math.PI * Math.pow(raio, 3);

// Saída de dados
console.log(`\nRaio: ${raio}`);
console.log(`Volume da esfera: ${volume.toFixed(1)}`);
