// FINDINDEX
// findIndex method returns the index of the first element found in array

btnClose.addEventListener("click", function(event){
    event.stopPropagation();
	event.preventDefault();
	const enteredUser = inputCloseUsername.value;
	const enteredPin = Number(inputClosePin.value);
    if(enteredUser === currentAccount.userName && enteredPin == currentAccount.pin){
		const index = accounts.findIndex((acc) => acc.userName === currentAccount.userName);
		console.log(index);
		accounts.splice(index, index+1);
		console.log(accounts);


		labelWelcome.textContent = "Log in to get started";
		inputClosePin.value = inputCloseUsername.value = "";
		inputClosePin.blur();

		// hide UI
		containerApp.style.opacity = 0;
	}
});


// how if findIndex different than indexOf
/* 
in indexOf, the method returns the index of the element <if that exact element is present in the array>,
else indexOf returns -1 
in findIndex, we create a certain test condition in which we can take any random value and do some comparison check.
and if there is an element present in the array which passes the condition then it returns the index of that element
IT ends after finding the very first element that is passing that condition
if we want more values then we need to do filter 

In JavaScript, both the indexOf and findIndex methods are used with arrays to search for an element and return its index. However, there are some differences between the two methods.

    Return Value:
        indexOf: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
        findIndex: Returns the index of the first element in the array that satisfies the provided testing function; otherwise, it returns -1 if no element passes the test.

    Usage:
        indexOf: Takes a value as an argument and searches for an exact match in the array.
        findIndex: Takes a callback function as an argument, which should return a truthy value for the element being searched.

Here are examples of using both methods:

javascript

// indexOf example
const array1 = [1, 2, 3, 4, 5];
const index1 = array1.indexOf(3); // index1 will be 2

// findIndex example
const array2 = [10, 20, 30, 40, 50];
const index2 = array2.findIndex(element => element > 25); // index2 will be 2

In the findIndex example, the callback function returns true for the element 30, which is the first element in the array that satisfies the condition.

In summary, indexOf is used for simple value matching, while findIndex is more flexible as it allows you to define a custom condition using a callback function. Use indexOf when you need to find the index of an exact value, and use findIndex when you need to find the index based on a custom condition.

*/