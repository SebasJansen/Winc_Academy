// Make DutchSandwhich
//      Get the bread
//      Slice the bread
//      Take one slice of bread
//      Add mayo
//      Add cheese
//      Add Ham
//      Add letuce
//      Add tomato
//      Add one slice of bread

// Function declarations
function makeDutchSandwhich() {
    console.log("Get the bread");
    console.log("Slice the bread");
    console.log("Take one slice of bread");
    console.log("Add mayo");
    console.log("Add cheese");
    console.log("Add ham");
    console.log("Add letuce");
    console.log("Add Tomato");
    console.log("Add one slice of bread");
}
function makeSandwhich(topping) {
    console.log("There you go, a sandwich with " + topping);
}
function calculateDiscountedPrice(totalAmount, discount) {
    return console.log(Math.round(totalAmount - discount));
}
function checkDiscount(totalOrder, discount) {
    if (totalOrder >= 25) {
        console.log("bigger than 25, calculating new price");
        calculateDiscountedPrice(totalOrder, discount);
    } else {
        console.log("less than 25, you pay full price");
        return console.log(totalOrder);
    }
}

// Function calls
makeDutchSandwhich();
makeSandwhich("cheese");
makeSandwhich("ham");
calculateDiscountedPrice(10, 1);
checkDiscount(10, 5);
checkDiscount(26, 5);





