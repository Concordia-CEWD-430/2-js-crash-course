const person = {
  name: "Pranav",
  age: 27,
  introduce() {
    console.log("Hi, this is " + this.name);
  },
};

// const printName = (p) => {
//   console.log(p.name);
// };

// printName(person);

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name);
console.log(age);

const fruits = ["apple", "orange", "grapes"];
const [f1, f2] = fruits;

console.log(f1, f2);
