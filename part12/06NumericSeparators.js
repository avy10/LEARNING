// format numbers
// in day to day life we have , as separator between numbers like 287,460,000,000 which is the diameter of our solar system in km 287billion and 460 million
const diameter = 287460000000;
// much difficult to read
// let us use numeric separators
// exactly same to JAVA
const diameterSS = 287_460_000_000;
console.log(diameterSS);

const PI = 3.14_15;
console.log(PI)
// cannot using numeric separators inside a numStr
console.log(Number("230_000"));
// behaviour of numeric separator inside a template litera
console.log(`${diameterSS}`);

console.log(Number.parseInt("230_000")); // already studied
