const prompt = require('prompt-sync')();

console.log("--- Sequência de Fibonacci ---");

let num1 = 0;
let num2 = 1;

console.log(`${num1}`);
console.log(`${num2}`);

let i = 3;

while (i <= 15) {
    let num3 = num1 + num2;
    console.log(`${num3}`);
    num1 = num2;
    num2 = num3;
    i++;
}