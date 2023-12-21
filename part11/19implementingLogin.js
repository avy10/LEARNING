// 19 event listener for login button
let currentAccount;
btnLogin.addEventListener("click", function(event){
	// prevent form from submitting
	event.preventDefault();
	currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
	if(currentAccount?.pin === Number(inputLoginPin.value)){
		// display UI and a welcome message
		labelWelcome.textContent = `Welcome Back, ${currentAccount.owner.split(" ")[0]}`;
		containerApp.style.opacity = 100;
		// display movements
		displayMovements(currentAccount.movements);
		// display balance and // display summary
		displayBalance(currentAccount);
		
		// clear input fields
		inputLoginUsername.value = inputLoginPin.value = ""; // care this
		inputLoginPin.blur();


	}
	console.log(currentAccount);
})