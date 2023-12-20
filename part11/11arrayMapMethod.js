const euroTOUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsUSD = movements.map(function(element, index, array){
    return Math.floor(element * euroTOUSD);
});
console.log(movements);
console.log(movementsUSD);
const random = movements.map(function(element, index, array){
    return 69;
})
console.log(random);

const cleanMovements = movements.map((element) => Math.floor(element*euroTOUSD));
console.log(cleanMovements);

const movementDesc = movements.map((element, index, array) =>`S.No.${index+1}: You ${element > 0 ? "deposited" : "withdrew"} ${Math.abs(element)}`);
console.log(movementDesc);
