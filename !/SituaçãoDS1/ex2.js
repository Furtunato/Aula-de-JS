function informacoes(){
    let nome = (prompt('Qual o seu nome?'))
    let idade = parseInt(prompt('Idade?'))

    let res = document.getElementById('result')

    res.innerHTML = `<p> Seu nome e ${nome}, e voce tem ${idade} anos.</p>`
    
}