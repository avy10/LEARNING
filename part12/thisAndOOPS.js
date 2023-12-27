
class Avy{

    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    add = () => this.a + this.b;
    sub = function(){
        return this.a - this.b;
    }
    static multiple = function(){
        return this.a * this.b;
    }
}

const obj = new Avy(11, 5);

console.log(obj.add());
console.log(obj.sub());

console.log(obj.add.call({a: 26, b : 7}));
console.log(obj.add.call(obj));

const fn = obj.add;
console.log(fn);

console.log(fn.call({a: 26, b : 7}));
console.log(fn.call()); 
console.log(fn.call(obj)); //16

const subfn = obj.sub;
console.log(subfn.call({a:26, b:7}));
console.log(subfn.call({}));

const avyAddFn = Avy.add;
console.log(avyAddFn)

const avySubFn = Avy.sub;
console.log(avySubFn);

const avyMultiFn = Avy.multiple;
console.log(avyMultiFn);
console.log(avyMultiFn.call({a: 10, b:52}));

/* 
//results:
console.log(obj.add()); //16
console.log(obj.sub()); //6

console.log(obj.add.call({a: 26, b : 7})); //16
console.log(obj.add.call(obj)); //16

// add wali function ko bahar nikal sakte?
const fn = obj.add;
console.log(fn); //() => this.a + this.b

console.log(fn.call({a: 26, b : 7})); //16

// output is 16. because arrow function hai so it is unable to capture the object we are passing in parameters of call.
// because arrow function use this from parent scope, because the parent scope is the object which instantiated this add method, it is still refering to obj object hence values are 11 and 5
// it does not matter in line 24 that we are passing obj as parameter for call. the above reason is still applicable
// output would be 16 even without a object being passed to call
console.log(fn.call()); //16
console.log(fn.call(obj));

const subfn = obj.sub;
console.log(subfn.call({a:26, b:7}));
// console.log(subfn.call()) //because no arguments is passed, we get a undefined typeError
// console.log(subfn()) //same error but this time it is because subfn is no longer attached with an object of Avy class. but it still needs to be called by an object which has a and b values.
// when an object calls subfn, the object is now the caller of the object, so the this reference in the subfn points to the object and if the object has a and b property defined it will access them
console.log(subfn.call({})); //here we call the subfn with an object which has no property, hence there is no a and b defined
// add a console.log(this) to the sub function of Avy class

const avyAddFn = Avy.add;
console.log(avyAddFn)

const avySubFn = Avy.sub;
console.log(avySubFn);
// both of them are undefined because those methods are part of an instance of class Avy. they are not part of the Avy class.
// hence without instance, they can not be accessed 

// to make a function of a class accessible without creating an instance, we need to set the function to static

const avyMultiFn = Avy.multiple;
console.log(avyMultiFn);
console.log(avyMultiFn.call({a: 10, b:52})); //520
*/

