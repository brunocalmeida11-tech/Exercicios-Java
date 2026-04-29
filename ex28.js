const prompt = require('prompt-sync')();

console.log("--- Classificação de Número Positivo ou Negativo ---");

let numero = Number(prompt("Insira um valor numérico inteiro: "));

let classificacao;
if (numero > 0) {
    classificacao = "Positivo";
} else if (numero < 0) {
    classificacao = "Negativo";
} else {
    classificacao = "Neutro (zero)";
}

console.log(`\nClassificação: ${classificacao}`);

