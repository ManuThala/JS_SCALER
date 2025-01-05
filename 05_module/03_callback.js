// function printFirstName(firstName, callback) {
//   console.log(firstName);
//   callback("Ls");
// }

// function printLastName(lastName) {
//   console.log(lastName);
// }
// printFirstName("Manu", printLastName);

let isEven = (n) => {
  return n % 2 == 0;
};

let checkEven = (even, num) => {
  let res = even(num);
  console.log(`The given number is ${num} and it is even : ${res}`);
};

checkEven(isEven, 20);
