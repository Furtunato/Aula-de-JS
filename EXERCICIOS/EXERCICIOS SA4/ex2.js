const Usuario = "p";
const Senha = "pastel";


function verificarAcesso() {
    
    const usuario = prompt("Digite o nome de usuário:");
    const senha = prompt("Digite a senha:");

   
    if (usuario === Usuario && senha === Senha) {
        alert("Acesso concedido.");
    } else {
        alert("Acesso negado. Nome de usuário ou senha incorretos.");
    }
}


verificarAcesso();
