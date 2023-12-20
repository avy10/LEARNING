const arr = [1, 2, 3, 4];
const arr2 = [100, 99, 98, 97, ...arr];
console.log(arr2);

const [a, b, ...others] = arr2;
//a will capture 100, b will capture 99 and others will become an array and capture remaining elements of arr2 
console.log(a);
console.log(b);
console.log(others);


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

  orderPizza : function(topping1, topping2, ...otherToppings) {
    const[side1, side2, ...otherSide] = otherToppings;
    console.log(`Here is your ${topping1} and ${topping2} pizza with ${side1} and ${side2} `);
    console.log(" ");
  },
};

const[pizzaVar, , risottoVar, focacciaVar, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// pizzaVar captures pizza, we are skipping over pasta, 
// risottoVar captures risotto. focacciaVar captures focaccia and remaining items of starterMenu inside otherFood array
// rest pattern does not include any skipped elements, rest pattern included all the remaining elements after focaccia
console.log(pizzaVar);
console.log(risottoVar);
console.log(focacciaVar);
console.log(otherFood);
// because rest pattern captures all the remaining elements, we can not do destructuring after doing rest pattern
// const[a, b, c, ...othFoods, d] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// A rest element must be last in a destructuring pattern.

// capture sat in its own variable and collect fri and thu into a new object called weekdays
const {sat : saturDay, ...weekDays} = restaurant.openingHours;
console.log(saturDay);
console.log(" ");
console.log(weekDays);

//function for add. the function would take any arbitrary number of arguments
const add = function(...numbers){
    // the rest pattern ...numbers will take all the elements that is being passed as arguments,
    //  and combine them into an array named numbers
    console.log(numbers);
    let sum = 0;
    
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum);
    console.log(" ");

}

add(2, 3);
add(3, 4, 5);
add(11, 22, 33, 44, 55, 66, 77, 88);

restaurant.orderPizza("paneer", "onion", "capsicum", "mozzarella");
restaurant.orderPizza("onion", "capsicum");