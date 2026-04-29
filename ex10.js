const prompt = require('prompt-sync')();

console.log("--- Cálculo da Diferença entre Dois Números ---");
let numero1 = Number(prompt("Insira o primeiro valor numérico inteiro: "));
let numero2 = Number(prompt("Insira o segundo valor numérico inteiro: "));

let diferenca = numero1 - numero2;

console.log(`A diferença entre ${numero1} e ${numero2} é ${diferenca}`);
