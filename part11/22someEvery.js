const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.includes(-130));
// returns true if any element is exactly equal

// /but some returns true if there is atleast one element present in the array that satisfies a condition

const anyDepositsGreaterThan5000 = movements.some((movmnt) => movmnt > 5000);
console.log(anyDepositsGreaterThan5000);
const anyDepositsGreaterThan2500 = movements.some((e) => e > 2500);
console.log(anyDepositsGreaterThan2500);