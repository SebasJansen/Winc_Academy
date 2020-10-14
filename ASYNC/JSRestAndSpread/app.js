// Func 1
const addNumbers = (...arguments) => {
    return arguments.reduce((accumulator, value) => {
        return accumulator + value;
    });
}
console.log(addNumbers(1,2,3,4,5));
console.log(addNumbers(2,3,4,5));
// Func 2
const addNumbers2 = (x, y, z) => {
    return x + y + z;
}
const numbers = [1,2,3];
console.log(addNumbers2(...numbers));