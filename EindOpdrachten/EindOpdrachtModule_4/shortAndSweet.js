const cardContainer = document.querySelector("#container");
const radioButtons = document.querySelectorAll("input");
cardContainer.innerHTML = ("");
//Add movies to DOM
function addMoviesToDom(array) {
    array.forEach(movie => {
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', movie.Poster)
        const divElement = document.createElement('div');
        divElement.classList.add('card')
        divElement.appendChild(imgElement);
        cardContainer.appendChild(divElement);
        const imdbLink = movie.imdbID;
        addLinkToPoster(divElement, imdbLink);
    });
}
//Add imdb link to poster
function addLinkToPoster(posterElement, imdbLink) {
    posterElement.addEventListener('click', () => {
        window.open("https://www.imdb.com/title/" + imdbLink + "/");
    });
}
//filter-new
const getNewestMovies = () => {
    const moviesFrom2014AndLater = movies.filter(x => parseInt(x.Year) >= 2014);
    cardContainer.innerHTML = ("");
    addMoviesToDom(moviesFrom2014AndLater);
}
//filter-name
const getMoviesContainingName = (movieName) => {
    const filteredMovies = movies.filter(x => x.Title.indexOf(movieName) !== -1);
    cardContainer.innerHTML = ("");
    addMoviesToDom(filteredMovies);
}
radioButtons.forEach(radioButton => {
    switch (radioButton.id) {
        case 'filter-new':
            radioButton.addEventListener('change', getNewestMovies);
            radioButton.checked = false;
            break;
        case 'filter-avengers':
            radioButton.addEventListener('change', () => {
                getMoviesContainingName('Avengers');
            });
            radioButton.checked = false;
            break;
        case 'filter-xmen':
            radioButton.addEventListener('change', () => {
                getMoviesContainingName('X-Men');
            });
            radioButton.checked = false;
            break;
        case 'filter-princess':
            radioButton.addEventListener('change', () => {
                getMoviesContainingName('Princess');
            });
            radioButton.checked = false;
            break;
        case 'filter-batman':
            radioButton.addEventListener('change', () => {
                getMoviesContainingName('Batman');
            });
            radioButton.checked = false;
            break;
        default:
            console.log("No radiobuttons fitting the criteria");
            break;
    }
});
//Initial setup
addMoviesToDom(movies);