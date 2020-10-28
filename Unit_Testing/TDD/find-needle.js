const findNeedle = function(words) {
    // Schrijf hier de functie...
    const positionNeedle = words.findIndex(word => word === 'needle');
    return positionNeedle;
};

module.exports = findNeedle;