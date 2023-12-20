const flight = "LM10";
const avy = {
    fullName : `Abhishek Kumar`,
    passportNo : 2025199710,
}

const checkIn = function(flightNum, passenger){
    //passenger is object;
    flightNum = "HS69";
    passenger.fullName = `Mr. ` + passenger.fullName
    passenger.passportNo === 2025199710 && console.log("passenger has checked in");
    passenger.passportNo === 2025199710 || console.log("Wrong Passport");
}
checkIn(flight, avy);
console.log(flight);
console.log(avy);


const flightNum = flight;
const passenger = avy;

// when you try to copy an object like we did in "const passenger = avy", 
// we are really only copying the reference to the avy object in the memory heap and,
// both passenger and avy point to the same object in memory.
// so that's exactly what is also happening here with the avy object as we pass the avy object into the checkIn function.
// after being passed, both passenger and avy point to the same object because both of them store the exact same memory reference
// So here as we are manipulating the passenger object it is exactly the...
// ...same as manipulating the jonas object once again because they both are the same object in the memory heap

// Alright so in summary pressing a primitive type to a function is really just the same as creating a copy 
// like we did in "const flightNum = flight"
// so the value is simply copied.
// on the other hand when we pass an object to a function it is really just like copying an object like we did in 
// "const passenger = avy" 
// so whatever we change in a copy will also happen in the original 

const newPassport = function(person){
    person.passportNo = Math.trunc(Math.random() * 1000000000 + 1);
}


newPassport(avy);
checkIn(flight, avy);
console.log(avy);

/* Now just to finish in programming, there are two terms that are used all the time when dealing with functions,
 which is passing by value and passing by reference. 
 And many experience programmers that are new to javascript have some confusion between these terms and how it works in javascript. 
 And so I want to quickly address that here as well. 
 So Javascript does not have passing by reference, only passing by value, even though it looks like it's passing by reference. 
 So there are languages like C++, where you can pass a reference to any value instead of the value itself. 
 This works even with primitives. So you could pass a reference to the value 5 and then the original value outside of the function would be changed.
  And this is called passed by reference. 
  
  But once again, javascript does not have passed by reference. 
  Both JavaScript and JAVA languages are pass by value.
  So if you already know some programming that aren't new to javascript, be sure to understand this. 
  And I know it's confusing, because as we just learned for objects, we do, in fact, pass in a reference. So the memory address of the object. 
  However, that reference itself is still a value. It's simply a value that contains a memory address. 
  So basically, we pass a reference to the function, but we do not pass by a reference.*/
  