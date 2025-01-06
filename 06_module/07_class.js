class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  welcome() {
    console.log(`Hello ${this.name}, Welcome to the class`);
  }
}

let Person1 = new Person("John", 25);
let Person2 = new Person("Manu", 25);
console.log(Person1.welcome());
console.log(Person2);
