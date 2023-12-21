// BANKIST APP

// Data
const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

function avyTotalMoneyCalc(accounts){
	const allTheMoney = [];
	accounts.forEach(e => {
		allTheMoney.push(e.movements);
	});

    const allTheMoneyFLAT = allTheMoney.flat();
    const onlyDeposits = allTheMoneyFLAT.filter((element, index, array) => element > 0);
    const totalMoney = onlyDeposits.reduce((sum, element, index, array) => sum +=element, 0);
	console.log(totalMoney);
    // JONAS used maps
    const accountMovements = accounts.map(element => element.movements);
    console.log(accountMovements);

    const acountBalance = accounts.map(element => element.movements)
                                 .flat()
                                 .reduce((sum, ele) => sum += ele, 0);
    console.log(acountBalance);

    // FLATMAP
    const accountBalance2 = accounts.flatMap(ele => ele.movements).reduce((sum, ele) => sum += ele, 0);
    console.log(accountBalance2);
}

avyTotalMoneyCalc(accounts);


// NOTE THAT IMMEDIATELY AFTER USING MAP METHOD, USING FLAT METHOD IS QUITE COMMON
// WHICH IS WHY FLATMAP IS ALSO A METHOD
// bascically map and a flat method into one single method
// FLATMAP ONLY GOES ONE LEVEL DEEP