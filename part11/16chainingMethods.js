const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroTOUSD = 1.1;

const acBalUSD = Math.trunc(movements.filter((element) => element > 0)
                    .map(element => element * euroTOUSD)
                    .reduce((amount, element) => amount += element, 0));
console.log(acBalUSD);

// WATCH the video around 03:50 for debugging that we are doing here:

const errorACBAL = Math.trunc(movements.filter((element) => element < 0)
                    .map((element, index, array) => {
                        console.log(array); //will print array with negative value n times where n = array.length
                        return element * euroTOUSD})
                    .reduce((amount, element) => amount += element, 0));
console.log(errorACBAL);
// we can check the resultant array given by filter method in the arguments of next method in this case it is map
// we can check the resultant array given by map method in the arguments of next method in this case it is reduce 


// SCRIPT.JS
//16 CALCULATING INCOME OUTCOME INTEREST 
const displaySummary = function(accountObj){
	
	const totalIn = accountObj.movements.filter((element, index, array) => element > 0)
							.reduce((sum, element) => sum += element, 0);
	labelSumIn.textContent = "";
	labelSumIn.textContent = totalIn;

	const totalOut = accountObj.movements.filter(element => element < 0).reduce((sum, element) => sum += element, 0);
	labelSumOut.textContent = ""; 
	labelSumOut.textContent = `${Math.abs(totalOut)}`; 

	const interestRate = accountObj.interestRate;
	const totalInterest = accountObj.movements.filter(element => element > 0)
											  .map(element => element * interestRate / 100)
											  .filter(element => element >= 1)
											  .reduce((sum, element) => sum += element, 0);
	labelSumInterest.textContent = "";
	labelSumInterest.textContent = totalInterest;
}