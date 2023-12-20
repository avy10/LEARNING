const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// accumulator is a snowball that keeps accumulating the value that we ultimately want to return. 
// in case of sum of elements of array, the accumulator holds the value of final sum by adding all the elements of the array

const accountBalance = movements.reduce(function(accumulator, element, index, array){
    return accumulator += element;
    // in each loop iteration we return the updated value of accumulator to accumulator itself
    // for index 0, accumulator is 0, current is 200;
    // for index 1, accumulator is 200, current is 450,
    // for index 2, accumulator is 650, current is -400
}, 0);
console.log(accountBalance);

const acBal = movements.reduce((accumulator, element) => accumulator+element, 0);
console.log(acBal);
const acBal2 = movements.reduce((accumulator, element) => accumulator+element, 4000);
console.log(acBal2); 


// // calculating final balance OF SCRIPT,JS

// get the maximum value of the movements array

const maxAmount = movements.reduce((accumulator, element, index, array) => element > accumulator ? element : accumulator, movements[0]);
// CAUTION: We saw in filter that returning element > 0 actually returned the element itself,
// which is not normal as all the other function return boolean true or false
// which is why simply writing element > accumulator returns true or false,
// hence we need a ternary operator
console.log(maxAmount);










const minAmount = movements.reduce((accumulator, element, index, array) => element < accumulator ? element : accumulator, movements[0]);
console.log(minAmount);