// Opdracht A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}
]
function findSpiderman(sName) { 
    return sName.name === 'Spiderman';
}
console.log(superheroes.find(findSpiderman));
// Opdracht B
const intArray = [1, 2, 3, 4, 5, 6];
const doubleArrayValues = (array) => {
    const doubledArray = array.map(x => x * 2);
    console.log(doubledArray);
}
doubleArrayValues(intArray);
// Opdracht C
const intArrayTwo = [1, 2, 3, 4, 5, 6];
const intArrayThree = [1, 12, 3, 4, 15, 6];
const containsBiggerThan10 = (array) => {
    console.log(array.some(element => element > 10));
}
containsBiggerThan10(intArrayTwo);
containsBiggerThan10(intArrayThree);
// Opdracht D
const stringArray = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
const isInTheGreat7 = (array, searchString) => {
    if (array.indexOf(searchString) === -1) {
        return false;
    } else {
        return true;
    }
}
console.log(isInTheGreat7(stringArray, 'Italy'));
// Opdracht E
const intArrayFour = [1, 4, 3, 6, 9, 7, 11];
const tenFold = (array) => {
    let tenFoldArray = [];
    array.forEach(element => {
        tenFoldArray.push(element * 10);
    });
    console.log(tenFoldArray);
}
tenFold(intArrayFour);
// Opdracht F
const intArrayFive = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];
const onlyLessThan100 = (array) => {
    console.log(array.every(element => element < 100));
}
onlyLessThan100(intArrayFive);
// Opdracht G
const intArraySix = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const arrayCountTotal = (array) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(array.reduce(reducer));
}
arrayCountTotal(intArraySix);