const arr = ["abc", "xyz", "mno", "qrs"];
const arr2 = [11, 22, 33, 44, 55];
// JOIN
// JOIN adds some string delimiter between elements of array
// JOIN returns a new Array. It does not mutates array
console.log(arr2.join("-"));
console.log(arr2.join("/"));
console.log(arr2.join(" - "));
console.log(arr2.join(" / "));
console.log(arr2.join(" , "));
console.log(arr2.join(" ... "));
console.log(arr2);
const arrSlash = arr2.join(" / ");
console.log(arrSlash);