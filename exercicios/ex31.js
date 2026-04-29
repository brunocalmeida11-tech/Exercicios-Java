const prompt = require('prompt-sync')();

console.log("--- Resolução de Equação de Segundo Grau ---");

let a = Number(prompt("Insira o valor de a: "));
let b = Number(prompt("Insira o valor de b: "));
let c = Number(prompt("Insira o valor de c: "));

let delta = b * b - 4 * a * c;

if (delta < 0) {
    console.log("A equação não possui raízes reais.");
} else if (delta === 0) {
    let raiz = -b / (2 * a);
    console.log(`A equação possui uma raiz real: ${raiz}`);
} else {
    let raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`A equação possui duas raízes reais: ${raiz1} e ${raiz2}`);
}