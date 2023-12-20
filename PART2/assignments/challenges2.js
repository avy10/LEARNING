const billValue = 430;
const tip = (billValue >= 50 && billValue <= 300) ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value is ${billValue + tip}`);

function calcTip1(billVal) {
    const tip = (billVal >= 50 && billVal <= 300) ? billVal * 0.15 : billVal * 0.2;
    return tip;
}

const calcTip2 = function (billVal) {
    const tip = (billVal >= 50 && billVal <= 300) ? billVal * 0.15 : billVal * 0.2;
    return tip;
} 

const calcTip3 = (billVal) => (billVal >= 50 && billVal <= 300) ? billVal * 0.15 : billVal * 0.2;

console.log(calcTip1(5000));
console.log(calcTip2(5000));
console.log(calcTip3(5000));

const bills = [125, 555, 44];
const tips = [calcTip3(bills[0]), calcTip2(bills[1]), calcTip1(bills[2])];
const totals = [
    bills[0]+tips[0],
    bills[1]+tips[1],
    bills[2]+tips[2]
];

const totals2 = bills+tips; //=> each of the arrays will be converted into strings and.
//then those two strings will be concatenated together

console.log(tips);
console.log(totals);
console.log(totals2);
console.log(typeof(totals2));
