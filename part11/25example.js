// 25

labelBalance.addEventListener("click", function(){
	const movementsNodeList = document.querySelectorAll(".movements__value");
	const movementsNodeListARR = Array.from(movementsNodeList, element => {
		
		// return element.textContent;
		console.log("before",element.textContent);
		const abc = Number(element.textContent.replace('€', ''));
		console.log("after",element.textContent);
		return abc;
	});
	console.log(movementsNodeListARR);

	// const movs = movementsNodeListARR.map((element, index, array) => {
	// 	element.textContent.replace("€", "");
	// 	Number(element.textContent);
	// });
	// console.log(movs);

	// const movementsUI = Array.from(
    // document.querySelectorAll('.movements__value'),
    // el => Number(el.textContent.replace('€', ''))
//   );
})

/* 

The code you provided seems to be extracting a numerical value from the `textContent` of an HTML element by removing the '€' symbol and converting it to a number using `Number`. Let me break down the code for you:

```javascript
const abc = Number(element.textContent.replace('€', ''));
```

1. `element.textContent`: This retrieves the text content of the HTML element referred to by the variable `element`. It could be a DOM element that contains some text.

2. `.replace('€', '')`: This uses the `replace` method to remove the '€' symbol from the text content. It replaces each occurrence of '€' with an empty string, effectively removing the Euro symbol.

3. `Number(...)`: This converts the resulting string (after removing '€') to a number. It's using the `Number` constructor to parse the string and convert it to a numeric value.

So, the variable `abc` now holds the numeric value extracted from the `textContent` of the HTML element, after removing the '€' symbol. If the original text content was something like "€123.45", `abc` would be assigned the numeric value `123.45`.

*/