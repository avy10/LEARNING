const weekdays = ["mon", "tue", "wed", `thu`, `fri`, `sat`, `sun`]

const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [`day-${2+2}`]: {
      open: +0, // Open 24 hours
      close: 24,
    },
  };
console.log(openingHours);
const restaurant = {
    restaurantName: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
    // openingHours : {
    //     thu: {
    //         open: 12,
    //         close: 22,
    //     },
    //     fri: {
    //         open: 11,
    //         close: 23,
    //     },
    //     sat: {
    //         open: 0, // Open 24 hours
    //         close: 24,
    //     },
    // },
    //propertyName : object Literal

    //we have moved the openingHours object from inside the restaurant object
    //but we can still set a property openingHours and then assign the object to it
    // openingHours : openingHours,
    //propertyName : object variable that we had declared earlier in JS file 
    //we can change name of propertyName
    // oH : openingHours,

    //with ES6 enhanced object literal, we can simply use the name of variable of object declared 
    //to set it as a property name and then it itself get assigned to the property
    openingHours,
    //but we can not write oH and expect JS to understand that
    //oH : openingHours => the oH property stores reference to an object openingHours
    //openingHours => variable name "openingHours" is set as both the property name and reference to the object, 
    //so the propertyName should be exactly same as variable name of object


    // order : function(starterIndex, mainIndex) {
    //     return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    // },
    order(starterIndex, mainIndex) {
        return[this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery(objParam) {
        console.log(objParam);
    },

    orderDeliveryDest : function({starterIndex, mainIndex, time, address}) {
        console.log(`order received!!  ${this.starterMenu[starterIndex]}  and  ${this.mainMenu[mainIndex]}  will be delivered to  ${address}  on time  ${time}`);
    },

    orderDeliveryDestDef ({starterIndex = 0, mainIndex = 1, time = "21:25", address = "patna"}) {
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

// console.log(restaurant.oH)
console.log(restaurant.openingHours)