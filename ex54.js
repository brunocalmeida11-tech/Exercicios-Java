const prompt = require('prompt-sync')();

console.log("--- Somatório e Média de Dez Valores ---");

let soma = 0;

for (let i = 1; i <= 10; i++) {
    const valor = parseFloat(prompt(`Digite o ${i}º valor: `));
    soma += valor;
}

const media = soma / 10;

console.log(`O somatório dos valores é: ${soma}`);
console.log(`A média dos valores é: ${media}`);