const prompt = require('prompt-sync')();

console.log("--- Tabuada de um Número ---");

let numero = Number(prompt("Insira um número para sua Tabuada: "));

console.log(`Tabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}