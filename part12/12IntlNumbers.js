const num = 3884764.23;
console.log("USA", new Intl.NumberFormat("en-US").format(num));
console.log("IND", new Intl.NumberFormat("en-IN").format(num));
console.log("GERMANY", new Intl.NumberFormat("de-DE").format(num));

console.log("BROWSER", new Intl.NumberFormat(navigator.language).format(num));

const optionsUS = {
    // options for number formatting
    style : "unit",
    unit: "mile-per-hour",
    // there are tons of units available of course
    
}
const optionsIN= {
    style : "unit",
    unit: "kilometer-per-hour",
    
}
console.log("USA UNITS", new Intl.NumberFormat("en-US", optionsUS).format(num));
console.log("IND UNITS", new Intl.NumberFormat("en-IN", optionsIN).format(num));
console.log("GERMANY UNITS", new Intl.NumberFormat("de-DE", optionsUS).format(num)); //mi/h

console.log("BROWSER UNITS", new Intl.NumberFormat(navigator.language).format(num));

