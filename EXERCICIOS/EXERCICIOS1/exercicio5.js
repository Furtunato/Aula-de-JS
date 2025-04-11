//Exercício 5: Operadores Numéricos

let a = 10;
let b = 20;
let c = 15;

//Operador E (&&) com valores numericos
let eResultadoNumerico = (a < b) && (b > c);
console.log("Resultado de (a < b) && (b > c): " + eResultadoNumerico); //true


// Operador OU (||) com valores númericos
let ResultadoOu = (a > b) || (b < c);
console.log("Resultado de (a > b) || (b < c): " + ResultadoOu); //false

//Operador Não (!) com valores númericos
let ResultadoNao = !(b < c);
console.log("Resultado de !(b < c): " + ResultadoNao); //true

let resultadoNao = !(a < b);
console.log("Resultado de !(a < b): " + resultadoNao); //false


