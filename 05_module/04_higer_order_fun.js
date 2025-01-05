let a = [1, 2, 3, 4, 5];

// Normal flow
// let squared = [];
// for (let i = 0; i < a.length; i++) {
//   squared.push(a[i] * a[i]);
// }
// console.log(squared);

// Using map
// map will loop through the array and perform sepcific operation on each element
// map will return a new array everytime

// let squaredd = a.map((n) => {
//   return n * n;
// });
// console.log(squaredd);

let transactions = [1000, 2000, 3000, 4000, 5000];
let dollr = 80;
// let doollrs = transactions.map((rs) => {
//   return (rs / dollr).toFixed(0);
// });
// console.log(doollrs);

let foreach = transactions.forEach((amount) => {
  console.log(amount / dollr);
});

console.log(foreach);
