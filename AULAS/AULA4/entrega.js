//Hello World
for (let i = 0; i < 11; i++) {
    console.log("Hello World");
}


//Tabuada
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}


//soma dos numero impares de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        soma += i;
    }
}
console.log(soma);


// Contgem regressiva de 10 a 1 e depois imprima "FELIZ ANO NOVO"
for (let g = 10; g >= 1; g--) {
    console.log(g);
}console.log("FELIZ ANO NOVO");
