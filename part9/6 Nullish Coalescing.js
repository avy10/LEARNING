const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const guestJonas1 = restaurant.numGuests || 10;
console.log(`Jonas' guest : ${guestJonas1}`); 
// restaurant.numGuests = 23;
const guestJonas2 = restaurant.numGuests || 10;


const guestCorrect = restaurant.numGuests ?? restaurant.myFoot;
console.log(guestCorrect);
console.log(" ")
const guestCorrect2 = restaurant.numGuests ?? restaurant.myFoot;
console.log(guestCorrect2);
console.log(" ")
const guestCorrect3 = restaurant.numGuests ?? null;
console.log(guestCorrect3);
console.log(" ")
