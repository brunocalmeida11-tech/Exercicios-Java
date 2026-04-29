const prompt = require('prompt-sync')();

console.log("--- Conversão de Pés para Metros ---");

// Entrada de dados
let pes = Number(prompt("Insira a medida em pés: "));

// Processamento
let metros = pes * 0.3048;

// Saída de dados
console.log(`\n${pes} pés = ${metros} metros`);
