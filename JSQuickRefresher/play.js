var name = "Max";
var age = 24;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}
//console.log(summarizeUser(name,age,hasHobbies))

//let = mutable
//const =immutable
let userName = "ilhan";
let userAge = 24;
const hasHobbiesUser = true;

const newSummurizeUser = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies
  );
};

console.log(newSummurizeUser(userName, userAge, hasHobbiesUser));

const add = (a, b) => {
  return a + b;
};

console.log(add(125, 1145));

const addOne = (a) => a + 1;

console.log(addOne(5));

const person = {
  name: "İlhan Enes",
  age: 24,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();

console.log(person);

const hobbies = ["Sports", "Cooking"];

for (let hobby of hobbies) {
  console.log(hobby);
}

hobbies.forEach((x) => console.log(x));
console.log(
  hobbies.map((hobby) => {
    return "Hobby: " + hobby;
  })
);
