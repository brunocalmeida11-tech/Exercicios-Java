const prompt = require('prompt-sync')();

console.log("--- Multiplicação e Verificação ---");

let num1 = Number(prompt("Insira o primeiro número inteiro: "));

let multiplicacao = num1 * 2;


if (multiplicacao > 30) {
    console.log(`A multiplicação dos números é: ${multiplicacao}`);
    console.log("A multiplicação é maior que 30.");
} else {
    console.log("A multiplicação é menor ou igual a 30.");
}