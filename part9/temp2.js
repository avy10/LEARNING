function processObject({ a = 1, b = 2, c = 3 } = {}) {
	// Your code here
	console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

processObject({ a: 10, c: 30 }); // Should use default value for 'b'
