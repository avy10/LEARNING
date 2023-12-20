let arr = ['a', 'b', 'c', 'd', 'e'];

// with slice method we can extract any part of array but without changing the original array. the extracted array is returned as a new array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));

// negative begin parameter :- to copy from the end of array
console.log(arr.slice(-2)); 
//gives last 2 elements from the array without changing the order
console.log(arr.slice(-1)); 
// ALWAYS gives the last element of the array
console.log(arr.slice(-3)); 
// last 3 elements
console.log(arr.slice(1, -2));
// start from index 1. end at 2nd last element. which means 2nd last element(d) is excluded and we get b of index 1, c of index 2
console.log(arr.slice(1, -3)); 
// start from index 1. end at 3rd last element. which means 3rd last element(c) is excluded and we get b of index 1

// NOTE THAT DIRECTION OF SLICE IS ALWAYS LEFT TO RIGHT, EVEN WITH -VE VALUES
console.log(arr.slice(-1, -3)); 
// gives an empty array. because we are starting from last index and, ending at 3rd last index. 
// our intended direction of slice is right to left, which won't work so we get empty array

// SLICE CREATES A SHALLOW COPY OF ANY ARRAY. to achieve that just call the slice without any arguments
const arr2 = arr.slice();
console.log(`arr2: ${arr2}`)
// slice is useful to create shallow copy when our intention is to call one method after the other in the single line of code






