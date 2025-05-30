let pizzas = [];
let vendas = [];
let pizzaParaAlterar = null;

function exibirMensagem(texto, tipo, idMensagem) {
    const mensagem = document.getElementById(idMensagem);
    if (!mensagem) return;
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
    mensagem.classList.remove("hidden");

    setTimeout(() => {
        mensagem.classList.add("hidden");
    }, 3000);
}

function mostrarSecao(id) {
    const secoes = document.querySelectorAll("main section");
    secoes.forEach(secao => {
        if (secao.id === id) {
            secao.classList.remove("hidden");
        } else {
            secao.classList.add("hidden");
        }
    });
}

function cadastrarPizza() {
    const nome = document.getElementById("pizza-nome").value.trim();
    const ingredientes = document.getElementById("pizza-ingredientes").value.trim();
    const preco = parseFloat(document.getElementById("pizza-preco").value);

    if (!nome || !ingredientes || isNaN(preco)) {
        exibirMensagem("Preencha todos os campos corretamente!", "erro", "mensagem-cadastro");
        return;
    }

    const existe = pizzas.some(p => p.nome.toLowerCase() === nome.toLowerCase());
    if (existe) {
        exibirMensagem("Essa pizza já está cadastrada.", "erro", "mensagem-cadastro");
        return;
    }

    pizzas.push({ nome, ingredientes, preco });
    exibirMensagem("Pizza cadastrada com sucesso!", "sucesso", "mensagem-cadastro");
    limparFormularioCadastro();
    atualizarListaPizzas();
}

function limparFormularioCadastro() {
    document.getElementById("pizza-nome").value = "";
    document.getElementById("pizza-ingredientes").value = "";
    document.getElementById("pizza-preco").value = "";
}

function alterarPizza() {
    if (!pizzaParaAlterar) {
        exibirMensagem("Nenhuma pizza selecionada para alterar.", "erro", "mensagem-alterar");
        return;
    }

    const novoNome = document.getElementById("novo-nome").value.trim();
    const novosIngredientes = document.getElementById("novo-ingredientes").value.trim();
    const novoPreco = parseFloat(document.getElementById("novo-preco").value);

    if (!novoNome || !novosIngredientes || isNaN(novoPreco)) {
        exibirMensagem("Preencha todos os campos corretamente.", "erro", "mensagem-alterar");
        return;
    }

    
    const existeOutro = pizzas.some(p => 
        p.nome.toLowerCase() === novoNome.toLowerCase() && 
        p !== pizzaParaAlterar
    );
    
    if (existeOutro) {
        exibirMensagem("Já existe outra pizza com esse nome.", "erro", "mensagem-alterar");
        return;
    }

    
    pizzaParaAlterar.nome = novoNome;
    pizzaParaAlterar.ingredientes = novosIngredientes;
    pizzaParaAlterar.preco = novoPreco;

    exibirMensagem("Pizza alterada com sucesso!", "sucesso", "mensagem-alterar");
    limparFormularioAlterar();
    atualizarListaPizzas();
}

function limparFormularioAlterar() {
    document.getElementById("buscar-nome").value = "";
    document.getElementById("novo-nome").value = "";
    document.getElementById("novo-ingredientes").value = "";
    document.getElementById("novo-preco").value = "";
    document.getElementById("form-alterar").classList.add("hidden");
    pizzaParaAlterar = null;
}


function preencherCamposAlterar() {
    const nomePizza = document.getElementById("select-pizza").value;
    const pizza = pizzas.find(p => p.nome === nomePizza);

    if (pizza) {
        document.getElementById("novo-nome").value = pizza.nome;
        document.getElementById("novo-ingredientes").value = pizza.ingredientes;
        document.getElementById("novo-preco").value = pizza.preco;
    }
}

function atualizarListaPizzas() {
    const listaPizzas = document.getElementById("lista-pizza");
    listaPizzas.innerHTML = ""; 

    if (pizzas.length === 0) {
        listaPizzas.innerHTML = "<tr><td colspan='3'>Nenhuma pizza cadastrada.</td></tr>";
        return;
    }

    pizzas.forEach(pizza => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${pizza.nome}</td>
            <td>${pizza.ingredientes}</td>
            <td>R$ ${pizza.preco.toFixed(2)}</td>
        `;
        listaPizzas.appendChild(row);
    });
}


function registrarVenda() {
    const nomePizza = document.getElementById("venda-pizza").value.trim();
    const quantidade = parseInt(document.getElementById("venda-quantidade").value);
    const cliente = document.getElementById("venda-cliente").value.trim();

    if (!nomePizza || isNaN(quantidade) || !cliente) {
        exibirMensagem("Preencha todos os campos corretamente.", "erro", "mensagem-vendas");
        return;
    }

    const pizza = pizzas.find(p => p.nome === nomePizza);
    if (!pizza) {
        exibirMensagem("Pizza não encontrada.", "erro", "mensagem-vendas");
        return;
    }

    vendas.push({
        pizza: nomePizza,
        quantidade,
        cliente,
        total: pizza.preco * quantidade
    });

    exibirMensagem(`Venda registrada com sucesso! ${quantidade}x ${nomePizza} para ${cliente}. Total: R$ ${(pizza.preco * quantidade).toFixed(2)}`, "sucesso", "mensagem-vendas");
    
    
    document.getElementById("venda-pizza").value = "";
    document.getElementById("venda-quantidade").value = "1";
    document.getElementById("venda-cliente").value = "";
    
    atualizarRelatorio();
}

function atualizarRelatorio() {
    const tabelaRelatorio = document.getElementById("tabela-relatorio");
    tabelaRelatorio.innerHTML = "";

    if (vendas.length === 0) {
        tabelaRelatorio.innerHTML = "<tr><td colspan='4'>Nenhuma venda registrada.</td></tr>";
        return;
    }

    vendas.forEach(venda => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${venda.pizza}</td>
            <td>${venda.quantidade}</td>
            <td>${venda.cliente}</td>
            <td>R$ ${venda.total.toFixed(2)}</td>
        `;
        tabelaRelatorio.appendChild(row);
    });
}

function buscarPizzaAlterar() {
    const nomeBusca = document.getElementById("buscar-nome").value.trim();
    if (!nomeBusca) {
        exibirMensagem("Digite o nome da pizza para buscar.", "erro", "mensagem-alterar");
        return;
    }

    pizzaParaAlterar = pizzas.find(p => p.nome.toLowerCase() === nomeBusca.toLowerCase());
    if (!pizzaParaAlterar) {
        exibirMensagem("Pizza não encontrada.", "erro", "mensagem-alterar");
        document.getElementById("form-alterar").classList.add("hidden");
        return;
    }

    document.getElementById("novo-nome").value = pizzaParaAlterar.nome;
    document.getElementById("novo-ingredientes").value = pizzaParaAlterar.ingredientes;
    document.getElementById("novo-preco").value = pizzaParaAlterar.preco;
    document.getElementById("form-alterar").classList.remove("hidden");
    exibirMensagem("Pizza encontrada! Faça as alterações necessárias.", "sucesso", "mensagem-alterar");
}

function limparFormularioAlterar() {
    document.getElementById("buscar-nome").value = "";
    document.getElementById("novo-nome").value = "";
    document.getElementById("novo-ingredientes").value = "";
    document.getElementById("novo-preco").value = "";
    document.getElementById("form-alterar").classList.add("hidden");
    pizzaParaAlterar = null;
}