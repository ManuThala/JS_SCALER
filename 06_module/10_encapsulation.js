function Person(_name, _age) {
  this.name = _name;
  this.age = _age;
  this.getName = function () {
    return this.name;
  };
}
let person1 = new Person("manu", 25);
person1.name = "Doe";
// console.log(person1); // Doe
console.log(person1.getName()); // Doe
