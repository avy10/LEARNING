"use strict"
function calcAge(birthYear) {
    const age = 2023-birthYear;
    console.log(`printing firstName inside calcAge function ${firstName}`);
    function printAge(){
        const output = `you ${firstName} are ${age} years old.`
        console.log(output);
    }

    printAge();
    return age;
}

const firstName = "Abhishek";
calcAge(1997);
console.log(calcAge(1997));
// console.log(`calling printAge in global ${printAge()}`); //error, printAge can not be accessed outside calcAge 