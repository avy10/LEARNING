function count(){
    let count = 0;
    return function(){
        count++;
        return count;
    };   
}

const counter1 = count();
const counter2 = count();
const counter3 = count();
const counter4 = count();
counter1();
counter1();
counter1();
counter1();
counter1();
counter2();
counter2();
counter2();
counter3();
counter3();
counter3();
counter3();
counter3();
counter3();
counter4();
counter4();
counter4();
counter4();
console.log(counter1());
console.log(counter2());
console.log(counter3());
console.log(counter4());