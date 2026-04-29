const prompt = require('prompt-sync')();

console.log("--- Somatório de Grãos de Trigo no Tabuleiro de Xadrez ---");

let totalGrãos = 0;
let quadro = 1;

while (quadro <= 64) {
    let grãosNoQuadro = Math.pow(2, quadro - 1);
    totalGrãos += grãosNoQuadro;
    quadro++;
}

console.log("Total de grãos de trigo no tabuleiro de xadrez = " + totalGrãos);
