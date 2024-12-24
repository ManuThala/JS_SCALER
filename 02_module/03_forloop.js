// loops are the statements that we can use to control a flow of the program and to do some repetatives

// var a = "Hello world";

// for (var i = 1; i <= 10; i++) {
//   console.log(a, i);
// }

// you have an arrry you have to sqaure each element of that array

var arr = [2, 3, 5, 7, 8, 9];
var squared = [];
for (var i = 0; i < arr.length; i++) {
  squared.push(arr[i] * arr[i]);
}
console.log(squared);
