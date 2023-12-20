"use strict";
// what happens when we have multiple parameters to a function but we do not pass all of them as arguments when we call the function? Those parameters who do not receive a value are automatically set to undefined.
// we have an option to ensure that parameters are always initialised by a user-set-default value, rather than being set to undefined 
// And sometimes it can be useful to have functions in which some parameters are set by default. This way, we do not have to pass them in manually in case we don't want to change the default.

const bookings = [];
const createBooking = function(flghtNum, numPassengers, price){
    // this function creates an object and then push them into bookings array
    const booking = {
        flghtNum,
        numPassengers,
        price,
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking("LH123");
// OUTPUT: {flghtNum: 'LH123', numPassengers: undefined, price: undefined}


// Setting default parameters before ES6.

const bookings1 = [];
const createBooking1 = function(flghtNum, numPassengers, price){
    // this function creates an object and then push them into bookings array

    // using short circuiting to set values
    numPassengers ??= 1;
    price ??= 500;
    const booking = {
        flghtNum,
        numPassengers,
        price,
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking1("LH123");
// {flghtNum: 'LH123', numPassengers: 1, price: 500}

// Set setting the default parameters ES6 way
const bookings2 = [];
const createBooking2 = function(flghtNum, numPassengers = 1, price = 699){
    // this function creates an object and then push them into bookings array
    const booking = {
        flghtNum,
        numPassengers,
        price,
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking2("LH123");
// {flghtNum: 'LH123', numPassengers: 1, price: 699}
createBooking2("LH456", 2, 1100);
// {flghtNum: 'LH456', numPassengers: 2, price: 1100}



// we can use expression while setting default parameters as well, 
// and we can use the value of parameters set in function

const bookings3 = [];
const createBooking3 = function(flghtNum, numPassengers = 1, price = 699 * numPassengers){
    //ofc if our intention is to use a parameter to do some computational calculations then it must not be undefined as that would lead to 
    // so we can do this : const createBooking3 = function(flghtNum,  price = 699 * numPassengers, numPassengers = 1,)
    // this function creates an object and then push them into bookings array
    const booking = {
        flghtNum,
        numPassengers,
        price,
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking3("LH456", 2, 1100);
// {flghtNum: 'LH456', numPassengers: 2, price: 1100}
// We cannot skip the Arguments passed to a function like we skip Elements of an array or object while destructuring.
// createBooking3("NDLS1", ,5); // error
// The arguments passed to a function received are received by function in a sequential number.
createBooking3("NDLS2", 5); // NDLS2 is taken by flightNum and 5 is taken by numPassengers. price is set by default 
// if we wanted to leave a argument passed to a function,
    // to a default set by user Then we can skip over it by setting it undefined in the function argument while calling the function.
createBooking3("PNBE44", undefined, 1530);
//    this is how we basically skip a default parameter that we want to leave at its default