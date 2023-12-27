// two kind of timers
// setTimeout timer runs just once after a defined time
// setInterval keeps on running at a fixed interval and, it runs indefinitely till we stop it

setTimeout(() => {
    console.log("Here is your 🍕🍕");
}, 2500);

console.log("waiting?")
// the main thread executes setTimeOut
// in the setTimeOut we have a callback function, it is not main thread's responsibility to execute the callback function
// the main thread will continue execution ahead, and it will console.log waiting
// the Js executor, in vscode we have node.js, in chrome we have v8-engine. so the node.js will execute the callback function after 2.5 seconds have elapsed

// this mechanism is called asynchronous javascript

// if we have a callback function which requires some parameters, then how do we pass those arguments
// we are not calling the function ourselves, it is the setTimeOut function that will call the function
// so we can pass those arguments to setTimeOut function, and it will then pass those arguments onto callBack function
// after we have given callback function, time in ms as arguments, we can declare other arguments as well which will then be passed to the callBack function as arguments

const orderedItems = ["a medium burger", "medium fries", "large coke"];
setTimeout((fname, age) => {
    console.log(`my name is ${fname}. I am ${age} years old.`);
}, 5200, "avy", 26);

const orderABurger = setTimeout((item1, item2, item3)=> {
    console.log(`I would like to order ${item1} with ${item2} and a ${item3} please.`)
}, 7500, ...orderedItems);

// when a setTimeout is executed it starts a clock which keeps track of time, once the timer reaches the value that we provided
// the callback function is executed.
// we can stop the execution of the callback function but only before the timer expires
// when we do not store the setTimeout or setInterval in a variable,setTimeout or setInterval returns a key for us in the dev console, 
// we can use that key to perform clearTimeout or clearInterval
// and when we have stored setTimeout and setInterval in a variable, we can use that variable name to pass as argument for clearTimeout or clearInterval

// so the setTimeout just above orderABurger will return a key in browser's dev console
clearTimeout(orderABurger);