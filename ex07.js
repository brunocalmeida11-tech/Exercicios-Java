const prompt = require('prompt-sync')();

console.log("--- Operações com Quatro Números ---");
let num1 = parseInt(prompt("Insira o primeiro número inteiro: "));
let num2 = parseInt(prompt("Insira o segundo número inteiro: "));
let num3 = parseInt(prompt("Insira o terceiro número inteiro: "));
let num4 = parseInt(prompt("Insira o quarto número inteiro: "));

console.log(`Adições: ${num1}+${num2}=${num1+num2}, ${num1}+${num3}=${num1+num3}, ${num1}+${num4}=${num1+num4}, ${num2}+${num3}=${num2+num3}, ${num2}+${num4}=${num2+num4}, ${num3}+${num4}=${num3+num4}`);
console.log(`Multiplicações: ${num1}x${num2}=${num1*num2}, ${num1}x${num3}=${num1*num3}, ${num1}x${num4}=${num1*num4}, ${num2}x${num3}=${num2*num3}, ${num2}x${num4}=${num2*num4}, ${num3}x${num4}=${num3*num4}`);
