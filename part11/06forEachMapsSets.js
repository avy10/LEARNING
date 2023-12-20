const currencies = new Map([
    ["USD", "United States Dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound"],
]);
console.log(currencies);

currencies.forEach(function(value, key, map){
    console.log(`${key} : ${value}`);
});

const currenciesUnique = new Set(["USD", "INR", "USD", "GBP", "DKK", "INR"]);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, set){
    console.log(`${key} : ${value}`);
});

// key is exactly same as value
// because a set has neither key nor a value