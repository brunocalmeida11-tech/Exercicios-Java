const prompt = require('prompt-sync')();

console.log("--- Operações Básicas com Dois Números ---");

let numero1 = Number(prompt("Insira o primeiro valor numérico: "));
let numero2 = Number(prompt("Insira o segundo valor numérico: "));

let adicao = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero2 !== 0 ? numero1 / numero2 : "Divisão por zero não é permitida";

console.log(`\nResultados das operações:`);
console.log(`${numero1} + ${numero2} = ${adicao}`);
console.log(`${numero1} - ${numero2} = ${subtracao}`);
console.log(`${numero1} × ${numero2} = ${multiplicacao}`);
if (numero2 !== 0) {
    console.log(`${numero1} ÷ ${numero2} = ${divisao}`);
} else {
    console.log(`${numero1} ÷ ${numero2} = ${divisao}`);
}
