const prompt = require('prompt-sync')();

console.log("--- Quadrados dos Valores Inteiros de 15 a 200 Contando de 3 em 3 ---");

for (let i = 15; i <= 200; i += 3) {
    const quadrado = i * i;
    console.log(`O quadrado de ${i} é ${quadrado}`);
}