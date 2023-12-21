// We can use find method to retrieve one element from an array based on a condition.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const ele = movements.find((element, index, array) => element < 0)
// find method returns the first element present in the element that satisfies the condition. It DOES NOT return an array.
// whereas filter returns a new array which contains all the elements present in the element that satisfies the condition
console.log(ele);

// find method returns undefined if no element matches the condiiton