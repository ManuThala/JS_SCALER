// we will be given number and we have to check that if the square of that number is even or not

// Imperative code
// let num = 4;
// let iseven;

// if (num % 2 == 0) {
//   iseven = true;
// } else {
//   iseven = false;
// }

// console.log(iseven);

// Declarative way of writing code

const checksquare = (x) => ((x * x) % 2 === 0 ? true : false);

res = checksquare(4);
console.log(res);
