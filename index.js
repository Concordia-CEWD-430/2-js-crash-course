const person = {
  name: "Pranav",
  age: 27,
  introduce() {
    console.log("Hi, this is " + this.name);
  },
};

const countries = ["Canada", "USA", "Mexico"];

// for (const country of countries) {
//   console.log(country);
// }

// const copiedCountries = countries.splice();
// copiedCountries.push("Brazil");

const copiedCountries = [...countries]; // spread operator
copiedCountries.push("Brazil");

console.log(countries);
console.log(copiedCountries);

// const toArray = (a1, a2, a3) => {
//   return [a1, a2, a3];
// };

// console.log(toArray(1, 2, 3));

const toArray = (...a) => {
  return a;
}; // rest operator

console.log(toArray(1, 2, 3, 4));
