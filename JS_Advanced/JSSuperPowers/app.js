const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
]
console.log(superheroes);
// Opdracht 2.1
console.log("Opdracht 2.1");
const superHeroNames = superheroes.map(x => x.name);
console.log(superHeroNames);
// Opdracht 2.2
console.log("Opdracht 2.2");
const superHeroLightWeights = superheroes.filter(x => x.weight < 190);
console.log(superHeroLightWeights);
// Opdracht 2.3
console.log("Opdracht 2.3");
const superHeroMidWeights = superheroes.filter(x => x.weight == 200).map(x => x.name);
console.log(superHeroMidWeights);
// Opdracht 2.4
console.log("Opdracht 2.4");
const superHeroFirstAppearance = superheroes.map(x => x.name + ": " + x.first_appearance);
console.log(superHeroFirstAppearance);
// Opdracht 2.5
console.log("Opdracht 2.5");
const getSuperHeroByPublisher = (array, searchString) => {
    const superHeroesByPublisher = array.filter(x => x.publisher == searchString).map(x => x.name);
    console.log("Array of superheroes by " + searchString, superHeroesByPublisher);
}
getSuperHeroByPublisher(superheroes, "DC Comics");
getSuperHeroByPublisher(superheroes, "Marvel Comics");
// Opdracht 2.6
console.log("Opdracht 2.6");
const superHeroesDC = superheroes.filter(x => x.publisher == "DC Comics").map(x => x);
const superHeroesMarvel = superheroes.filter(x => x.publisher == "Marvel Comics").map(x => x);
console.log(superHeroesDC);
console.log(superHeroesMarvel);
const calcTotalWeight = (array) => {
    const superHeroWeights = array.map(x => x.weight);
    console.log(superHeroWeights);
    const superHeroWeightsParsed = superHeroWeights.filter(v => !isNaN(v));
    console.log(superHeroWeightsParsed);
    const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
    console.log(superHeroWeightsParsed.reduce(reducer));
}
calcTotalWeight(superHeroesDC);
// Opdracht 2.7
console.log("Opdracht 2.7");
calcTotalWeight(superHeroesMarvel);
// Opdracht 2.8
console.log("Opdracht 2.8");
const getSuperHeroByWeight = (array, searchWeight) => {
    const superHeroesByWeight = array.filter(x => x.weight == searchWeight).map(x => x.name);
    console.log("Array of superheroes with a weight of " + searchWeight, superHeroesByWeight);
}
const calcHeaviestWeight = (array) => {
    const superHeroWeights = array.map(x => x.weight);
    console.log(superHeroWeights);
    const superHeroWeightsParsed = superHeroWeights.filter(v => !isNaN(v));
    console.log(superHeroWeightsParsed);
    const deducer = (accumulator, currentValue) => {
        //console.log(accumulator, currentValue);
        if (parseInt(currentValue) > parseInt(accumulator)) {
            //console.log(currentValue + " is higher than the current, which is " + accumulator);
            accumulator = parseInt(currentValue);
            return(accumulator);
        }
        else{
            //console.log(currentValue + " is not higher than the current, which is " + accumulator);
            return(accumulator);
        }
    };
    const heaviestHeroWeight = superHeroWeightsParsed.reduce(deducer);
    console.log("Heaviest weight is " + heaviestHeroWeight);
    getSuperHeroByWeight(array, heaviestHeroWeight);
}
calcHeaviestWeight(superheroes);
console.log("Test with other weight");
getSuperHeroByWeight(superheroes, 200);
