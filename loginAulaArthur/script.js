const botao = document.getElementById("entrar");

botao.addEventListener("click", () => {
    const user = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    console.log({
        user,
        senha
    });

    if(user === "admin" && senha === "senha") {
        // Sessão
        sessionStorage.setItem("logado", true);
        // Local
        localStorage.setItem("logado", true);
    
        window.location.replace("dashboard.html");
    }
});