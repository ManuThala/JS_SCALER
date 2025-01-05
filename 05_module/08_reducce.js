// reduce  method is used to reduce the array to a single value
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

let num = [1, 2, 3, 4];

let sum = num.reduce((acc, val) => {
  let updatesum = acc + val;
  return updatesum;
}, 0);

console.log(sum); // 55

let mul = num.reduce((acc, val) => {
  let updatesum = acc * val;
  return updatesum;
}, 1);

console.log(mul);
