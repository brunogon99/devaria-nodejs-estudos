const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const primeiraConstante = 'Primeira constante';
console.log(primeiraConstante);

let name;

readLine.question('Por favor Digite seu nome:', input => {
    name = input;
    console.log(`Olá, ${name}`);
});

