let itemPrice = 100;
let taxAmount = 15;

function printBill(price, tax) {
    return "Your total will be $" + (price + tax) + ".";
}

console.log(printBill(itemPrice, taxAmount));