const prompt = require('prompt-sync')();

console.log("--- Par ou Ímpar ---");

let num = Number(prompt("Insira um número inteiro: "));

if (num % 2 === 0) {
    console.log(`O número ${num} é PAR.`);
} else {
    console.log(`O número ${num} é ÍMPAR.`);
}