const complexData = {
	id: 1,
	name: "ComplexEntity",
	details: {
		type: "Advanced",
		values: [10, 20, 30, 40],
		metadata: {
			author: {
				firstName: "John",
				lastName: "Doe",
				aliases: ["JD", "AnonymousCoder"],
			},
			version: "1.0.0",
		},
	},
};
// Extract the name and type properties.
// Create an array valueAliases containing all aliases from the metadata.author.aliases.
// Calculate the sum of all values in the details.values array.
// Extract the firstName and version properties.
// Create an array remainingValues containing the remaining values from the details.values array using the rest operator.
const extractInfo = (complexData) => {
	let {
		name: nameVar,
		details: {
			type: typeVar,
			values: valuesArr,
			metadata: {
				author: { aliases: valueAliases, firstName: firstName },
				version: version,
			},
		},
	} = complexData;
	let [el1, el2, el3, el4] = valuesArr;
	let details = el1 + el2 + el3 + el4;
	//   let details = valuesArr.reduce((sum, value) => sum + value, 0);
	// let remainingValues = [...complexData.details.values];
	let remainingValues = [...valuesArr];
	let ansObj = {
		name: nameVar,
		type: typeVar,
		valueAliases: valueAliases,
		sumOfValues: details,
		authorFirstName: firstName,
		version: version,
		remainingValues: [...remainingValues],
	};
	return ansObj;
};

console.log(extractInfo(complexData));
