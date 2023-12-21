const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.includes(-130));
// returns true if any element is exactly equal

// /but some returns true if there is atleast one element present in the array that satisfies a condition

const anyDepositsGreaterThan5000 = movements.some((movmnt) => movmnt > 5000);
console.log(anyDepositsGreaterThan5000);
const anyDepositsGreaterThan2500 = movements.some((e) => e > 2500);
console.log(anyDepositsGreaterThan2500);

// EVERY
// in every method, if every single element of array satisfies the condition set then only true is returned,
// else false is returned
console.log("every")
console.log(movements.every(mov => mov > 0));

const movements2= [430, 1000, 700, 50, 90];
console.log(movements2.every(mov => mov > 0));

// separate callback
const positiveDeposit = mov => mov > 0;
console.log(movements.every(positiveDeposit));
console.log(movements2.every(positiveDeposit));
const filtered = movements.filter(positiveDeposit);
const filtered2 = movements2.filter(positiveDeposit);
console.log(filtered);
console.log(filtered2);
const negativeDeposit = mov => mov < 0;
console.log(movements.every(negativeDeposit));
console.log(movements2.every(negativeDeposit));
const filtered11 = movements.filter(negativeDeposit);
const filtered22 = movements2.filter(negativeDeposit);
console.log(filtered11);
console.log(filtered22);