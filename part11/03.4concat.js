// CONCAT
// It joins two arrays
// it does not mutate array
const arr = ["abc", "xyz", "mno", "qrs"];
const arr2 = [11, 22, 33, 44, 55];
const final = arr.concat(arr2);
const final2 = arr2.concat(arr);
console.log(final)
console.log(final2)

console.log(...arr, ...arr2);
console.log(...arr2, ...arr);
console.log(arr)