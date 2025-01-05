// let arr = [
//   { name: "A", Age: "14", gender: "M" },
//   { name: "B", Age: "24", gender: "M" },
//   { name: "C", Age: "34", gender: "F" },
//   { name: "D", Age: "44", gender: "F" },
//   { name: "E", Age: "54", gender: "M" },
//   { name: "F", Age: "64", gender: "F" },
// ];

// // Age of all the men in the array

// // let males = arr.filter((obj) => {
// //   return obj.gender === "M";
// // });

// // let agesofmales = males.map((n) => {
// //   return n.Age;
// // });

// // console.log(males);
// // console.log(agesofmales);

// let males = arr
//   .filter((obj) => {
//     return obj.gender === "M";
//   })
//   .map((males) => {
//     return males.Age;
//   });

let transactions = [1000, 2000, 3000, 4000, 5000, -849, -218];

let positivesum = transactions
  .filter((n) => {
    return n > 0;
  })
  .reduce((acc, positivesum) => {
    let sum = 0;
    return (sum = acc + positivesum);
  }, 0);

console.log(positivesum);
