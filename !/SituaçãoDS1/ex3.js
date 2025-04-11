function numeros(){
    let numero = parseInt(prompt('Digite seu numero'))
     
    let res = document.getElementById('result')

    res.innerHTML = `Seu numero escolhido foi ${numero}, o antecessor dele e ${numero -1}, e o sucessor dele e ${numero +1}.</p>`
}