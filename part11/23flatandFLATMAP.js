const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    10, 
    11,
]

// flat method
// es2019
// if we have a nested array then flat method will separate out each single element in a sequential manner,
// flat method RETURNS A NEW ARRAY with each single element separated out of the nested arrays

const newArr = arr.flat();
console.log(newArr)

const arrDeep = [
    [1, 2, [11, 22, 33], 44],
    [5, 6, 7, 8, [55, 66, [77, 88],],],
    [9, 19, [29, [39, 49], [79, 89, [119, 129, [555, 666, 777]]], [1001, 2002]]],
]

const flatArrDeep = arrDeep.flat();
console.log(flatArrDeep);
// we can see that flat method can only flatten 1-level deep nested arrays
// for multi-level deep nested array we need to specify the level of depth as a method parameter
const flatArrDeep2 = arrDeep.flat(2);
console.log(flatArrDeep2);
// there are still more array with more depth, so we will increase the depth value
const flatArrDeep3 = arrDeep.flat(3);
console.log(flatArrDeep3);
const flatArrDeep4 = arrDeep.flat(4);
console.log(flatArrDeep4);
const flatArrDeep5 = arrDeep.flat(5);
console.log(flatArrDeep5);



// FLATMAP IS IN NEXT FILE 23bankSum.js
