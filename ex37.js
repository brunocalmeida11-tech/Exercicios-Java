const prompt = require('prompt-sync')();

console.log("--- Verificação de Faixa de Valor ---");

let num = Number(prompt("Insira um número inteiro: "));

if (num >= 1 && num <= 9) {
    console.log(`O número ${num} está dentro da faixa de 1 a 9.`);
} else {
    console.log(`O número ${num} está fora da faixa de 1 a 9.`);
}