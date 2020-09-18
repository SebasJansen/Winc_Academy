const movieObject = {
    title: "Pulp Fiction",
    duration: 178,
    stars: [
        "Vincent Vega",
        "Jules Winnfiels",
        "Butch Coolidge"
    ]
}

function printInfo(movieObject) {
    console.log(movieObject.title + " lasts for " + movieObject.duration + " minutes. Stars: " + movieObject.stars + ".");
}

printInfo(movieObject);