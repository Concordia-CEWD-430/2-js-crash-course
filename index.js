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

console.log(countries.map((c) => "Great " + c));
console.log(countries);