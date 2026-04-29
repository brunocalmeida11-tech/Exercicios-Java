const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área Total de uma Residência ---");

let areaTotal = 0;
let continuar;

do {
    const nome = prompt("Nome do cômodo: ");
    const largura = Number(prompt("Largura (m): "));
    const comprimento = Number(prompt("Comprimento (m): "));
    const area = largura * comprimento;
    areaTotal += area;
    continuar = prompt("Continuar? (SIM/NÃO): ").toUpperCase();
} while (continuar === "SIM");

console.log("Área total do comodo: " + areaTotal.toFixed(2) + "m²");
