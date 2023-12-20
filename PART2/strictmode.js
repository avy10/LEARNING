"use strict";
function logger(){
    console.log("My name is Abhishek Kumar");
}

// logger();
// logger();

function fruitProcessor(apples, oranges) {
    console.log(`${apples} apples and ${oranges} oranges available`);
    const juice = `Juice with ${apples} and ${oranges} oranges have been made and served. Enjoy!!`;
    return juice;
}

// fruitProcessor(2, 8);
// console.log(fruitProcessor(2, 8));
// console.log("------");
// let juice = fruitProcessor(1, 4);
// console.log(juice);
// console.log("------");
// console.log(fruitProcessor());
// console.log("------");
// console.log(fruitProcessor(5));


//function declaration
function calcAge1(birthYear) {
    const age = 2055 - birthYear;
    return age;
    //or return 2055 - birthYear;
}

// console.log(calcAge1(1997));

//function expression
const calcAge2 = function (birthYear) {
    return 2055 - birthYear;
}

const age2 = calcAge2(1997);
console.log("Function expression", age2);

const calcAge3 = function (birthYear) {
    console.log(`Your age in year 2055 is ${20555-birthYear}`);
}

console.log("------");

console.log(calcAge3(1997));
const age3 = calcAge3(1997);
console.log(age3);

console.log("------ ARROW FUNCTION");

const calcAge4 = birthYear => 2055-birthYear;

console.log(calcAge4(1997));

console.log("------ MULTI LINE ARROW FUNCTION");

const yearsUntilRetirement =  (userName, birthYear) => {
    const age = 2055 - birthYear;
    const retirementAge = 61 - age;
    console.log(`${userName} is going to retire in ${retirementAge} years`);
    return retirementAge;
}

const age5 = yearsUntilRetirement("Abhishek", 1997);
console.log(age5);
