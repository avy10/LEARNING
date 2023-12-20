// Just like the call method bind also allows us to Manually add this keyword to any function call. 
// Now, the difference is they bind does not immediately call the function. 
// Instead, it returns a new function where the this keyword is bound. So it's set to whatever value we pass into mind. 

const luftHansa = {
    airlineName : "LuftHansa",
    iataCode : "LH",
    bookings : [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight : `${this.iataCode}${flightNum} `, name});
    }
}
const euroWings = {
    airlineName : "EuroWings",
    iataCode : "EWW",
    bookings : [],
    
}
const swissAL = {
    airlineName : "SwissAL",
    iataCode : "SAL",
    bookings : [],
}

const book = luftHansa.book;

// Binding the book method to two different objects using bind keyword.
const bookEuroWings = book.bind(euroWings);
// The bind keyword will return a new function in which the this keyword will always be set to euroWings.
const bookSwissAL = book.bind(swissAL);
// In this case, the new function will have this keyword set to swissAL

bookEuroWings(546, "AK")
bookSwissAL(789, "couco");

// Note that in the call method, we can define multiple arguments besides the this keyword.
// We can do the same with bind method as well.

// Right? And so in the byte method, we can actually do the same. And then all of these arguments will also be basically set in stone. So they will be defined. And the function will then always be called with these same arguments.
// For example, we could use spines to create a function for one specific airline and a specific flight number.
const bookEuroWingsFL23 = book.bind(euroWings, 23);
bookEuroWingsFL23("Abhishek");
bookEuroWingsFL23("Adi");
// What we did here. So basically specifying parts of the argument beforehand that is actually a common pattern called partial application. 
// So essentially partial application means that a part of the arguments of the original function are already applied which means already set. 
// And so that's exactly what the bookEuroWingsFL23 is

// bind is also useful When we use objects together with event listener.

// with event listeners
luftHansa.planes = 300;
luftHansa.buyPlanes = () => {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

// document.querySelector(".buy").addEventListener("click", luftHansa.buyPlanes);
// check 09index1.html, 09index2.html, 09index3.html
// document.querySelector(".buy").addEventListener("click", luftHansa.buyPlanes.bind(luftHansa));
// check E:\NEW NEW JS COURSE JS\LEARNING\part10\09index2FIXED.html





// Partial Application
// 09Bindpart2.js
