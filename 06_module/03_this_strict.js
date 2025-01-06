"use strict";
// console.log(this); // {}

// function greet() {
//   console.log(this);
// }
// greet(); // undefined

// let obj = {
//   name: "manu",
//   age: 25,
//   greet: function () {
//     console.log(this);
//   },
// };
// obj.greet(); // { name: 'manu', age: 25, greet: [Function: greet] }

let obj = {
  name: "manu",
  age: 25,
  myfun1: function () {
    function greet() {
      console.log(this);
    }
    greet();
  },
};
obj.myfun1(); // undefined
