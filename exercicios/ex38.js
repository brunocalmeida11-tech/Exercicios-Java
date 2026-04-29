const prompt = require('prompt-sync')();

console.log("--- Verificação de Valor Menor ou Igual a 3 ---");

let valor = Number(prompt("Insira um número inteiro: "));

if (valor <= 3) {
    console.log(`O número ${valor} é menor ou igual a 3.`);
} else {
    console.log(`O número ${valor} é maior que 3.`);
}
