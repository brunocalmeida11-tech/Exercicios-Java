const prompt = require('prompt-sync')();

console.log("--- Múltiplo de 3 e 5 ---");

let numero = Number(prompt("Insira um número inteiro: "));

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(`O número ${numero} é múltiplo de 3 e 5.`);
} else {
    console.log(`O número ${numero} NÃO É MÚLTIPLO de 3 e 5.`);
}