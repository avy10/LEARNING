const oneWord = function(str) {
    return str.replace(/ /g, "").toLowerCase();
    // this function takes a string and returns it after removing spaces inside it and converting entire string to lower case

}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
}

console.log(upperFirstWord("abhishek"));

const transformer = (str, fn) =>{
    // this is a higher order function
    console.log(upperFirstWord(str));
    // function is an object, it has methods as well as properties
    // one such property is name property
    console.log(`Transformed by : ${fn.name}`);
}

transformer("Javascript is a good language!", upperFirstWord); 
// upperFirstWord is only being passed as a value, it is not being called. to call we would have to write upperFirstWord()
// transformer("kuok k k k")
transformer("Javascript is a good language!", oneWord); 

// The concept of callback functions helps us to split our codebase intto more reusable and interconnected parts.
// second advantage is that it allows abstraction on our codebase.