
    const form = document.getElementById("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        //Capturei os dados do form
        const nome = document.getElementById("fnome");
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        const userData = JSON.stringify({
            name: nome.value,
            email: email.value,
            password: password.value,
        });

        fetch("http://10.92.198.38:8080/auth/signup", {
            method: "Post",
            body: userData,
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((result) => result.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))





    });