
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Capturei os dados do form
    const nome = document.getElementById("fnome");
    const phone = document.getElementById("number");
    const email = document.getElementById("email");
    const city = document.getElementById("city");
    const state = document.getElementById("state")
    const password = document.getElementById("password");

    const userData = JSON.stringify({
        name: nome.value,
        phone: phone.value,
        email: email.value,
        city: city.value,
        state: state.value,
        password: password.value,
        image: "",

    });

    fetch("http://10.92.198.38:3001/signup", {
        method: "Post",
        body: userData,
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((result) => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err))





});