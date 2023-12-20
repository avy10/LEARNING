function describeCountry(country, population, capitalCity) {
    const description = `${country} has ${population} and its capital city is ${capitalCity}.`;
    return description;
}
const firstCountry = describeCountry("India", "2 Billion", "New Delhi");
const secondCountry = describeCountry("USA", "750 Million", "Washington DC");
const thirdCountry = describeCountry("Bhutan", "50 Million", "Thimpu");
console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);

function percentageOfWorld1 (population) {
    const percent = (population / 7900) * 100;
    return percent;
}

const percentageOfWorld2 = population => (population / 7900) * 100;

const percentageOfWorld3 = function(population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld1(1441));
console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld3(1441));

const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld3(population)} of the world.`;
}

console.log(describePopulation("China", 1441));
console.log(describePopulation("India", 1550));
