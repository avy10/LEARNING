'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
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
};

//without destructuring, we access elements of an array using indices
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2]

//with destructuring, we can declare all the 3 variables all at the same time 
//inside a [] i.e. square operator. 
const [x, y, z] = arr;
// console.log(x, y, z);
//[] on LHS is destructuring of array and, [] on RHS is array declaration


//destructuring does not destroys array
// console.log(arr);


const restaurant22 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

//destructuring the categories array 
const[first, second] = restaurant22.categories;
console.log(first, second);
//the categories array has 4 elements and we destructured first 2 elements
//we can also do destructuring of 1st and 3rd element without destructuring 2nd element
const[firstA, , thirdA] = restaurant22.categories;
console.log(firstA, thirdA);
//we simply leave a gap in variable declaration in the [] operator to skip over the element
const[firstB, , , fourthB] = restaurant22.categories;
console.log(firstB, fourthB);

const arr2 = [22, 33, 44];
let [firstArr2, secondArr2] = arr2;
console.log(`Before swap : firstArr2: ${firstArr2}; secondArr2: ${secondArr2};`);
//swap first two variables without using destructuring
const temp = firstArr2;
firstArr2 = secondArr2;
secondArr2 = temp;
console.log(`After swap: firstArr2: ${firstArr2}; secondArr2: ${secondArr2};`);

//swap with destructuring
let [firstArr20, secondArr20] = arr2; //cant use const here we are going to do swap and swap updates/changes the values
[firstArr20, secondArr20] = [secondArr20, firstArr20]; //we do not need let or const bcz we are simply doing re-assignment of value
console.log(`using destructuring: firstArr20 ${firstArr20}, secondArr20 ${secondArr20}`);

//we can have a function return an array and use destructuring to get the result into different variables
//this enables us to return multiple values of function


const restaurant33 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //order is a function which return an array i.e. multiple values
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

console.log(restaurant33.order(2, 0));
//we received an array, now destructure them
const[starterMeal, mainCourse] = restaurant33.order(2, 1);
console.log(starterMeal);
console.log(mainCourse);


//what if we have a nested array?
const nested = [2, 4, [88, 99]];
const [i, , j] = nested;
console.log(i);
console.log(j);
//now desturucture the 2nd array nested inside first array
//i.e. destructuring inside destructuring
let[outer1, outer2, inner1, inner2] = nested;
console.log(outer1, outer2, inner1, inner2);
//^^wrong
[outer1, outer2, [inner1, inner2]] = nested;
console.log(outer1, outer2, inner1, inner2);

//we can also set the default values for the variables when we are extracting them from an array using destructuring
//it is useful when we do not know the length of the array
let[m, n, o] = [12, 46];
console.log(m, n, o);
//setting default values:
[m = 1, n = 1, o = 1] = [12, 46];
console.log(m, n, o);