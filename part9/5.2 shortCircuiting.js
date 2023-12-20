console.log(0 && "Jonas");
console.log(1 && "avy");
console.log(1 && 2);
console.log(1 && 0);

console.log("hello" && 23 && null && "avy");


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

if(restaurant.orderPizza) {
    restaurant.orderPizza("onion", "paneer");
}

restaurant.orderPizza && restaurant.orderPizza("Onion", "paneer", "Capsicum", "pepperika")