let carrinho = [];
let total = 0;

document.querySelectorAll('.pedido-botao').forEach(botao => {
    botao.addEventListener('click', function() {
        let nome = this.getAttribute('data-name');
        let preco = parseFloat(this.getAttribute('data-price'));
        carrinho.push({ nome, preco });
        total += preco;
        atualizarCarrinho();
    });
});

function atualizarCarrinho() {
    let listaCarrinho = document.getElementById('carrinho');
    let totalElemento = document.getElementById('total');
    listaCarrinho.innerHTML = '';
    carrinho.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });
    totalElemento.textContent = total.toFixed(2);
}

document.getElementById('total').addEventListener('click', function() {
    alert(`Total da compra: R$${total.toFixed(2)}`);
});

document.getElementById('finalizar-compra').addEventListener('click', function() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert(`Compra finalizada! Total: R$${total.toFixed(2)}`);
    carrinho = [];
    total = 0;
    atualizarCarrinho();
});