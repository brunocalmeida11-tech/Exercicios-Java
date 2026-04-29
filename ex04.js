const prompt = require('prompt-sync')();

console.log("--- Cálculo de Consumo de Combustível ---");
let distancia = Number(prompt("Insira a distância percorrida (km): "));
let consumo = Number(prompt("Insira o consumo do veículo (km/l): "));

let result = distancia / consumo;

console.log(`A quantidade de litros gastos na viagem é ${result} litros`);
