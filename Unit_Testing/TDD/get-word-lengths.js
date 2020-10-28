const getWordLengths = function(someWords) {
    //Schrijf je functie...
    const arrayValuesLength = someWords.map(x => x.length);
    return arrayValuesLength;
};

module.exports = getWordLengths;