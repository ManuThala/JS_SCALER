// constructor
function createCar(_name, _company, _color) {
  this.name = _name;
  this.company = _company;
  this.color = _color;
  this.drive = function () {
    console.log(`I am driving ${this.name} and its of ${this.color}`);
  };
}

let car1 = new createCar("Audi", "Audi", "Black");
let car2 = new createCar("X4", "BMW", "White");

console.log(car1.drive());
console.log(car2);
