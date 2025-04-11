function somar (){
    let preco = parseFloat(prompt("Qual e o valor?"))
    let desconto = parseFloat(prompt("Qual sera o desconto?"))
    let total = (preco * desconto) / 100;
    let valor = preco - total;






let res = document.getElementById('result')

res.innerHTML = `<p>O produto custa R$${preco.toFixed(2)}.</p>`
res.innerHTML += `<p>Um desconto de ${desconto}% sobre ele será de R$${total.toFixed(2)}.</p>`
res.innerHTML += `<p>O valor final a ser pago será de R$${valor.toFixed(2)}.</p>`

}