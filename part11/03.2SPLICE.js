let arr = ['a', 'b', 'c', 'd', 'e'];

// SPLICE does the exact same thing as slice i.e. it extracts the specified part of array BUT IT MUTATES the original array,
// because splice deletes the extracted part of array from the original array and returns the deleted elements of arrays in a new array
console.log(arr.splice(2));
// it will return the deleted elements of arrays in a new array,
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(-1));
// the last element is deleted
console.log(arr);
// the second parameter of splice is delete count i.e. an integer which indicates the number of elements we want to delete from the starting position
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.splice(1,3));
console.log(arr);