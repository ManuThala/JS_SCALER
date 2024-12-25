// var a = 21;

const { LONG } = require("mysql/lib/protocol/constants/types");

var a = 35; //redeclaration of a variable

console.log(a);

if (a === 35) {
  var b = 40;
  console.log(b);
}

// variables declared with var keword are not block scoped they are funtion scoped
console.log(b);

function log() {
  var c = 200;
  console.log(c);
}
log();
console.log(c);
