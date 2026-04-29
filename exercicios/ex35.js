const prompt = require('prompt-sync')();

console.log("--- Maior e Menor Valor ---");

let num1 = Number(prompt("Insira um número inteiro: "));
let num2 = Number(prompt("Insira um número inteiro: "));
let num3 = Number(prompt("Insira um número inteiro: "));
let num4 = Number(prompt("Insira um número inteiro: "));
let num5 = Number(prompt("Insira um número inteiro: "));

let maior = num1;
let menor = num1;

if (num2 > maior) {
    maior = num2;
} else if (num2 < menor) {
    menor = num2;
}

if (num3 > maior) {
    maior = num3;
} else if (num3 < menor) {
    menor = num3;
}

if (num4 > maior) {
    maior = num4;
} else if (num4 < menor) {
    menor = num4;
}

if (num5 > maior) {
    maior = num5;
} else if (num5 < menor) {
    menor = num5;
}

console.log(`O MAIOR valor é: ${maior}`);
console.log(`O MENOR valor é: ${menor}`);