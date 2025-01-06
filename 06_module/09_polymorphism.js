// polymorphism
// poly means many and morphism means forms
class Animal {
  sound() {
    console.log("Animal makes diffrent  sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}
class Cat extends Animal {
  sound() {
    console.log("cat  mews");
  }
}

let animal1 = new Animal();
let Pinku = new Dog();
let Tom = new Cat();
animal1.sound();
Pinku.sound();
Tom.sound();
