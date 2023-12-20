const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet("hey");
greeterHey("Avy");
greeterHey("Stevon");

greet("BYE BYE")("Avy");