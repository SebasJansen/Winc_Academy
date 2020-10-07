console.log(movies);
//let cards = document.getElementsByClassName("card");
let cardContainer = document.querySelector("#container");
const radioButtons = document.querySelectorAll("input");
console.log(radioButtons);
console.log(cardContainer);
cardContainer.innerHTML = ("");
function addMoviesToDom(array) {
    array.forEach(movie => {
        cardString = `<div class="card"><img src="` + movie.Poster + `"></div>`;
        //let card = document.createElement(cardString)
        cardContainer.innerHTML += (cardString);
    });
}
function addLinkToPoster() {
    const displayedMovies = document.querySelectorAll("img");
    console.log(displayedMovies);
}
addMoviesToDom(movies);
//filter-new
const getNewestMovies = () => {
    const moviesFrom2014AndLater = movies.filter(x => parseInt(x.Year) >= 2014);
    console.log("Array of movies from 2014 and later ");
    console.log(moviesFrom2014AndLater);
    cardContainer.innerHTML = ("");
    addMoviesToDom(moviesFrom2014AndLater);
}
//filter-avengers
const getMoviesWithAvengers = () => {
    const moviesAvengers = movies.filter(x => x.Title.indexOf("Avengers") !== -1);
    console.log("Array of movies which include Avengers ");
    console.log(moviesAvengers);
    cardContainer.innerHTML = ("");
    addMoviesToDom(moviesAvengers);
}
//filter-using include
const getMoviesWithAvengers2 = () => {
    const moviesAvengers2 = movies.filter(x => x.Title.includes("Avengers") == true);
    console.log("Array of movies which include Avengers ");
    console.log(moviesAvengers2);
    cardContainer.innerHTML = ("");
    addMoviesToDom(moviesAvengers2);
}
//filter-xmen
const getMoviesWithXmen = () => {
    const moviesXmen = movies.filter(x => x.Title.indexOf("X-Men") !== -1);
    console.log("Array of movies which include X-Men ");
    console.log(moviesXmen);
    cardContainer.innerHTML = ("");
    addMoviesToDom(moviesXmen);
}
//filter-princess
const getMoviesWithPrincess = () => {
    const moviesPrincess = movies.filter(x => x.Title.indexOf("Princess") !== -1);
    console.log("Array of movies which include Princess ");
    console.log(moviesPrincess);
    cardContainer.innerHTML = ("");
    addMoviesToDom(moviesPrincess);
}
//filter-batman
const getMoviesWithBatman = () => {
    const moviesBatman = movies.filter(x => x.Title.indexOf("Batman") !== -1);
    console.log("Array of movies which include Batman ");
    console.log(moviesBatman);
    cardContainer.innerHTML = ("");
    addMoviesToDom(moviesBatman);
}
//filter-name
const getMoviesContainingName = (movieName) => {
    const filteredMovies = movies.filter(x => x.Title.indexOf(movieName) !== -1);
    console.log("Array of movies which include " + movieName);
    console.log(filteredMovies);
    cardContainer.innerHTML = ("");
    addMoviesToDom(filteredMovies);
}

radioButtons.forEach(radioButton => {
    switch (radioButton.id) {
        case 'filter-new':
            radioButton.addEventListener('change', getNewestMovies);
            break;
        case 'filter-avengers':
            //radioButton.addEventListener('change', getMoviesWithAvengers);
            radioButton.addEventListener('change', () => {
                getMoviesContainingName('Avengers');
            });
            break;
        case 'filter-xmen':
            //radioButton.addEventListener('change', getMoviesWithXmen);
            radioButton.addEventListener('change', () => {
                getMoviesContainingName('X-Men');
            });
            break;
        case 'filter-princess':
            //radioButton.addEventListener('change', getMoviesWithPrincess);
            radioButton.addEventListener('change', () => {
                getMoviesContainingName('Princess');
            });
            break;
        case 'filter-batman':
            //radioButton.addEventListener('change', getMoviesWithBatman);
            radioButton.addEventListener('change', () => {
                getMoviesContainingName('Batman');
            });
            break;
        default:
            console.log("No radiobuttons fitting the criteria");
            break;
    }
});