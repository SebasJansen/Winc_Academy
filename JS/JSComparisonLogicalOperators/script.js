const userFirstName = prompt("What is your firstname?");
const userLastName = prompt("What is your lastname?");
const userAge = Number(prompt("What is your age?"));
let isFemale;
let answerFemale = prompt("If you are a lady say yes or yeah");
if (answerFemale.indexOf("yes") === -1 && answerFemale.indexOf("yeah") === -1) {
    isFemale = false;
}
else {
    isFemale = true;
}
console.log(answerFemale);
console.log(isFemale);
let isBOB;
let answerBOB = prompt("If you are the driver tonight say yes or yeah");
if (answerBOB.indexOf("yes") === -1 && answerBOB.indexOf("yeah") === -1) {
    isBOB = false;
}
else {
    isBOB = true;
}
console.log(answerBOB);
console.log(isBOB);
if(userAge < 18) {
    alert("You are not old enough to be here " + userFirstName + " " + userLastName + "! Please remove yourself from the line.");
}
else if(userAge > 18 && userAge < 21) {
    alert("You can be here " + userFirstName + " " + userLastName + "! But you cannot drink strong drinks!");
}
else{
    alert("Have a great time " + userFirstName + " " + userLastName + "! Feel free to check out our large assortiment of drinks!");
}
if(userAge > 18 && userAge < 25) {
    alert("You are between 18 and 25 " + userFirstName + " " + userLastName + "! This means you'll get 50% off today!");
}
if (userFirstName.indexOf("bram") === -1 && userFirstName.indexOf("sarah") === -1 && userFirstName.indexOf("Bram") === -1 && userFirstName.indexOf("Sarah") === -1) {
    // if(userFirstName === ("bram") || userFirstName === ("sarah") || userFirstName === ("Bram") || userFirstName === ("Sarah")) {}
    alert("Our bar is 50 years in existence but your name is " + userFirstName + ", so you will not get a free beer...")
}
else{
    alert("Our bar is 50 years in existence and your name is " + userFirstName + ", so you get a free beer!")
}
const totalAmount = Number(prompt("How much money did you spend on drinks this evening?"));
if (totalAmount >= 100) {
    alert("Our bar is 50 years in existence and you spend over 100 euro's! Have a champagne bottle on the house!")
} else if (totalAmount >= 50) {
    alert("Our bar is 50 years in existence and you spend over 50 euro's! Have a plate of nachos on the house!")
} else if (totalAmount >= 25) {
    alert("Our bar is 50 years in existence and you spend over 25 euro's! Have a plate of vega-bitterballen on the house!")
} else {
    alert("Our bar is 50 years in existence, if you had spend more than 25 euro's we would've had something for you.")
}
if (isFemale == true) {
    alert("Today is ladiesnight, so the first 3 drinks are on the house, have a good time!");
} else {
    alert("Today is ladiesnight, so the first 3 drinks are on the house, sadly you still have to pay...");
}
let isDrunk;
let answerDrunk = prompt("If you had an alcoholic beverage tonight say yes or yeah");
if (answerDrunk.indexOf("yes") === -1 && answerDrunk.indexOf("yeah") === -1) {
    isDrunk = false;
}
else {
    isDrunk = true;
}
console.log(answerDrunk);
console.log(isDrunk);
if (isDrunk == true && isBOB == true) {
    alert("I thought you were the driver, yet you did drink, let me call you a cap.");
} else if (isDrunk == false && isBOB == true) {
    alert("Have a safe trip to home, I hope you had a good time at my bar!");
} else {
    alert("You had a few too many, good thing you aren't driving.");
}