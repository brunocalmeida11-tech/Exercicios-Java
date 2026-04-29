const prompt = require('prompt-sync')();

console.log("--- Soma e Verificação ---");

let num1 = Number(prompt("Insira o primeiro número inteiro: "));
let num2 = Number(prompt("Insira o segundo número inteiro: "));
let num3 = Number(prompt("Insira o terceiro número inteiro: "));

let soma = num1 + num2 + num3;

if (soma >= 100) {
        console.log(`A soma dos números é: ${soma}`);
    console.log("A soma é maior igual que 100.");
} else {
    console.log("A soma é menor que 100.");
}