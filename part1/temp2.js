// const fa = prompt("What is ");
// console.log(fa);

// const dS1 = 96, dS2 = 108, dS3 = 89;
// const kS1 = 88, kS2 = 91, kS3 = 110;

const dS1 = 97, dS2 = 112, dS3 = 101;
const kS1 = 109, kS2 = 95, kS3 = 200;

const dAvg = (dS1 + dS2 + dS3) / 3;
const kAvg = (kS1 + kS2 + kS3) / 3

if(dAvg === kAvg && kAvg >= 100 && dAvg >= 100) {
    console.log(`The teams Doplhins with score ${dAvg} and Koalas with score ${kAvg} have drawn.`);
} else if(dAvg < kAvg && kAvg >= 100) {
    console.log(`The team Koalas has won 🏆 with score ${kAvg} over team Dolphins with score ${dAvg}`);
} else if(dAvg > kAvg && dAvg >= 100) {
    console.log(`The team Dolphins has won with score ${dAvg} over team Koalas with score ${kAvg}`);
} else {
    console.log(`Neither team has won the trophy`);
}


const day = `tuesday`;

switch(day) {
    case `monday`: //day === `monday` i.e. strict equality operator is used
        console.log(`the first day of the week`);
        console.log(`today is work day`);
        break;
    case `tuesday`:
        console.log(`lots of meetings to attend`);
        console.log(`no breaks today as well`);
        break;
    case `wednesday`:
    case `thursday`:
        console.log(`approaching weekend`);
        console.log(`UCL matches any?`);
        break;
    case `friday`:
        console.log(`approaching weekends`);
        break;
    default:
        console.log(`Invalid weekday`);
        break;
}