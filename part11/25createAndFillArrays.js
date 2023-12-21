// normal array creation
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = new Array(1, 2, 3, 4, 5, 6); // this is array constructor function
// these are manually creation of array because we already had data

const x = new Array(7);
console.log(x);
// output => Array(7) [ <7 empty slots> ]
// it creates a new array with 7 empty elements there, it does not contain anyting
// we wont be able to map this x
console.log(x.map(() => 5));
// 5 wont be filled/inserted inside x

// fill() method
// to perform fill operation we need a fill() method

x.fill(1);
console.log(x);

const y = new Array(5);
y.fill(1, 1, 3); //fill(value, startIndex, endIndex);
console.log(y);
y.fill(5, 0, 1);
y.fill(7, 3, 5);
console.log(y);

// fill can mutate normal arrays as well, not just empty arrays
arr.fill(100, 2, 5);
console.log(arr);

// how to create const arr = [1, 2, 3, 4, 5, 6]; using JS

const someArr = Array.from({length: 7}, () => 1);
console.log(someArr);
const anotherArr = Array.from({length: 5}, () => 2); 
// first argument is an object with the length property
// 2nd argument is a mapping-callBack function, the function does not need any parameters. so we use arrow function to return 2 in each iteration.
// so we will get 1 in each of array position
console.log(anotherArr);


const z = Array.from({length : 7}, (currentElement, currentIndex) => currentIndex+1);
console.log(z)
// we do not need currentElement variable so we can use a THROWABLE variable which is denotes as _
const itsa = Array.from({length : 7}, (_, currentIndex) => currentIndex*2);
console.log(itsa);

const hundredDiceROlls = Array.from({length : 100}, ()=> Math.trunc(Math.random() * 6 + 1));
console.log(hundredDiceROlls);

// ARRAY.FROM() was introduced to JS in order to create arrays from arrays-like structures like iterable: strings, maps, sets
// when we use querySelectorAll(), we get an array-like structure, which returns a nodeList. it is not a real array so it does not have maps or other array method
// so we convert that nodeList to array and then we get to use array methods