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
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
// console.log(openingHours);
const restaurant = {
    restaurantName: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    
    openingHours,

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

    orderPizza (topping1, topping2, ...otherToppings) {
        const[side1, side2, ...otherSide] = otherToppings;
        console.log(`Here is your ${topping1} and ${topping2} pizza with ${side1} and ${side2} `);
        console.log(" ");
    },
};

// console.log(restaurant.oH)
console.log(restaurant.openingHours) //we get an ouput
// lets check opening hours for monday
console.log(restaurant.openingHours.mon); //undefined as this property does not exist
// what if we checked the exact open time of the restaurant on mon
// console.log(restaurant.openingHours[mon].open); //we get error that mon is not defined
// to avoid this error, we should first perform the check whether restaurant opens on mon or not
if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon[open]);
restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.close);
// Writing multiple if statement or writing multiple checks To see whether a property is present or not,
//  can become really tedious if the object is Deeply nested with lots of optional properties.

//es2020 introduce introduced optional chaining
//In optional chaining If a certain property does not exist, then undefined is returned immediately. 
// And so that would then avoid the undefined error we saw with openingHours.mon.open

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
// The optional chaining operator works on the same nullish concept that we saw in nullish coalescing operator.
// A property exists if it's not null or not undefined.

console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant.openingHours?.fri?.open);


const days= ["mon", "tue", "wed", `thu`, `fri`, `sat`, `sun`]

for(const day of days){
    // console.log(day, restaurant.openingHours[day]?.open);
    // console.log(`On ${day}, we open at ${restaurant.openingHours[day]?.open || "closed"}`);
    //we are getting undefined value. instead of undefined we can set a default value
    //but on sat, it said closed, but the restaurant is open at 0 and remains open for 24H
    //we can use nullish coalescing operator instead of OR operator
    console.log(`On ${day}, we open at ${restaurant.openingHours[day]?.open ?? "closed"}`);

}
//we can see that on sat, restaurant is open at 0Hrs, and it stays open for 24H


// OPTIONAL CHAINING FOR METHODS
console.log(restaurant.order?.(0, 1) ?? "method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Mehtod does not exist");

const users = [{name : "avy", age : 26}, {name : "Jo", email : "JoMama@xyz"}];
for(let user of users){
    console.log(user.name ?? "name property not available");
    console.log(user.email ?? "Email property not available");
    console.log(user.age ?? "Age property not available");
}