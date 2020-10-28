const addOne = function(numbers) {
    // Schrijf hier de functie...
    const arrayValuesPlusOne = numbers.map(x => x + 1);
    return arrayValuesPlusOne;
}

module.exports = addOne;