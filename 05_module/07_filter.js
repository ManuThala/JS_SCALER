// filter method returns a new array with the elements that satisfy the condition

let transactions = [1000, 2000, 3000, 4000, -890, 5000];

let withdrawn = transactions.filter((n) => {
  return n % 50 === 0;
});
console.log(withdrawn);
