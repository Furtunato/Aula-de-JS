let discografia = [];

function adicionarDisco() {
    let titulo = prompt("Digite o título do disco: ");
    let autor = prompt("Digite o autor do disco: ");
    let ano = parseInt(prompt("Digite o ano de publicação do livro: "));
    let valor = parseInt(prompt("Digite o valor do disco"));
    discografia.push({ titulo, autor, ano, valor });
    alert("Disco adicionado com sucesso!");
}

function listarDiscos() {
    if (discografia.length > 0) {
        let mensagem = "Listar de disco na discografia: \n";
        discografia.forEach((disco) => {
            mensagem += `Titulo: ${disco.titulo}, Autor: ${disco.autor}, Ano: ${disco.ano}, Valor: ${disco.valor}\n`;
        });
        alert(mensagem);
    } else {
        alert("A discografia está vazia. ");
    }
}

function exibirMenu() {
    return prompt(
        "Menu: \n" +
        "1. Adicionar Disco\n" +
        "2. Buscar Disco\n" +
        "3. Listar Discos\n" +
        "4. Sair\n" +
        "Escolha uma opção:"
    );
}

exibirMenu();
adicionarDisco();
listarDiscos();