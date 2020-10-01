console.log(movies);
let cards = document.getElementsByClassName("card");
let cardContainer = document.querySelector("#container");
console.log(cards);
console.log(cardContainer);
cardContainer.innerHTML = ("");
movies.forEach(movie => {
    cardString = `<div class="card"><img src="` + movie.Poster + `"></div>`;
    console.log(cardString);
    //let card = document.createElement(cardString)
    cardContainer.innerHTML += (cardString);
    console.log(cardContainer);
});
