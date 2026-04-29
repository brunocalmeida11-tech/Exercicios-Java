const prompt = require('prompt-sync')();

console.log("--- Quadrados na Faixa de Valores ---");

console.log(`Os quadrados dos números entre 15 e 200 são:`);

for (let i = 15; i <= 200; i++) {
    console.log(`${i * i}`);
}