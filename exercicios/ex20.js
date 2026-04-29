const prompt = require('prompt-sync')();

console.log("--- Cálculo da Velocidade de um Projétil ---");

let distanciaKm = Number(prompt("Insira a distância percorrida em quilômetros: "));
let tempoHoras = Number(prompt("Insira o tempo em horas: "));

let velocidadeMs = distanciaKm / tempoHoras / 3.6;

console.log(`Velocidade: ${velocidadeMs.toFixed(2)} m/s`);
