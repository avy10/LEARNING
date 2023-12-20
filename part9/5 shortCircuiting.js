// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(false || false);
// console.log(undefined || 0 || "" || "Hello" || 23 || null);
// console.log(Boolean(""));
// console.log(Boolean(" "));

// console.log(undefined || 0 || "" || "" || null);

const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// in restaurant the numOfGuests array is not present

const guestsExpected = restaurant.numOfGuests ? restaurant.numOfGuests.length : 0;
console.log(guestsExpected);
const guestJonas1 = restaurant.numGuests || 10;
console.log(`Jonas' guest : ${guestJonas1}`); 
const guestsExpectedSC = restaurant.numOfGuests || 0;

console.log("");
console.log(guestsExpectedSC);
console.log(restaurant.numOfGuests) // gives undefined
// console.log(restaurant.numOfGuests.length) // gives error cz undefined ka length kaise?

//now we are adding numGuests and numOfGuests property to restaurant object
restaurant.numGuests = 23;
restaurant.numOfGuests = ["p1", "p2", "p3", "p4", "p5"];
const guestJonas2 = restaurant.numGuests || 10;
//pls note that if restaurant.numGuests were set to 0, we would get 10 as output. because 0 is a falsy value.
//how to work around it => to study later
const guestsExpectedCopy = restaurant.numOfGuests ? restaurant.numOfGuests.length : 0;
console.log(guestsExpectedCopy);
const guestsExpectedSCCopy = restaurant.numOfGuests.length || 0;
console.log("");
console.log(guestsExpectedSCCopy);
console.log(restaurant);
//we can also write the above ternary in the form of short circuit evaluation
