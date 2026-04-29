const prompt = require('prompt-sync')();

console.log("--- Valores Divisíveis por 4 Menores que 200 ---");

for (let i = 0; i <= 200; i++) {
    if (i % 4 === 0) {
        console.log(`${i}`);
    }
}

