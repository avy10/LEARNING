// BigInt was introduced in ES2020
// out of 64 bits, only 53 are used to represent a number, the other is used to store sign, decimal location etc
console.log(`Biggest Num in JS : ${2 ** 53 - 1}`);
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
// the above 4 operations are non reliable / unsafe

console.log(4838430248342043823408394839483204);
// again unsafe
// Numeric literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
// to make that number a BigInt, use prefix n
console.log(4838430248342043823408394839483204n);
// so adding n as prefix transforms a regular number into a bigInt number

// OR
// we can use the BigInt function

console.log(BigInt(4838430248342043823408394839483204));
// without the n our output is again unrealiable. why because before we pass that huge num to BigInt, JS still has to store that num somewhere

console.log(BigInt(4838430248342043823408394839483204n));
console.log(BigInt(48384302));

console.log(4838430248342043823408394839483204n + 1000000000000000000000000000000000n);
console.log(4838430248342043823408394839483204n - 1000000000000000000000000000000000n);
console.log(4838430248342043823408394839483204n * 1000000000000000000000000000000000n);
console.log(4838430248342043823408394839483204n / 1000000000000000000000000000000000n);
console.log(4838430248342043823408394839483204n % 1000000000000000000000000000000000n);

// It is not possible to mix bigint with regular numbers while doing regular mathematical operations
const huge = 20289830237283728378237n;
const num = 23;
// console.log(huge * num); // Cannot mix BigInt and other types, use explicit conversions
// console.log(Math.sqrt(16n)); // Cannot convert a BigInt value to a number
console.log(huge * BigInt(num));

// however, it is possible to compare BigInt and regular numbers using comparison operators
// or when we do + operator with string i.e. STRING CONCATENTATION

console.log(20n > 15);
console.log(20n == 20);
console.log(20n === 20);
console.log(typeof 20n);

const hugeNumStr = huge + " is REALLY big!!!";
console.log(hugeNumStr); 


// NOTE:
console.log(10/3)
console.log()