const mark = {
    weight: 78,
    height: 1.69,
    fullName: "Mark miller",
    calcBMI: function() {
         this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    } 
}

const john = {
    weight: 92,
    height: 1.95,
    fullName: "John Smith",
    calcBMI: function() {
        this.bmi = this.weight / (this.height ** 2);
        return this.bmi;
    }
}

console.log(mark);
console.log(john);
console.log(mark.calcBMI());
console.log(john.calcBMI());

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
}