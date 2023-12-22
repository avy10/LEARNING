// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////

// I already know all numbers are represented internally as double precision floating point numbers
console.log(23 === 23.0);
// true
// Numbers are represented internally in a 64 base 2 format i.e. IN A BINARY FORMAT
// It is much more difficult to represent the same fractions in base 2, compared to base10(decimal) where representing a fraction is so much more easier
// ex : 0.1 fraction is difficult to represent in binary
console.log(0.1+0.2)
// recall that in decimal as well we have infinite decimal places in 3/10 = 3.33333333....... or value of PI
console.log(0.1 + 0.2 === 0.3)


// convert a string to a number
console.log(Number("22"));
const a = +"23"; //automatic type coercion due to unary + operator
console.log(typeof a, a);

// Parsing
// the string has to start with a number
// we can give floating point as well, but we have Math. methods to do 
console.log(Number.parseInt("300%###"));
console.log(Number.parseInt("400%###1200"));
console.log(Number.parseInt("%###1200"));
console.log(Number.parseInt(25.66));
// parseInt also accepts regex as a second argument. 
// The regex for numbers is the base of the numeral system that we are using
// pass 10 for decimal system
console.log(Number.parseInt("300%###", 10));
console.log(Number.parseInt("400%###1200", 10));
console.log(Number.parseInt("%###1200", 10)); //NaN makes sense
console.log(Number.parseInt(25.66, 10));
console.log(Number.parseInt("300%###", 2));
console.log(Number.parseInt("400%###1200", 2));
// I got NaN for putting value as 2, IDK why
// gpt: In both cases, the radix is set to 2, which means the function is trying to interpret the provided strings as binary numbers.
// The strings, however, contain characters that are not valid in binary representation ("%" and "###"), resulting in NaN (Not a Number).

console.log(Number.parseInt("30", 2));
console.log(Number.parseInt("40", 2));

console.log(Number.parseInt("10110", 2)); // Parses as binary "10110" into decimal 22
console.log(Number.parseInt("100100", 2)); // Parses as binary "100100" into decimal 36
console.log(Number.parseInt(25.66, 2)); //NaN

// parseFloat()
console.log(Number.parseFloat("2.5rem"))
console.log(Number.parseFloat("    2.5rem"))
console.log(Number.parseInt("    2.5rem"))


// isNaN
// check if certain value is a number
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20"));
console.log(Number.isNaN(+"20X"));
console.log(20/0, Number.isNaN(20/0));
// NaN is not useful if we encounter infinte

// isFinite()
// isFinite() is the best method, it is better to check whether a value is a number or not, rather than checking if a value is NaN
console.log("isFinite")
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20"));
console.log(Number.isFinite(+"20X"));
console.log(20/0, Number.isFinite(20/0));
// 