const prompt = require('prompt-sync')();

console.log("--- Valores Divisíveis por 2 ou 3 ---");

let num1 = Number(prompt("Insira um número inteiro: "));
let num2 = Number(prompt("Insira um número inteiro: "));
let num3 = Number(prompt("Insira um número inteiro: "));
let num4 = Number(prompt("Insira um número inteiro: "));

if (num1 % 2 === 0 || num1 % 3 === 0) {
    console.log(`O numero ${num1} pode ser dividido por 2 ou por 3`);
}

if (num2 % 2 === 0 || num2 % 3 === 0) {
    console.log(`O numero ${num2} pode ser dividido por 2 ou por 3`);
}

if (num3 % 2 === 0 || num3 % 3 === 0) {
    console.log(`O numero ${num3} pode ser dividido por 2 ou por 3`);
}

if (num4 % 2 === 0 || num4 % 3 === 0) {
    console.log(`O numero ${num4} pode ser dividido por 2 ou por 3`);
}