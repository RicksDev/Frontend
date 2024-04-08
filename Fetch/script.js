//fetch =>


/*
async function getPets() {

    //Comando fetch usando async e await
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=1");
    const pets = await response.json();
    console.log(pets.results);
};
*/

//Outra forma de fazer
//Vai no servidor do rick, pegue as páginas, converta em Json e me mostre as informações.
//then = então
fetch("https://rickandmortyapi.com/api/character/?page=1")
.then(rest => rest.json())
.then(data => cards(data));

function cards(data) {
    //Criar os cards de forma automática
}



