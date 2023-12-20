// const markHeight = 1.69;
// const markWeight = 78;

// const johnsHeight = 1.95
// const johnWeight = 92;

// const bmiMark = markWeight / (markHeight ** 2);
// console.log("marks bmi", bmiMark);
// const bmiJohn = johnWeight / (johnsHeight ** 2);
// console.log("john bmi", bmiJohn);

// const markHigherBMI = bmiJohn < bmiMark ? true : false;
// console.log(markHigherBMI);

// if(bmiJohn > bmiMark) {
//     console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiJohn})`);
// } else {
//     console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})`);
// }

// let str = `"will it work" ${555+666}`;
// console.log(str);
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(55);
// console.log(Boolean(-5));


// const hasDriversLicense = true;
// const hasGoodVision = true;


// const numNeighbours = prompt("How many neughbour countries does your country have?");
let numNeighbours = 0;
if(numNeighbours == 1) {
    console.log(`Only 1 border!`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 borders`);
} else if (numNeighbours == 0) {
    console.log("No borders");
} 
