let estoque = [
    { nome: 'cafe', quantidade: 100 },
    { nome: 'leite', quantidade: 50 },
    { nome: 'acucar', quantidade: 30}
];

document.getElementById('verificar').addEventListener('click', function() {

    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);

    let item = estoque.find(item => item.nome === produto);

    if (!item) {
        document.getElementById('resultado').textContent = 'Produto não encontrado no estoque';
        return;
    }

    if (item.quantidade >= quantidade) {
        document.getElementById('resultado').textContent = 'Otimo estoque';
    } else {
        document.getElementById('resultado').textContent = 'Quantidade de produto indisponíevel.';
    }

});



    