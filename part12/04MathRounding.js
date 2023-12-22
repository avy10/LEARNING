console.log(Math.sqrt(25));
console.log(25 ** (1/2));
console.log(8 ** (1/3));

console.log(Math.max(5, 18, 23, 11, 20));
console.log(Math.max(5, 18, "23", 11, "20")); // auto type coercion done by Math.max()
// type coercion !== parsing 
console.log(Math.max(5, 18, "23px", 11, "20rem")); 

console.log(Math.min(5, 18, 23, 11, 20));
console.log(Math.min(5, 18, "23", 11, "20")); 
console.log(Math.min(5, 18, "23px", 11, "20rem")); 

// Math.PI
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// Math.random() => gives a number between 0 and 1
console.log(Math.random());

// recall dice
console.log(Math.trunc(Math.random() * 6) + 1);
// +1 to offset the removal of decimal point by Math.trunc

// genetate a random number between a range of two numbers, both included
const randomINT = (min, max) => Math.trunc(Math.random() * (max-min) + 1 ) + min;
randomINT(1, 5)

// include min, but exclude max
const randomINT2 = (min, max) => Math.trunc(Math.random() * (max-min) ) + min;
// include min, but exclude max
const randomINT3 = (min, max) => Math.trunc(Math.random() * (max-min)) + min+1;


// ROUNDING INTEGERS
console.log(Math.trunc(23.3));
console.log(Math.round(23.5));
console.log(Math.round(23.3));
console.log(Math.ceil(23.3));
console.log(Math.floor(23.3));
// floor and trunc seems to be working similar for +ve values
// but they work differently for -ve values because the philosophy/working principle is different
// trunc simply removes all the decimal values
// whereas floors returns the lowest int value possible
// and ceil returns heighest int value possible
// and for -ve int, larger the magnitude => smaller the -ve integer
console.log(Math.trunc(-23.3));
console.log(Math.round(-23.5));
console.log(Math.round(-23.7));
console.log(Math.round(-23.3));
console.log(Math.ceil(-23.3));
console.log(Math.floor(-23.3));

// even Math. round returns max value for +ve nums i.e. 23.5 => 24 BUT -23.5 => 23 bcz -23 > -24

// NOTE: when we use Math.trunc in our randomInt function, we just remove the decimal parts => ...
// ...therefore,if the number is +ve, we are always rounding off the numbers towards 0, i.e. towards the smallest number i.e. towards the left side of the Number line

// but when the number is -ve say -23.3, it will remove decimal parts ang give us -23. Now it is again rounding off the number towards 0, BUT ...
// ... in doing so, the number got rounded off towards the larger -ve number i.e. towards the right hand side of the 

// so in Math.trunc we are loosing consistency, because for +ve numbers it is rounding off towards the smallest number BUT for -ve numbers it is rounding off towards larger -ve number

// Inconsistent behaviour is not desirable for general use cases

// which is why we prefer Math.floor method 
console.log(Math.floor(-23.3)); // -24 => rounded off towards the smaller -ve number
console.log(Math.floor(23.3)); // 23 => rounded off towards the smaller +ve number
// as we can see Math.floor gives consistent behaviour for both +ve and -ve number

// Rounding Floating point numbers to another Floating point number
// we do that using ().toFixed()
// this method returns a string instead of a number
console.log("Rounding Floating point numbers to another Floating point number");
console.log((2.7).toFixed(0));
// rounded to 3 because we requested a number with 0 decimal places
console.log((2.3).toFixed(0));
// rounded to 2 because we requested a number with 0 decimal places
console.log((2.5).toFixed(0));

console.log((2.7).toFixed(3));
console.log((2.7).toFixed(3));
// 2.700 because we requested a number with three decimal places
console.log((2.79654).toFixed(3)); //2.797
console.log((2.396734).toFixed(4)); //2.3967 notice how 34 of decimal is rounded off, compared to rounding of 54 in above example

// primitives do not have methods and the value that we are passing are of type number which happens to be a primitive
// so JS does boxing of that value. Boxing leads to conversion of value from number-type to a number-object, so number is now an object
// once the toFixed method has finished, the value is unboxed back to a number




