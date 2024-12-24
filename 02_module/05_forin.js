const object = require("underscore/cjs/object.js");

// In javascript the for in loop allows you to loop through the properties of an object
//The statements of code found within the loop body will be executed once for each property of the object

// var colors = {
//   primary: "Blue",
//   secondary: "Red",
//   tertiary: "White",
// };

// for (var color in colors) {
//   console.log(color, "-->", colors[color]);
// }

var colors = ["yellow", "green", "pink"];
for (var color in colors) {
  console.log(color, "-->", colors[color]);
}
