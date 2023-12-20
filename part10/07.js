const greet = function(greeting){
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet("hey");
greeterHey("Avy");
greeterHey("Stevon");

greet("BYE BYE")("Avy"); // the first argument is for greet function, "BYE BYE" is accepted by greeting
// the second argument is for the function which is being returned by the greet function. so "Avy" is accepted by name
// functions returning another function is an important aspect of FUNCTIONAL PROGRAMMING PARADIGM
