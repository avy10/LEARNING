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

  //destructuring the above function
  orderDeliveryDest : function({starterIndex, mainIndex, time, address}) {
    //we have written destructure of object inside parameters
    //so we get 4 variables to work with
    console.log(`order received!!  ${this.starterMenu[starterIndex]}  and  ${this.mainMenu[mainIndex]}  will be delivered to  ${address}  on time  ${time}`);
  },

  //now assigning default values
  orderDeliveryDestDef : function({starterIndex = 0, mainIndex = 1, time = "21:25", address = "patna"}) {
    //we have written destructure of object inside parameters
    //so we get 4 variables to work with
    console.log(`order received!!  ${this.starterMenu[starterIndex]}  and  ${this.mainMenu[mainIndex]}  will be delivered to  ${address}  on time  ${time}`);
  },
};

//destructuring restaurant
const {restaurantName, openingHours, mainMenu, categories} = restaurant; //skipping location
// console.log(restaurantName);
// console.log(openingHours); console.log(mainMenu); console.log(categories);

//what if we wanted the variable names to be different from the property names ??
const {restaurantName: rName, openingHours: openFrom, categories: choices} = restaurant;
// console.log(rName, openFrom, choices);

//assigning default values


const {menu = [], starterMenu: starterMenuChoices =[],  dessert: dessertChoices =[`no dessert available`]  } = restaurant;
// console.log(`menu : ${menu}`);
// console.log(`starter : ${starterMenuChoices}`);
// console.log(`dessert: ${dessertChoices}`);


// Mutating variables while destructuring objects
const obj = {
    a: 25,
    b: 55,
    c: 77,
};
let a = 111;
let b = 900;
    //in order to mutate we can not to these
    // const{a, b} = obj;
    //or,
    // let {a, b} = obj;
// {a, b} = obj;
    //this code looks right but there is a syntax error
({a, b} = obj);
    //this one works perfectly fine
    //bcz we are wrapping entire destructuring code in ()

// console.log(a, "     ", b)

//nested objects
// destructuring opening hours
// retrieve friday object from inside of openingHours object
// const {fri} = openingHours; //this is not nested destructuring cz we are destructuring openingHours to get
//  only the property: fri, which happens to be an object
// now because fri is object, we can destructure fri as well
// console.log(fri);
// console.log("if we do not destructure we'd need to do this const {obj2 : {fname, lname}} = avy; : ", restaurant.openingHours.fri)

// const {fri: {open, close}} = openingHours; //in this one we are doing nested destructuring
// //i.e. first we are destructuring openingHours to get fri object and then we are destructurin fri object to
// //get the values stored in the properties stored in open and close into local variables open and close respectively

// console.log(open, close);
// console.log("fri", fri);
// //error in console.log("fri", fri); because we do not have a variable fri declared anywhere
// //for that we need const {fri} = openingHours;

const {fri: {openV2, closeV2}} = openingHours; 
console.log(openV2, closeV2);//guess the output. HINT: the properties openV2 and closeV2 are not present in fri object
//hence undefined, undefined
// console.log("fri", fri); //why error? already discussed

// const {friV2: {open, close}} = openingHours; ///the object friV2 is not present inside openingHours
// console.log(open, close);
// console.log("fri", friV2);
// ^error: Cannot read properties of undefined (reading 'open')


// const {friV2: {openV2, closeV2}} = openingHours; //same error
// console.log(openV2, closeV2);
// console.log("fri", friV2);

//so the property name to destructure must be exact as declared inside the object, 
// otherwise how else Js is supposed to know which property to extract info from
//now we can assign the values of those properties to variable of our choice 

//also i was doing it wrongly
const {fri: {open : khulJaa, close : bandHoJaa,}} = openingHours;
//=> take "fri" object from "openingHours" object.
// and assign the value present in property in open to variable khulJaa, and 
// assign the value present in property in closr to variable bandHoJaa
// console.log("is khulJaa bandHoJaa working??",khulJaa, bandHoJaa);
// const {fri: {open : o, close : c}} = openingHours;
// console.log(o, c)

// in JS we can have functions with a lot of parameters which can make it difficult to know the order of parameters
// instead of defining the parameters manually, we can just pass an object as an argument into the function 
// and the function will immediately destructure the object.

restaurant.orderDelivery({
  time: "22:30",
  address: "Patna",
  mainIndex: 0,
  starterIndex: 2
});
 

restaurant.orderDeliveryDest({
  time: "22:30",
  address: "Patna",
  mainIndex: 0,
  starterIndex: 2
})

restaurant.orderDeliveryDestDef({});