const prompt = require('prompt-sync')();

console.log("--- Somatório, Média e Total de Valores Lidos ---");

let soma = 0;
let contador = 0;

while (true) {
    const valor = parseFloat(prompt(`Digite um valor (ou -1 para encerrar): `));
    
    if (valor === -1) {
        break;
    }
    
    soma += valor;
    contador++;
}

if (contador > 0) {
    const media = soma / contador;
    console.log(`O somatório dos valores é: ${soma}`);
    console.log(`A média dos valores é: ${media}`);
    console.log(`Total de valores lidos: ${contador}`);
} else {
    console.log("Nenhum valor foi lido.");
}