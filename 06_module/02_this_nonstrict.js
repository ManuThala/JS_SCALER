// // this insinde a console.log()
// console.log(this); // {}

// // this inside a function in non-strict mode
// function myFunction() {
//   console.log(this);
// }

// myFunction(); // global object

// // this keyword inside object method  in non-strict mode

// const myObject = {
//   name: "manu",
//   age: 25,
//   greet: function () {
//     console.log(this);
//   },
// };

// myObject.greet();
// { name: 'manu', age: 25, greet: [Function: greet] }

// function inside a function in non-strict mode

myObject2 = {
  name: "manu",
  age: 25,
  myfun: function () {
    function greet() {
      console.log(this);
    }
    greet();
  },
};

myObject2.myfun();
