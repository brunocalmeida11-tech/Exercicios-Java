const prompt = require('prompt-sync')();

console.log("--- Cálculo de Volume da Lata de Óleo ---");

let raio = Number(prompt("Insira o raio da base da lata (cm): "));
let altura = Number(prompt("Insira a altura da lata (cm): "));

let volume = Math.PI * Math.pow(raio, 2) * altura;

console.log(`O volume da lata é de ${volume.toFixed(2)} cm³`);
