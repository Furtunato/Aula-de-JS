// Imprimir numeros pares de 1 a 20

for (let i = 2; i <=30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Calcular a soma de numeros:

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
} 
console.log(soma);

//calcular o fatorial de um numero fornecido pelo usuario

// const readlineSync = require('readline-sync');

// let num = readlineSync.question('Digite um numero: ');
let numero = 5;

numero = Number(numero);

let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}
console.log(`O fatorial de ${numero} é ${fatorial}. `);

//Iterar sobre um array

let frutas = ['maça', 'banana', 'laranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

let cr7 = ['sporting', 'manchester united', 'real madrid', 'juventus', 'manchester united', 'al-nassar'];
for (let i = 0; i < cr7.length; i++) {
    console.log(cr7[i]);
}