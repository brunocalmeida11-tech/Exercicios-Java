const prompt = require('prompt-sync')();

console.log("--- Fatorial dos Valores Ímpares entre 1 e 100 ---");

for (let i = 1; i <= 100; i += 2) {
    let fatorial = 1n;
    for (let j = 1; j <= i; j++) {
        fatorial *= BigInt(j);
    }
    console.log(`O fatorial de ${i} é: ${fatorial}`);
}
