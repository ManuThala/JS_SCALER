// The for of statements creates a loop iterating over objects,
// including built in strings, array, array -like objects nodelist and also map and set

// var scores = [60, 76, 88, 99];
// for (const score of scores) {
//   console.log(score);
// }

// method entries

let colors = ["red", "blue", "greeen"];
for (var [index, color] of colors.entries()) {
  console.log(index, "-->", color);
}

//Strings
var str = "manu";
for (c of str) {
  console.log(c);
}

var scores = [12, 35, 67];
for (const element of scores) {
  console.log(element + 5);
}
