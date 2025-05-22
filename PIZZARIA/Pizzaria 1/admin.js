let pizzas = [];
let pizzaParaAlterar = null;
let vendas = [];

function mostrarSecao(secao) {
  document.querySelectorAll('.secao').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(secao).classList.remove('hidden');
}

function adicionarPizza() {
  const nome = document.getElementById('nome-pizza').value.trim();
  const ingredientes = document.getElementById('ingredientes-pizza').value.trim();
  const preco = parseFloat(document.getElementById('preco-pizza').value);

  if (nome && ingredientes && !isNaN(preco)) {
    pizzas.push({ nome, ingredientes, preco });

    document.getElementById('nome-pizza').value = '';
    document.getElementById('ingredientes-pizza').value = '';
    document.getElementById('preco-pizza').value = '';

    atualizarListaPizzas();
    alert('Pizza cadastrada com sucesso!');
  } else {
    alert('Preencha todos os campos corretamente.');
  }
}

function atualizarListaPizzas() {
  const tbody = document.getElementById('lista-pizzas');
  tbody.innerHTML = '';
  pizzas.forEach(pizza => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${pizza.nome}</td>
      <td>${pizza.ingredientes}</td>
      <td>R$${pizza.preco.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
  });
}

function buscarPizzaAlterar() {
  const busca = document.getElementById('buscar-alterar-pizza').value.trim().toLowerCase();
  pizzaParaAlterar = pizzas.find(p => p.nome.toLowerCase().includes(busca));

  if (pizzaParaAlterar) {
    document.getElementById('form-alterar-pizza').classList.remove('hidden');
    document.getElementById('novo-nome-pizza').value = pizzaParaAlterar.nome;
    document.getElementById('novo-ingredientes-pizza').value = pizzaParaAlterar.ingredientes;
    document.getElementById('novo-preco-pizza').value = pizzaParaAlterar.preco;
  } else {
    alert('Pizza não encontrada');
    document.getElementById('form-alterar-pizza').classList.add('hidden');
  }
}

function alterarPizza() {
  if (!pizzaParaAlterar) return;

  const novoNome = document.getElementById('novo-nome-pizza').value.trim();
  const novosIngredientes = document.getElementById('novo-ingredientes-pizza').value.trim();
  const novoPreco = parseFloat(document.getElementById('novo-preco-pizza').value);

  if (novoNome && novosIngredientes && !isNaN(novoPreco)) {
    pizzaParaAlterar.nome = novoNome;
    pizzaParaAlterar.ingredientes = novosIngredientes;
    pizzaParaAlterar.preco = novoPreco;

    atualizarListaPizzas();
    alert('Pizza alterada com sucesso!');
    document.getElementById('form-alterar-pizza').classList.add('hidden');
  } else {
    alert('Preencha todos os campos corretamente.');
  }
}

function registrarVenda() {
  const nome = document.getElementById('venda-nome-pizza').value.trim();
  const preco = parseFloat(document.getElementById('venda-preco').value);
  const cliente = document.getElementById('venda-cliente').value.trim();

  if (nome && !isNaN(preco) && cliente) {
    vendas.push({ nome, preco, cliente });

    // Adicionar na lista visual
    const lista = document.getElementById('lista-vendas');
    const item = document.createElement('li');
    item.textContent = `Pizza: ${nome} - R$${preco.toFixed(2)} - Cliente: ${cliente}`;
    lista.appendChild(item);

    // Limpar campos
    document.getElementById('venda-nome-pizza').value = '';
    document.getElementById('venda-preco').value = '';
    document.getElementById('venda-cliente').value = '';

  } else {
    alert('Preencha todos os campos para registrar a venda.');
  }
}

function gerarRelatorioVendas() {
  const tabela = document.getElementById('tabela-relatorio-vendas');
  tabela.innerHTML = '';

  if (vendas.length === 0) {
    alert('Nenhuma venda registrada.');
    return;
  }

  let totalVendas = 0;
  vendas.forEach(venda => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${venda.nome}</td>
      <td>R$${venda.preco.toFixed(2)}</td>
      <td>${venda.cliente}</td>
    `;
    tabela.appendChild(tr);
    totalVendas += venda.preco;
  });

  const trTotal = document.createElement('tr');
  trTotal.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$${totalVendas.toFixed(2)}</strong></td>
    <td></td>
  `;
  tabela.appendChild(trTotal);

  mostrarSecao('relatorio-vendas');
}
function mostrarSecao(secao) {

  const secoes = document.querySelectorAll('section');

  
  secoes.forEach(sec => sec.classList.add('hidden'));


  const mostrar = document.getElementById(secao);
  if (mostrar) {
    mostrar.classList.remove('hidden');
  }
}
