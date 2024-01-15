let itemPrice = 100;
let taxAmount = 15;

const printBill = (price, tax) => {
  return "Your total will be $" + (price + tax) + ".";
};

// const add = (a, b) => {
//     return a + b;
// }

const add = (a, b) => a + b;

console.log(add(2, 3));

console.log(printBill(itemPrice, taxAmount));
