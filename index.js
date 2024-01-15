const person = {
  name: "Pranav",
  age: 27,
  introduce() {
    console.log("Hi, this is " + this.name);
  },
};

person.introduce();
