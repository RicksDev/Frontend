const main = document.querySelector(".main");

// // Array com os dias da semana e os caminhos das imagens
// // Array com os dias da semana e os caminhos das imagens
// console.log("Script carregado");

// // Array com os dias da semana e os caminhos das imagens
// const weatherData = [
//     { day: "MON", image: "../img/japao.jpg" },
//     { day: "TUE", image: "img_weather_cloud.jpg" },
//     { day: "WED", image: "img_weather_clouds.jpg" },
// ];

// // Container onde os cartões serão adicionados
// const container = document.createElement("div");
// container.id = "weather-container";
// document.body.appendChild(container);
// console.log("Container criado");

// // Para cada elemento do array, criar e adicionar um cartão de clima
// weatherData.forEach((data) => {
//     // Criar elementos
//     const card = document.createElement("div");
//     card.classList.add("w3-card-4");

//     const displayContainer = document.createElement("div");
//     displayContainer.classList.add("w3-display-container", "w3-text-white");

//     const img = document.createElement("img");
//     img.src = data.image;
//     img.alt = "Weather Image";
//     img.style.width = "100%";

//     const text = document.createElement("div");
//     text.classList.add("w3-xlarge", "w3-display-bottomleft", "w3-padding");
//     text.textContent = `${data.day} 60°F`;

//     // Adicionar elementos ao container
//     displayContainer.appendChild(img);
//     displayContainer.appendChild(text);
//     card.appendChild(displayContainer);

//     // Adicionar cartão ao container principal
//     container.appendChild(card);
//     console.log(`Cartão ${data.day} adicionado`);
// });

const myItems = [
    {
        image: "src/img/japao.jpg",
        nome: "Japão",
        temperatura: "30°C",
        diaSemana: "Segunda",
        iconeTempo1: "/src/img/icone-sol.png",
        iconeTempo2: "/src/img/nublado.png",
        iconeTempo3: "/src/img/chuva.png"
    },
    {
        image: "src/img/londres.jpg",
        nome: "Londres",
        temperatura: "13°C",
        diaSemana: "Quarta",
        iconeTempo1: "/src/img/icone-sol.png",
        iconeTempo2: "/src/img/nublado.png",
        iconeTempo3: "/src/img/chuva.png"
    },
    {
        image: "src/img/suiça.jpg",
        nome: "Suiça",
        temperatura: "-3°C",
        diaSemana: "Terça",
        iconeTempo1: "/src/img/icone-sol.png",
        iconeTempo2: "/src/img/nublado.png",
        iconeTempo3: "/src/img/chuva.png"
    },
    {
        image: "../img/rioDeJaneiro.jpeg",
        nome: "Rio de Janeiro",
        temperatura: "42°C",
        diaSemana: "Segunda",
        iconeTempo1: "/src/img/icone-sol.png",
        iconeTempo2: "/src/img/nublado.png",
        iconeTempo3: "/src/img/chuva.png"
    },
    {
        image: "../img/frança.webp",
        nome: "França",
        temperatura: "19°C",
        diaSemana: "Quinta",
        iconeTempo1: "/src/img/icone-sol.png",
        iconeTempo2: "/src/img/nublado.png",
        iconeTempo3: "/src/img/chuva.png"
    },
    {
        image: "",
        nome: "",
        temperatura: "",
        diaSemana: "",
        iconeTempo: "",
    },
];

myItems.forEach((item) => {
    const myCard = document.createElement("div");
    myCard.className = "w3-card-4 w3-margin";
    myCard.style.width = "50%";

    const card = document.createElement("div");
    card.className = "w3-display-container w3-text-white";
    myCard.appendChild(card);

    const img = document.createElement("img");
    img.src = item.image;
    card.appendChild(img);

    const titulo = document.createElement("div");
    titulo.className = 'w3-xlarge w3-display-bottomleft w3-padding';
    card.appendChild(titulo);

    const dias = document.createElement("div");
    dias.className = 'w3-row';
    myCard.appendChild(dias);

    const diasSemana = document.createElement("div");
    diasSemana.className = 'w3-third w3-center';
    dias.appendChild(diasSemana);

    const H3 = document.createElement("h3");
    H3.innerHTML = "Seg";
    dias.appendChild(H3);

    const firstIcon = document.createElement("img");
    firstIcon.src = item.iconeTempo1;
    firstIcon.src = item.iconeTempo2;
    firstIcon.src = item.iconeTempo3;
    diasSemana.appendChild(firstIcon);

    const H3Two = document.createElement("h3");
    H3Two.innerHTML = "Ter";
    dias.appendChild(H3Two);

    const secondIcon = document.createElement("img");
    secondIcon.src = item.iconeTempo1;
    secondIcon.src = item.iconeTempo2;
    secondIcon.src = item.iconeTempo3;
    diasSemana.appendChild(secondIcon);

    const H3Three = document.createElement("h3");
    H3Three.innerHTML = "Qua";
    dias.appendChild(H3Three);

    const threeIcon = document.createElement("img");
    threeIcon.src = item.iconeTempo1;
    threeIcon.src = item.iconeTempo2;
    threeIcon.src = item.iconeTempo3;
    diasSemana.appendChild(threeIcon);




    main.appendChild(myCard);
});
