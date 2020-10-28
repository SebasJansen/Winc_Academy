// password is korter dan 9 karakters
const verifyPasswordLength = (password) => {
    if (password.length < 9) {
        return true;
    } else {
        return false;
    }
}
// password is niet null
const verifyPasswordIsNotNull = (password) => {
    if (typeof password !== null) {
        return true;
    } else {
        return false;
    }
}
// password heeft 1 of meer uppercase karakters
const verifyPasswordContainsUppercaseCharacters = (password) => {
    const regex = /[A-Z]/;
    found = password.match(regex);
    if (found === null) {
        return false;
    }
    else {
        return true;
    }
}
    // password heeft 1 of meer lowercase karakters
const verifyPasswordContainsLowercaseCharacters = (password) => {
    const regex = /[a-z]/;
    found = password.match(regex);
    if (found === null) {
        return false;
    }
    else {
        return true;
    }
}
// password heeft 1 of meer cijfers
const verifyPasswordContainsNumbers = (password) => {
    const regex = /[0-9]/;
    found = password.match(regex);
    if (found === null) {
        return false;
    }
    else {
        return true;
    }
}
const minimumConditionsReached = conditions => {
    // conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};
const verifyPassword = (password) => {
    const conditions = [
        verifyPasswordIsNotNull(password),
        verifyPasswordLength(password),
        verifyPasswordContainsUppercaseCharacters(password),
        verifyPasswordContainsLowercaseCharacters(password),
        verifyPasswordContainsNumbers(password)
    ];
    const result =
        minimumConditionsReached(conditions) && verifyPasswordContainsLowercaseCharacters(password);

    return result;
}

module.exports = {
    verifyPasswordLength,
    verifyPasswordIsNotNull,
    verifyPasswordContainsUppercaseCharacters,
    verifyPasswordContainsLowercaseCharacters,
    verifyPasswordContainsNumbers,
    verifyPassword
};