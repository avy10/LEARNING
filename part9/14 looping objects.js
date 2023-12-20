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


// loop over keys
for(const day of Object.keys(openingHours)){
    console.log(day);
    console.log(typeof day); //string

}

//print keys
const properties = Object.keys(openingHours);
console.log(properties);
// Object.keys returned the keys present in an object as an array of string datatype containing the keys as string
console.log(`we are open on ${properties.length} weekdays`)
console.log(" ");
let openDaysStr = `We are open on ${properties.length} days :`;
for(const day of properties){
    openDaysStr += ` ${day},`;
}
console.log(openDaysStr);

//values present inside keys
const values = Object.values(openingHours);
console.log(values);

//to loop over the entire object i.e. loop over both the keys and values together
console.log("Entries: ")
const entireObject = Object.entries(openingHours);
console.log(entireObject)

for(const x of entireObject){
    console.log(x)
}


//we can destructure the entireObject array as it is 2d array with key at 0 index and value at 1 index
for(const[key, value] of entireObject){
    console.log(`key is ${key}, and value is ${value}`)
}

/* OUTPUT:
key is thu, and value is [object Object]
key is fri, and value is [object Object]
key is sat, and value is [object Object] */


//because the value at index 1 happens to be an object we got the above output
//we can easily destructure that object present at index 1 
for(const[key, {open : openTiming, close : closeTiming}] of entireObject) {
    console.log(`On ${key}day, restaurant opens at ${openTiming} and closes at ${closeTiming}`);
} 

/* 
[[key1, {open: open1, close: close1}], [key2,{open : open2, close: close2}],[key3,{open : open3, close : close3}]] = entireObject
console.log(key1, key2, key3);
console.log(open1, open2, open3);
console.log(close1, close2, close3);
*/