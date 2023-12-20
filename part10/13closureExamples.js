// we you don't need to return a function from another function in order to create a closure. Alright?
let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}



g();
f();