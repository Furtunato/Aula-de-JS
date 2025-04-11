function verificarDesconto(qtdItens) {
    let desconto = 0;

    if (qtdItens >= 10) {
        desconto >= 10; 
    } else if (qtdItens >= 5) {
        desconto = 5; 
    }

    return desconto;
}

const qtdItens = parseInt(prompt("Digite a quantidade de itens comprados:"));

const desconto = verificarDesconto(qtdItens);
alert(`O desconto aplicado é: ${desconto}%`);
