// Condicionais com if else e else if

let nota = 50;
if (nota >= 80) {
    console.log("Parabens, você foi aprovado(a)!");
} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nossa lista de espera');
} else {
    console.log('Você foi reprovado(a)')
}

//Notas

let nota1 = 90;
if (nota1 >= 90) {
    console.log('Escelente');
}
else if (nota1 >= 70) {
    console.log("Regular");
} 
else if (nota1 >= 60) {
    console.log("ESTUDE MAIS UM POuCO");
} else {
    console.log("Vc foi reprovado")
}

//Dias da semana
let dia = 'quarta'
if(dia === 'domingo'){
    console.log("Vou trabalhar amanha!");
}
else if (dia === 'segunda') {
    console.log('Pior dia da semana');
}
else if (dia === 'terça') {
    console.log("Dia de liberta");
}
else if (dia === 'quarta') {
    console.log('Dia de champions');
}
else if (dia === 'quinta') {
    console.log('Quase sextando');
}
else if (dia === 'sexta') {
    console.log('SEXTOUUUUUUU');
}
else {
    (dia === 'sabado') 
    console.log('Dia de ver a muie')
}