const sports = ["football", "cricket", "badminton", "F1", "basketball"];
console.log(sports);
console.log(sports[0]);
console.log(sports[1]);
console.log(sports[2]);
console.log(sports.length);
console.log(sports[sports.length-1]);
sports[1] = "Tennis";
console.log(sports[1]);

const firstName = "Abhishek";

const avy = [firstName, "Kumar", 2055-1997, 'developer', sports];
console.log(avy);
console.log(avy[4]);
console.log(avy[4][1]); 

const calcAge4 = birthYear => 2055-birthYear;

const agesArray = [calcAge4(1991), calcAge4(1993), calcAge4(1995), calcAge4(1997), calcAge4(1999)];
console.log(agesArray);

console.log("----- ARRAY METHODS ------")
sports.push("CSGO2");
console.log(sports);
console.log(sports.push("MotoGP"));

console.log("unshift ",sports.unshift("Chess"));
console.log("pop ", sports.pop());
console.log("shift ", sports.shift());

console.log("index of football in sports array",sports.indexOf("football"));
const indexOfF1 = sports.indexOf("F1", 2);
console.log("index of F1 in sports array", indexOfF1);
console.log("index of Chess in array", sports.indexOf("chess"), "yep it is not present in the array");

console.log("is basketball element present at/after index 3", sports.includes("basketball", 3));
console.log("is basketball element present at/after index 5", sports.includes("basketball", 5));
const isPresent = sports.includes("CSGO");
console.log("is CSGO present", isPresent);

sports.push(720);
console.log(`is 720 present as string by includes method ${sports.includes("720")}`);
console.log(`is 720 present as number by includes method ${sports.includes(720)}`);

console.log(`is 720 present as string by indexOf method ${sports.indexOf("720")}`);
console.log(`is 720 present as number by indexOf method ${sports.indexOf(720)}`);

