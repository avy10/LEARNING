const arr = [7, 8, 9]
//add 1 and 2 at beginning of array without using array methods
const newArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(newArr)

const anotherNewArr = [1, 2, ...arr]
console.log(anotherNewArr);
console.log(...anotherNewArr);


const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order : function(starterIndex, mainIndex) {
    return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function(objParam) {
    console.log(objParam);
  },

  orderDeliveryDest : function({starterIndex, mainIndex, time, address}) {
    console.log(`order received!!  ${this.starterMenu[starterIndex]}  and  ${this.mainMenu[mainIndex]}  will be delivered to  ${address}  on time  ${time}`);
  },

  orderDeliveryDestDef : function({starterIndex = 0, mainIndex = 1, time = "21:25", address = "patna"}) {
    console.log(`order received!!  ${this.starterMenu[starterIndex]}  and  ${this.mainMenu[mainIndex]}  will be delivered to  ${address}  on time  ${time}`);
  },

  orderPasta : function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}. Hope you enjoy your meal!`);
  },
};

const newMenu = [...restaurant.mainMenu, "gnocci"];
console.log(newMenu);

//creating shallow copies of array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
//join two arrays
const totalMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(totalMenu);

//spread operator on strings
const str = "Abhishek";
const letters = [...str, " ", "K."];
console.log(...str);
console.log(letters);

// const fullName = `${...str} Kumar`;

//passing 
restaurant.orderPasta("cheese", "jalapeno", "capsicum");
const ingredients = ["cheese", "jalapeno", "capsicum"];
console.log("")
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
console.log("")
restaurant.orderPasta(...ingredients);


//objects
const newRestaurant = {founderIn: 1992, ...restaurant, founder: "xyz"};
console.log(newRestaurant);
console.log("")
// console.log(...restaurant); //gives error cz ...restaurant creates a shallow copy of object by spreading the object
//we can make it work if we capture the spread keys of the object in object literal
console.log({...restaurant});
console.log("")

//creating shallow copy of objects
const newRestaurantCopy = {...newRestaurant}
console.log(newRestaurantCopy);
console.log(newRestaurantCopy.founder);
newRestaurantCopy.founder = "abc";
console.log("")
console.log(newRestaurantCopy.founder);