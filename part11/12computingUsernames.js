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



/////////////////////////////////////////////////


// compute username for each account owner
// my soln and I cant believe I did this in 2nd try
const userNamesAvy = accounts.map((element, index, arrray) => element.owner.toLowerCase().split(" ").map((singleName) => singleName[0]).join(""));
const userNames = accounts.map((element, index, arrray) => {
    const nameComponents = element.owner.toLowerCase().split(" ").map((singleName) => singleName[0]);

});
console.log(userNames);

const addUserName = (accounts) => {
    accounts.forEach((element, index, array) => {
        element.userName = element.owner
                            .toLowerCase()
                            .split(" ")
                            .map(singleName => singleName[0])
                            .join("");
    });
}

addUserName(accounts);
accounts.forEach(e => {
    console.log(e.userName);
});