const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const filterWan = movements.filter((element, index, array) => {
    return element > 0; //if element is > 0 then it is added to the filterWan, else it is not added to filterWan
    // It is a behaviour unique to filter BECAUSE in any other function return element > 0 would have returned true or false
    // but in filter, the element who satisfy that condition in return are removed
    
})

console.log(filterWan);
function xx(a){
    return a > 0;
}
console.log(xx(10));