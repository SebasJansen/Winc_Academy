function register() {
    const userFirstName = prompt("What is your firstname?");
    const userLastName = prompt("What is your lastname?");
    const userAge = Number(prompt("What is your age?"));
    var isFemale;
    var answerFemale = prompt("If you are a lady say yes or yeah");
    if (answerFemale.indexOf("yes") === -1 && answerFemale.indexOf("yeah") === -1) {
        isFemale = false;
    }
    else {
        isFemale = true;
    }
    console.log(answerFemale);
    console.log(isFemale);
    var isBOB;
    var answerBOB = prompt("If you are the driver tonight say yes or yeah");
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
    if(userAge < 0) {
        alert("You are not even born " + userFirstName + " " + userLastName + "! ");
    }
    if(userAge === "10") {
        alert("But if you are exactly 10 years old, I'll give you a free pass for your B-day, don't tell anyone!");
    }
    if (isFemale == true) {
        alert("Today is ladiesnight, so the first 3 drinks are on the house, have a good time!");
    } else {
        alert("Today is ladiesnight, so the first 3 drinks are on the house, sadly you still have to pay...");
    }
    var isDrunk;
    var answerDrunk = prompt("If you had an alcoholic beverage tonight say yes or yeah");
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
}
register();
console.log("tweede keer");
register();