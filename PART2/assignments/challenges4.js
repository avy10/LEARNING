const bills = [22, 295, 176, 440, 37, 105, 10, 1100 ,86, 52];

const tips = [];
const totals = [];

function calcTip1(bills) {
    return (bills >= 50 && bills <= 300) ? bills * 0.15 : bills * 0.20;
}

const calcTip2 = function (bills) {
    return (bills >= 50 && bills <= 300) ? bills * 0.15 : bills * 0.20;
}

const calcTip3 = (bills) => (bills >= 50 && bills <= 300) ? bills * 0.15 : bills * 0.20;


for(let i = 0; i < bills.length; i++) {
    // tips[i] = calcTip3(bills[i]); //java nahi hai ye js hai
    // totals[i] = tips[i] + bills[i]; //java nahi hai ye js hai
    tips.push(calcTip3(bills[i]));
    totals.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = (totals) => {
    let sum = 0;
    for(let i = 0; i < totals.length; i++) {
        sum += totals[i];
    }
    console.log(sum);
    return (sum / totals.length);
}

console.log(calcAverage(bills));
console.log(calcAverage(totals));

