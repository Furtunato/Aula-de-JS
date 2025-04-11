
function verificarAcesso() {
    
    const Idade = parseInt(prompt("Digite sua idade:"));
    const nacionalidade = prompt("Digite a sua nacionalidade:");

   
    if (Idade >= 16 && nacionalidade.toLowerCase() === "brasileiro") {
        alert("Pode votar.");
    } else {
        alert("Não pode votar.");
}
}

verificarAcesso();