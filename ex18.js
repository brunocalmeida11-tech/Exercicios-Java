const prompt = require('prompt-sync')();

console.log("--- Apuração de Votos Eleitorais ---");

let votosCandidato1 = Number(prompt("Insira os votos válidos para o Candidato 1: "));
let votosCandidato2 = Number(prompt("Insira os votos válidos para o Candidato 2: "));
let votosCandidato3 = Number(prompt("Insira os votos válidos para o Candidato 3: "));
let votosNulos = Number(prompt("Insira a quantidade de votos nulos: "));
let votosBranco = Number(prompt("Insira a quantidade de votos em branco: "));

let totalEleitores = votosCandidato1 + votosCandidato2 + votosCandidato3 + votosNulos + votosBranco;
let totalValidos = votosCandidato1 + votosCandidato2 + votosCandidato3;

let percentualCandidato1 = (votosCandidato1 / totalEleitores) * 100;
let percentualCandidato2 = (votosCandidato2 / totalEleitores) * 100;
let percentualCandidato3 = (votosCandidato3 / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualBranco = (votosBranco / totalEleitores) * 100;

// Saída de dados
console.log(`\nTotal de eleitores: ${totalEleitores}`);
console.log(`\nPercentual de votos:`);
console.log(`Candidato 1: ${percentualCandidato1.toFixed(2)}%`);
console.log(`Candidato 2: ${percentualCandidato2.toFixed(2)}%`);
console.log(`Candidato 3: ${percentualCandidato3.toFixed(2)}%`);
console.log(`Votos nulos: ${percentualNulos.toFixed(2)}%`);
console.log(`Votos em branco: ${percentualBranco.toFixed(2)}%`);
