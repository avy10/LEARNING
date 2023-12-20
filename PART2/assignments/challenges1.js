// const dS1 = 44, dS2 = 23, dS3 = 71;
// const kS1 = 65, kS2 = 54, kS3 = 49;

const dS1 = 85, dS2 = 54, dS3 = 41;
const kS1 = 23, kS2 = 34, kS3 = 27;

const average = (a, b, c) => (a+b+c) / 3;

const dAvg = average(dS1, dS2, dS3);
const kAvg = average(kS1, kS2, kS3);

const checkWinner = (dAvg, kAvg) => {
    if(dAvg >= (kAvg * 2)) {
        console.log(`Dolphins wins over Koalas. The scores are ${dAvg} - ${kAvg}`);
    } else if (kAvg >= (dAvg * 2)) {
        console.log(`Koalasa wins over Dolphins. The scores are ${kAvg} - ${dAvg}`);
    } else {
        console.log(`Neither team won`);
    }
}

checkWinner(dAvg, kAvg);

if(dAvg === kAvg && kAvg >= 100 && dAvg >= 100) {
    console.log(`The teams Doplhins with score ${dAvg} and Koalas with score ${kAvg} have drawn.`);
} else if(dAvg < kAvg && kAvg >= 100) {
    console.log(`The team Koalas has won 🏆 with score ${kAvg} over team Dolphins with score ${dAvg}`);
} else if(dAvg > kAvg && dAvg >= 100) {
    console.log(`The team Dolphins has won with score ${dAvg} over team Koalas with score ${kAvg}`);
} else {
    console.log(`Neither team has won the trophy`);
}
