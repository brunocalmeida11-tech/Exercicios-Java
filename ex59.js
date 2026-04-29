const prompt = require('prompt-sync')();

console.log("--- Divisão Inteira Sem Usar o Operador de Divisão ---");

const dividend = parseInt(prompt("Digite o dividendo (número a ser dividido): "));
const divisor = parseInt(prompt("Digite o divisor (número pelo qual dividir): "));

if (divisor === 0) {
    console.log("Erro: Divisão por zero não é permitida.");
} else {
    let quotient = 0;
    let remainder = dividend;

    while (remainder >= divisor) {
        remainder -= divisor;
        quotient++;
    }

    console.log(`Resultado da divisão inteira: ${quotient}`);
}
