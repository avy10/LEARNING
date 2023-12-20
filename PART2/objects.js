const sports = ["football", "cricket", "badminton", "F1", "basketball"];
const calcAge4 = birthYear => 2055-birthYear;

const avy = {
    firstName: "Abhishek",
    lastName: "Kumar",
    age: 2*13,
    job: "Developer",
    sports: sports,
    hasDriversLicense: false,
    ageLater: calcAge4(1997),
    birthYear: 1997,
    salary: 150000,
    ageNow: function (birthYear) {
        return 2023-birthYear;
    },
    ageOld: function() {
        //if we uncomment and execute the below line then it will print entire property of object avy
        //console.log(this);
        return 2090-this.birthYear;
    },
    taxPaid: function(){
        this.tax = this.salary * 0.25;
        // return this.tax; //if we return, it will simply return the value of tax after method call
        //i think in some circumstances it is better to return, as on the first method run the caller will get some value
        //`${avy.firstName} has paid ${avy.taxPaid()} in taxes`
    }
};
console.log(avy.ageNow());
console.log(avy.ageNow(1997));
console.log(avy.ageNow(avy.birthYear));
console.log(avy["ageNow"](1997));
console.log(avy.ageOld);//prints the details of function
console.log(avy.ageOld());
console.log(avy.tax); //undefined, because taxPaid function has not been run yet
console.log(avy.taxPaid); //prints the details of function
console.log(avy.taxPaid()); //the function has run, that means the age property for object avy has been declared now
console.log(avy.tax); //prints 37500
console.log(avy);

console.log(avy.lastName);
console.log(avy['lastName']);
console.log(avy['last'+'Name']);

console.log(avy["lastName"]);
const nameKey = "Name";
console.log(avy["first" + nameKey]);
console.log(avy["lastName"]);

//DIFFERENCE BETWEEN . AND []
//run this below piece of code in browser console, node.js will error
// const interest = prompt("what would you like to know about avy?");
// console.log(avy.interest);
// console.log(avy[interest]);

//if "job" is input in prompt
// then console.log(avy.interest); yields undefined because object avy does not have a "job" key
// but if we try console.log(avy[interest]), then it yields "Developer"
avy.location = "Patna";
avy["country"] = "India";
console.log(avy);

//write: avy watches more than (number of) sports but football is his favourite sports.
console.log(`${avy.firstName} watches ${avy.sports.length} sports but ${avy.sports[0]} is his favourite sports.`);

if(avy.hasDriversLicense) {
    console.log(`${avy.firstName} is a ${avy.ageNow(avy.birthYear)} year old guy and he has a drivers license.`);
} else {
    console.log(`${avy.firstName} is a ${avy.ageNow(avy.birthYear)} year old guy and he paid ${avy.tax} in taxes.`);
}
    console.log(`${avy.firstName} is a ${avy.ageNow(avy.birthYear)} year old guy and he has a drivers license.`);