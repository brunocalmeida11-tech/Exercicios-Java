const prompt = require('prompt-sync')();

console.log("--- Maior e Menor Valores entre Valores Positivos ---");

let num = parseInt(prompt("Digite um número positivo (ou um número negativo para encerrar): "));

if (num < 0) {
    console.log("Nenhum número positivo foi digitado.");
} else {
    let maior = num;
    let menor = num;

    while (num >= 0) {
        if (num > maior) {
            maior = num;
        }
        if (num < menor) {
            menor = num;
        }
        num = parseInt(prompt("Digite um número positivo (ou um número negativo para encerrar): "));
    }

    console.log(`O maior valor digitado foi: ${maior}`);
    console.log(`O menor valor digitado foi: ${menor}`);
}