const prompt = require('prompt-sync')();

console.log("--- Somatório da Fatorial de Quinze Valores ---");

let somaFatorial = 0;

for (let i = 1; i <= 15; i++) {
    let fatorial = 1;
    for (let j = 1; j <= i; j++) {
        fatorial *= j;
    }
    somaFatorial += fatorial;
}

console.log(`O somatório da fatorial de quinze valores é: ${somaFatorial}`);