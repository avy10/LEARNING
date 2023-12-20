// we you don't need to return a function from another function in order to create a closure. Alright?
let f;
const g = function(){
    const a = 23;
    f = function(){
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function(){
        // console.log(b * 2, a * 2);
        console.log(b * 2);
    };
}

g();
f();
h();
f();