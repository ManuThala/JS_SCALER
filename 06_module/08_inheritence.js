// 1. Inheritence using function constructor and prototype object
class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  welcome() {
    console.log(`Hello ${this.name}`);
  }
}
class Teacher extends Person {
  constructor(_name, _age, _subject) {
    super(_name, _age);
    this.subject = _subject;
  }
  test() {
    console.log(`Hello ${this.name}`);
  }
}
class Student extends Person {
  constructor(_name, _age, _cgpa) {
    super(_name, _age);
    this.subject = _cgpa;
  }
}

// 2. Inheritence using Object.create
let Person1 = new Person("Manu", 25);
let teacher1 = new Teacher("Manu", 25, "Maths");
teacher1.test();
console.log(teacher1);
