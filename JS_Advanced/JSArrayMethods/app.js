let array = ["nice", "awesome", "tof"];
const addTheWordCool = (array) => {
    console.log("Adding the word cool");
    array.push("cool");
}
// Opdracht A
console.log(array);
addTheWordCool(array);
console.log(array);
// Opdracht B
const amountOfElementsInArray = (array) => {
    return console.log(array.length);
}
amountOfElementsInArray(array);
// Opdracht C
const showFirstOfArray = (array) => {
    return console.log(array[0]);
}
showFirstOfArray(array);
// Opdracht D
const showLastOfArray = (array) => {
    return console.log(array[array.length - 1]);
}
showLastOfArray(array);
// Opdracht E
const sliceFirstElement = (array) => {
    const sliced = array.slice(0, 1);
    console.log(sliced);
}
const spliceFirstElement = (array) => {
    const spliced = array.splice(0, 1);
    console.log(spliced);
}
sliceFirstElement(array);
console.log(array);
spliceFirstElement(array);
console.log(array);
// Opdracht F
const logAllInArray = (array) => {
    console.log(array.join(" "));
}
logAllInArray(array);
// Opdracht G
let array2 = ["nice", "awesome", "tof"];
const addArrayToArray = (array, otherArray) => {
    console.log("First array consists of: ", array);
    console.log("Second array consists of: ", array2);
    console.log("Merging arrays...");
    const array3 = array.concat(otherArray);
    console.log("New array consists of: ", array3);
}
addArrayToArray(array, array2);