const main = document.getElementById("principal");

const numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(number => {
    const meuH1 = document.createElement('h1');

    main.appendChild(meuH1);

});