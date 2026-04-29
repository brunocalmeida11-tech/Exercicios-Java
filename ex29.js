const prompt = require('prompt-sync')();

console.log("--- Cálculo da Média e Verificação de Aprovação ---");

// Entrada de dados
let nota1 = Number(prompt("Insira a primeira nota bimestral: "));
let nota2 = Number(prompt("Insira a segunda nota bimestral: "));
let nota3 = Number(prompt("Insira a terceira nota bimestral: "));
let nota4 = Number(prompt("Insira a quarta nota bimestral: "));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
    console.log(`Média: ${media}, Aprovado`);
} else {
    console.log(`Média: ${media}, Reprovado`);
}