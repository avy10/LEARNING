const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of loop
for(const movement of movements){
    movement > 0 && console.log(`You deposited ${movement}.`);
    movement < 0 && console.log(`You withdrew ${Math.abs(movement)}.`);
};

// forEach method
movements.forEach(function(movement){
    movement > 0 && console.log(`You deposited ${movement}.`);
    movement < 0 && console.log(`You withdrew ${Math.abs(movement)}.`);
    
})

// Again, forEach method actually requires a callback function here. So for each, it's technically a higher order function
// But it's the for each method here that we'll call this callback function. We are not calling it ourselves as follows.
// Now when exactly will forEach actually call this anonymous-callBack function?
// the forEach method will loop over the array and in each iteration, it will pass in the current element of the array
// AND THEN it will execute this callBack function.


// HOW TO ACCESS INDEX OF CURRENT ITERATION IN FOR EACH?
// RECALL THE FOR OF LOOP
for(const [index, movement] of movements.entries()){
    movement > 0 && console.log(`S.No.${index+1} : You deposited ${movement}.`);
    movement < 0 && console.log(`S.No.${index+1} : You withdrew ${Math.abs(movement)}.`);
}
// IMPORTANT NOTE: forEach passes the current element, the index and the entire array that we are looping
movements.forEach(function(movement, index, arr){
    movement > 0 && console.log(`S.No.${index+1} :You deposited ${movement}.`);
    movement < 0 && console.log(`S.No.${index+1} :You withdrew ${Math.abs(movement)}.`);
    console.log(arr);
})

// CAUTION: in for of loop, the first item was index and 2nd item was element
// BUT in forEach loop, the first item is element and 2nd item is index and 3rd item is array itself


// we can use continue, break and return to break out of a for of loop
// BUT we CAN NOT break out of a forEach loop even by using return

movements.forEach(function(movement, index, arr){
    movement > 0 && console.log(`S.No.${index+1} :You deposited ${movement}.`);
    movement < 0 && console.log(`S.No.${index+1} :You withdrew ${Math.abs(movement)}.`);
    console.log(arr);
    if(movement === 3000){
        return;
    }
})