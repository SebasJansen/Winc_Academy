let person = {
    name: 'Sebas',
    age: 22
};

console.log(person.name);
console.log(person['age']);

let evaluations = [7, 10, 9];
console.log(evaluations);

let colors = [];
colors.push("green");
colors.push("blue", "red");

console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[colors.length - 1]);

colors.push("yellow");
colors.push(5);

let object = {
    greeting: "hi, I am an object"
};

colors.push(object);

console.log(colors[colors.length - 1]);