// instead of traditional bracket notation to access array eelement at a specific index,
// we get the at method which does the same thing
// again it can be useful if we want to daisy chain several method calls at one time i.e. method chaining

const arr = ["abc", "xyz", "mno", "qrs"];
console.log(arr[0]);
console.log(arr.at(0));

// find last position of array
console.log(arr[arr.length-1])
console.log(arr.slice(-1));
// slice returns an array
console.log("value from slice::", arr.slice(-1)[0]);

console.log(arr.at(-1))


// at method also works on strings
console.log("avy".at(0))
console.log("avy".at(-1))