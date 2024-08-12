//Variável que não troca nunca
const btnEnviar = document.getElementById("enviar");

const conteudo = document.getElementById("conteudo");

var number = 0;
//arrayfunction
btnEnviar.addEventListener("click",(e) => {

    const conteudoTexto = document.getElementById("texto");
    if(conteudoTexto.value === ""){     
        alert("Errado, rapaz"); //Alertando erro de vazio
        window.location.reload();
    } 

    const container = document.createElement("div");
    const deletar = document.createElement("button");
    const elementoP = document.createElement("p");
    number++;
    container.id = `container - ${number}`;
    deletar.id = `${number}`
    deletar.textContent = "Deletar objeto"

    deletar.addEventListener("click" , (e) => deletarFunc(e));
    
    elementoP.textContent = conteudoTexto.value;

    //Será filho do Contuedo
    conteudo.appendChild(elementoP);
    container.appendChild(deletar);
    conteudo.appendChild(container);

});

function deletarFunc (e){
    console.log(e);
}

