// some method returns true if at least one element in the array satisfies the condition

let transactions = [1000, 2000, 3000, 4000, 890, 5000];

let isThereAnyWithdrawal = transactions.some((n) => {
  return n < 0;
});
console.log(isThereAnyWithdrawal);

// every method returns true if all the elements in the array satisfies the condition

let isAllPositive = transactions.every((n) => {
  return n > 0;
});
console.log(isAllPositive);
