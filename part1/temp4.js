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