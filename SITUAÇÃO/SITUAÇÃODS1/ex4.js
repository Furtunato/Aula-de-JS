function troco() {
    let produto = (prompt('Qual produto deseja escolher?'))
    let valor = parseInt(prompt('Qual o valor do seu produto?'))
    let dinheiro = parseInt(prompt('Quanto o valor que voce pagou?'))

    let res = document.getElementById('resul')

    res.innerHTML = `<p>Seu troco vai ser de $${dinheiro - valor}.</p>`
}