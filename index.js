let itemPrice = 100;
let taxAmount = 15;

function printBill(price, tax) {
    console.log("Your total will be $" + (price + tax) + ".");
}

printBill(itemPrice, taxAmount);