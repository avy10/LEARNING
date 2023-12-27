
// the dates that we created using new Date are special type of objects, so they have their own methods 

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); //never use getYear(), always use getFullYear()


console.log(future.getMonth()); 
console.log(future.getDay()); //day of the week
console.log(future.getDate()); //day of the month
console.log(future.getHours()); 
console.log(future.getMinutes()); 
console.log(future.getSeconds()); 
// console.log(future.toISOString()); the string generated here is safe to use in new Date constructor
const timeStampOfFuture = future.getTime();
console.log(future.getTime());
console.log(future);

const someDate = new Date(timeStampOfFuture);
console.log(someDate)

// getting the timestap of present 
console.log(Date.now());

// there are some set methods as well
future.setFullYear(2077);
console.log(future);

