// How to set this keyboard manually? And why would we want to do that?
const luftHansa = {
    airlineName : "LuftHansa",
    iataCode : "LH",
    bookings : [],

    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight : `${this.iataCode}${flightNum} `, name});
    }
}


luftHansa.book(239, "Avy");
luftHansa.book(420, "Stevon");

const euroWings = {
    airlineName : "EuroWings",
    iataCode : "EWW",
    bookings : [],
    
}

const book = luftHansa.book;

// book(69, "Samantha"); //does not work
// notice the output before we got the undefined error
// Samantha booked a seat on undefined flight undefined69
// Samantha and 69 were passed as arguments so they are known to the book method
// but airlineName and iataCode is not known to the book method
// that is because this keyword do not have reference to any object. 
// why? because there is no particular object calling the book method, it is a simple function call
// in "luftHansa.book(239, "Avy");", lufthHansa object calls book method, 
// so the this keyword inside book method has reference to the caller object i.e. luftHansa

// now, how to tell JS that we want to create a booking on euroWings airline, without copying the book method inside euroWings object
// or without creating a book property inside euroWings object
// and can we do the same for luftHansa object

// to achieve that we would have to explicitly tell JS about where should the this keyword point to
// if we want to book a luftHansa flight, this should point to luftHansa object and,
// if we want to book a euroWings flight, this should point to euroWings object


// there are 3 function methods to to that:
    /* 
    1. call
    2. apply
    3. bind
     */
// CALL METHOD
// in call method the first argument is exactly what we want the this keyword to point to
book.call(euroWings, 23, "Samantha"); 
// ^^manually/explicitly manipulated the this keyword to point to euroWings object instead of luftHansa object, 
// even though the book function is a property of luftHansa object

book.call(luftHansa, 699, "klmop");

const swissAL = {
    // THE PROPERTY NAME SHOULD MATCH THE PROPERTY NAME BEING USED IN LUFTHANSA OBJECT OR IN THE BOOK FUNCTION
    airlineName : "SwissAL",
    iataCode : "SAL",
    bookings : [],
}

book.call(swissAL, 1345, "Tove");
console.log(swissAL.bookings);

// APPLY METHOD
// similar to call method
// call methods receives a list of arguments after the this keyword
// but apply methods receives an array as arguments after this keyword. the array has elements that we are supposed to pass 
const flightData = [583, "Jorge"];
book.apply(swissAL, flightData);
book.apply(euroWings, [78945, "kekw"]);
// in modern JS, apply method is NOT used much
// because we have a better way of doing the exact same thing

book.call(euroWings, ...flightData); // LOL

// Each time that we want to use the book function outside of Lufthansa object we have to use call or apply method repeatedly for each individual method call.
// This repetition of same keyword is undesirable And there is an alternate method that we use bind keyword 
// We only need one operation connect the book method with any other object using bind keyword, and then we don't have to use call or apply every time we call the book function.

// BIND METHOD : more important than call and apply method











