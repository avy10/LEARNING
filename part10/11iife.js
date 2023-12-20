// Look at what they are so. sometimes in javascript, we need a function that is only executed once and then never again. So basically a function that disappears right after it's called once.

(function(){
    console.log("This is a IIFE Function.");
    
})();

((a = 1) => console.log(this.a, ++a))(); 
// undefined cz this keyword is pointing to global window object and it does not has a defined

(function(a = 5){
    console.log(this.a, a);
})();

// But you might be wondering, why was this pattern actually invented? Well, we already know that functions create scopes, right? And what's important here is that one scope does not have access to variables from an inner scope, right? For example, right here in this global scope, we do not have access to any variables that are defined in a scope of any of these functions here, right? 

// Does not have access to anything. It is inside of a scope. So in this case, of the scope created by this function here. Therefore, we say that all data defined inside a scope is private. We also say that this data is encapsulated. .

// So the inner scope would have access to anything defined outside here in the global scope, but the other way around ,the global scope does not have access to anything that is inside of the scope. 
// So in this case of the scope created by this function here. Therefore we say that all data defined inside a scope is private. We also say that this data is encapsulated. And today, encapsulation and data privacy are extremely important concepts in programming. So many imes we actually need to protect our variables from being accidentally overwritten by some other parts of the program, or even with external scripts or libraries. 