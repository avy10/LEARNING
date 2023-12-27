// we can substract one date from another date in order to calculate how many days have passed betweem the two dates
// whenever we convert a date into a number, it will result in a timestamp in milliseconds. 
// we can perform calculation on the milliseconds
// js has numbers supported till 2**53-1 and timestamps right now are in range of 10**13.

const future = new Date(2037, 10, 19, 15, 23, 5);
// convert a date into number using two methods we already know: 1. Number 2.unary'+' operator
console.log(`Date TimeStamp i.e. date in ms ${Number(future)}`);

const timeDiffms = (date1, date2) => (date2 - date1);
const a = timeDiffms(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(a);
const aInDays = timeDiffms(new Date(2037, 3, 14), new Date(2037, 3, 24)) / (1000*60*60*24);
// ms divided by 1000 => ms to s
// s divided by 60 => s to min
// min divided by 60 => min to hours
// hours divided by 24 => hours to days
console.log(aInDays);

const calcDays = (date1, date2) => timeDiffms(date1, date2) / (1000*60*60*24);

// in real world applications we do not use internal date and time. Because it involves some unique calculations for ex- daylight savings
// our dates has to be region specific for accurate local time
// format should also follow the country default

// which is why we prefer to use external date library like "moment.js"

const dateWithTimeWan = new Date(2037, 3, 14, 10, 8, 5);
console.log(calcDays(new Date(2037, 3, 4), dateWithTimeWan));

// when the date has time in it but other does not we will get a fractional value, so it is best to round it off
console.log(calcDays(dateWithTimeWan, future));