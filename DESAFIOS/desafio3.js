let carrinho = [];
let total = 0;

document.querySelectorAll('.pedido-botao').forEach(botao => {
    botao.addEventListener('click', function() {
        let nome = this.getAttribute('data-name');
        let preco = parseFloat(this.getAttribute('data-price'));
        let codigo = parseInt(this.getAttribute('data-code'));
        
        // Aplica aumento de 10% para os produtos com código 1 ou 10
        if (codigo === 1 || codigo === 10) {
            preco *= 1.1;  
        }

        carrinho.push({ nome, preco });
        total += preco;
        atualizarCarrinho();
    });
});

function atualizarCarrinho() {
    let listaCarrinho = document.getElementById('carrinho-lista');
    let totalElemento = document.getElementById('total');
    listaCarrinho.innerHTML = '';  // Limpa a lista do carrinho

    // Preenche a lista com os itens do carrinho
    carrinho.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });

    // Atualiza o total da compra
    totalElemento.textContent = `Total: R$${total.toFixed(2)}`;
}

// Exibe o total da compra ao clicar no valor total
document.getElementById('total').addEventListener('click', function() {
    alert(`Total da compra: R$${total.toFixed(2)}`);
});

// Finaliza a compra e limpa o carrinho
document.getElementById('finalizar-compra').addEventListener('click', function() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert(`Compra finalizada! Total: R$${total.toFixed(2)}`);
    carrinho = [];  // Limpa o carrinho
    total = 0;  // Zera o total
    atualizarCarrinho();  // Atualiza a visualização do carrinho
});
