const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// inbuilt array.sort() method if JS mutates the original array
console.log(owners.sort());
console.log(owners);

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort());
// [-130, -400, -650, 1300, 200, 3000, 450, 70]
// the sorted numbers do not make any sense 
// BECAUSE array.sort works only on strings WHICH IS WHY IT converts everything to a string and then sorts them

// we can fix it by passing an compare callback function for comparison (comparisonFn) in the sort method
movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// if value of return < 0 then => a, b ASCENDING ORDER
// if value of return > 0 then => b, a DESCENDING ORDER
movements.sort((a, b) => {
    if(a > b){
        return 1;
        // switch order => bcz a is > b, and we want ascending 
    } 
    if(b > a){ //or use a < b
        return -1;
        // keep order, a is already < b, no need to switch
    }
});

// sort method keeps looping the array until the array is sorted in ascending order?

console.log(movements);


movements.sort((a, b) => {
    if(a < b) return 1;
    if(a > b) return -1;
})

console.log(movements)

const numArr = ["messi", "curry", "leBron", "iniesta", "Iniesta", "LeBron", "Curry"];
numArr.sort((a, b) => {
    if(a < b) return 1;
    if(a > b) return -1;
});
console.log(numArr);

numArr.sort((a, b) => {
    if(a < b) return -1;
    if(a > b) return 1;
});
console.log(numArr);


// for numbers 
// if a > b then a-b is always > 0 OR, b - a < 0
// if a < b then a-b is always < 0 OR, b - a > 0

movements.sort((a,b) => a - b);
console.log(movements);
movements.sort((a,b) => b - a);
console.log(movements);


// IF WE DO NOT WANT SORT METHOD TO MUTATE OUR ORIGINAL ARRAY
// WE CAN USE SLICE TO CREATE A NEW ARRAY AND THEN USE SORT ON IT

movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const sortedMovements = movements.slice().sort((a,b) => a - b);
console.log(movements);
console.log(sortedMovements);