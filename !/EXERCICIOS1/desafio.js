//--- Algoritimo para checar se um numero é par
function par(numero) {
    return numero % 2 == 0;
} 

console.log(par(2)); //true
console.log(par(3)); //false

//Algoritimo para vacinação para COVID-19 acima de 60 anos
function vacinacao(idade) {
    return idade >= 60;
} 
 
console.log(vacinacao(60)); //true 
console.log(vacinacao(23)); //false

//Algoritimo para checar se um veiculo é eletrico ou flex
let combustivel = "flex";
let energia = "eletrico";

function verificartipoveiculo(tipo) {
    const tipoVeiculo = tipo;
    return tipoVeiculo == "eletrico" || tipoVeiculo == "flex";
}

