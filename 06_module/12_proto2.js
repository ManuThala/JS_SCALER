function Person(_name, _age) {
  this.name = _name;
  this.age = _age;
}

Person.prototype.getNameAndAge = function () {
  console.log(`I am ${this.name} and I am ${this.age} years old`);
};

let person1 = new Person("Lee", 20);
let person2 = new Person("Kim", 25);
console.log(person1);
console.log(person2);
