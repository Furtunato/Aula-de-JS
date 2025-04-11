//Verificação de idade
let idade = 100;
if (idade <= 12){
    console.log('Criança');
} 
else if (idade <= 18) {
    console.log('Adolescente');
}
else if (idade <= 60) {
    console.log("Adulto")
}
else {
    console.log('Idoso')
}


//Verificação de nota com mensagem

let nota1 = 90;
if (nota1 >= 90) {
    console.log('Escelente');
}
else if (nota1 >= 70) {
    console.log("Regular");
} else {
    console.log("Vc foi reprovado")
}


//Dias da semana

let dia = 'Segunda'
 if (dia === 'Segunda' || dia === 'Terça' || dia === 'Quarta' || dia === 'quinta' || dia === 'sexta') {
    console.log('Dia de trabalho')
 }
 else{
    (dia === 'sabado' || dia === 'domingo')
    console.log('fim de semana')
 }

 //Verificação do horario do dia

 let hora = 19;
 if (hora >= 18) {
    console.log('Boa noite')
 } else if (hora >= 12) {
    console.log ('Boa tarde')
 }
 else {
    console.log('Bom dia')
 }

 //Verificção de imc

 let peso = 20;
 let altura = 1.90;
 let imc = (peso/(altura**2));

 if (imc > 18 && imc < 25){
    console.log('Saudavel');
 } 
 else if (imc >=25){
    console.log('Sobrepeso');
 }
 else {
    console.log('Baixo peso');
 }

 //Numeros primos
 
