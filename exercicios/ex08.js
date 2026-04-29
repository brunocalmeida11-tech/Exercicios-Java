const prompt = require('prompt-sync')();

console.log("--- Cálculo de Volume da Caixa Retangular ---");
let comprimento = Number(prompt("Insira o comprimento da caixa: "));
let largura = Number(prompt("Insira a largura da caixa: "));
let altura = Number(prompt("Insira a altura da caixa: "));

let result = comprimento * largura * altura;

console.log(`O volume da caixa retangular é ${result} cm³`);
