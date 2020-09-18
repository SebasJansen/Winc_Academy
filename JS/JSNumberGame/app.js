function checkGuess(answer, amountGuesses, guess, playerName) {
    amountGuesses++;
    while (amountGuesses < 5) {
        if (guess === answer) {
            alert("Gefeliciteerd je hebt gewonnen! Je hebt " + amountGuesses + " keer geraden");
            break;
        } else {
            alert("Je hebt fout geraden, voer een nieuw nummer in om nog een keer te raden");
            guess = Number(prompt("Voer hier een nieuw nummer in. Je hebt al " + amountGuesses + " keer geraden."));
            amountGuesses++;
            console.log(guess);
        }
    }
    console.log("person guessed: " + amountGuesses);
    if (amountGuesses == 5) {
        alert("Je hebt te vaak geraden, je hebt " + amountGuesses + " keer geraden");
    }
    console.log("Tot de volgende keer " + playerName);
}
const playerName = prompt("Welkom! Wat is je naam?");
let amountGuesses = 0;
alert("Hey " + playerName);
const gameMinNumber = Number(prompt("Voer het minimale cijfer in"));
const gameMaxNumber = Number(prompt("Voer het maximale cijfer in"));
const gameNumber = Math.floor(Math.random() * (gameMaxNumber - gameMinNumber) + gameMinNumber);
console.log(gameNumber);
const playerGuess = Number(prompt("Voer een nummer in van " + gameMinNumber + " tot " + gameMaxNumber + " om te beginnen met raden..."));
console.log(playerGuess);
checkGuess(gameNumber, amountGuesses, playerGuess, playerName);


