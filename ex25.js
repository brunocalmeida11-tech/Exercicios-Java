const prompt = require('prompt-sync')();

console.log("--- Sucessor e Antecessor ---");

let numero = Number(prompt("Insira um valor numérico inteiro: "));

let sucessor = numero + 1;
let antecessor = numero - 1;

console.log(`Sucessor: ${sucessor}`);
console.log(`Antecessor: ${antecessor}`);