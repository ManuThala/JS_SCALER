// console.log(this);

// function greet() {
//   console.log(this);
// }
// greet(); // undefined

// obj = {
//   name: "manu",
//   greet: function () {
//     console.log(this);
//   },
// };

// obj.greet(); // { name: 'manu', greet: [Function: greet] }

obj = {
  name: "manu",
  greet: function () {
    function myfn2() {
      console.log(this);
    }
    myfn2();
  },
};

obj.greet();
