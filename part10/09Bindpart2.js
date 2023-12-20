// Partial Application
// 
// partial application means that we can preset parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

// we can use bind function on addTax and preset the "rate" 
const addVAT = addTax.bind(null, 0.23);
// null is passed in the this argument because we are not at all interested in this
// we are not gonna use this keyword anywhere, so we just set it to null
// addVAT = value => value + value * 0.23;
console.log(addVAT(200))
// this is different than simply setting a default parameter to addTax
// because bind returns a new function, and then in that new function, we are setting rate as default parameter

const addTaxAvy = function(rate){
    return function(value){
        return value + value * rate;
    }
}

const addITaxAvy = addTaxAvy(0.1);
const addVATAvy = addTaxAvy(0.23);
console.log(addVATAvy(500));
console.log(addITaxAvy(25000));
console.log(addTaxAvy(0.50)(2222));