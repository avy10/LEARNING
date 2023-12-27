const num = 3884764.23;
const optionsTemps= {
    style : "unit",
    unit: "celsius",
    
}
console.log("USA UNITS", new Intl.NumberFormat("en-US", optionsTemps).format(num));
console.log("IND UNITS", new Intl.NumberFormat("en-IN", optionsTemps).format(num));
console.log("GERMANY UNITS", new Intl.NumberFormat("de-DE", optionsTemps).format(num));

const percentValue = 55;
const optionsPercent = {
    style : "percent",
    // options is ignored
}

console.log("USA %", new Intl.NumberFormat("en-US", optionsPercent).format(num));
console.log("IND %", new Intl.NumberFormat("en-IN", optionsPercent).format(num));
console.log("GERMANY %", new Intl.NumberFormat("de-DE", optionsPercent).format(num));

const currencyValue = 96.58;
const optionsCurrencyEUR = {
    style : "currency",
    currency : "EUR",
}
console.log("USA currency", new Intl.NumberFormat("en-US", optionsCurrencyEUR).format(num));
console.log("IND currency", new Intl.NumberFormat("en-IN", optionsCurrencyEUR).format(num));
console.log("GERMANY currency", new Intl.NumberFormat("de-DE", optionsCurrencyEUR).format(num));

// currency is not defined by the locale so we must set a value of the currency in the options object

const optionsCurrencyUSD = {
    style : "currency",
    currency : "USD",
}
console.log("USA currency", new Intl.NumberFormat("en-US", optionsCurrencyUSD).format(num));
console.log("IND currency", new Intl.NumberFormat("en-IN", optionsCurrencyUSD).format(num));
console.log("GERMANY currency", new Intl.NumberFormat("de-DE", optionsCurrencyUSD).format(num));

const optionsCurrencyINR = {
    style : "currency",
    currency : "INR",
}
console.log("USA currency", new Intl.NumberFormat("en-US", optionsCurrencyINR).format(num));
console.log("IND currency", new Intl.NumberFormat("en-IN", optionsCurrencyINR).format(num));
console.log("GERMANY currency", new Intl.NumberFormat("de-DE", optionsCurrencyINR).format(num));