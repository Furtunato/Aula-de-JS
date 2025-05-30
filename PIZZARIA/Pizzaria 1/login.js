function exibirMensagem(texto, tipo) {
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;
    mensagem.classList.remove("hidden");

    
    setTimeout(() => {
        mensagem.classList.add("hidden");
    }, 3000);
}

function validarLogin() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    
    const usuarioCorreto = "Davi";
    const senhaCorreta = "1234";
    
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        exibirMensagem("Login realizado com sucesso!", "sucesso");
        setTimeout(() => {
            
            window.location.href = "pizzaria.html";  
        }, 1000); 
    } else if (usuario === "admin" && senha === "1234") {
        exibirMensagem("Login realizado com sucesso!", "sucesso");
        setTimeout(() => {
            
            window.location.href = "admin.html";  
        }, 1000); 
    }
    else {
        exibirMensagem("Usuario ou senha incorretos.", "erro");
    }
}
