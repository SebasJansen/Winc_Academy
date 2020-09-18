const maxAge = 80;
function calculateSupply(age, dailyAmount) {
    const yearsLeft = maxAge - age;
    const totalNeeded = yearsLeft * 365 * dailyAmount;
    console.log("You will need " + totalNeeded + " to last you until the ripe old age of " + maxAge);
}

calculateSupply(40, 2);
calculateSupply(79, 1);
calculateSupply(50, 15);