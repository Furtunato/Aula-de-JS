//Algoritimo para vacinação para COVID-19 acima de 60 anos
function vacinacao(idade) {
    return idade >= 60;
} 
 
console.log(vacinacao(60)); //true 
console.log(vacinacao(23)); //false