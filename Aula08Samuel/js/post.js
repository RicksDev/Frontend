const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Capturei os dados do form

    const usuario = document.getElementById("usuario").value;
    const mensagem = document.getElementById("mensagem").value;
    const imagem = document.getElementById("imagem").files[0];

    const formData = new FormData();

    formData.append("title", usuario);
    formData.append("content", mensagem);
    formData.append("image", imagem);

    fetch("http://10.92.198.38:8080/feed/post", {
        method: "POST",
        body: formData,
        headers: { 
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGhvLnJpY2FyZG8xM0BnbWFpbC5jb20iLCJ1c2VySWQiOiI2NjQyNWM3ODQzZWNhOTM5MTcxMjdhN2YiLCJpYXQiOjE3MTU3MDg1MjQsImV4cCI6MTcxNTcyMjkyNH0.hMqDZPaYrwu3wbHeGKZTPg0kuRuATL6iiIxB6es1cb8",
        },
    })
        .then((result) => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));



});