const main = document.querySelector(".container");
 
const urlImg = "http://10.92.198.38:8080/";
 
async function getPersons() {
  // Comando Fetch usando async await
  const response = await fetch("http://10.92.198.38:8080/feed/posts");
 
  // Trasfromando JSON em um Objeto Utilizavél
  const posts = await response.json();
 
  console.log(posts);
}
 
fetch("http://10.92.198.38:8080/feed/posts")
  .then((rest) => rest.json())
  .then((data) => cards(data));
 
function cards(data) {
  console.log(data);
 
  const arrayDatas = data.posts;
 
  arrayDatas.forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
 
    <div class="banner"><img
    src="${urlImg + element.imageUrl}"
  /></div>
    <div class="content">
      <div class="texts">
        <h3 class="name">${element.title}</h3>
        <h5 class="species">${element.content}</h5>
 
      </div>
    </div>
  `;
    main.appendChild(card);
  });
}
 

