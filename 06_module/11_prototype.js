let obj = {};

console.log(obj);

let person1 = {
  name: "Lee",
  age: 20,
};
console.log(person1);
console.log(person1.hasOwnProperty("name"));
console.log(person1.hasOwnProperty("gender"));

// constructor function

function person(_name, _age) {
  this.name = _name;
  this.age = _age;
}

let person2 = new person("Manu", 20);
console.log(person2);
