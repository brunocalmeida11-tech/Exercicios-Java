const prompt = require('prompt-sync')();

console.log("--- Cálculo de Aumento Salarial ---");

let salario = Number(prompt("Insira o valor do salário mensal: "));
let porcentagemAumento = Number(prompt("Insira a porcentagem de aumento (%): "));

let aumento = salario * (porcentagemAumento / 100);
let novoSalario = salario + aumento;

console.log(`Aumento: R$ ${aumento} (${porcentagemAumento}%)`);
console.log(`Novo salário: R$ ${novoSalario}`);
