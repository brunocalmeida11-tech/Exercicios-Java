const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área da Circunferência ---");

let raio = Number(prompt("Insira o valor do raio da circunferência: "));

let area = Math.PI * raio * raio;

console.log(`Área da circunferência: ${area.toFixed(2)}`);
