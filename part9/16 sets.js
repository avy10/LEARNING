const ordersSet = new Set(
    [
        "pasta",
        "pizza",
        "pizza",
        "risotto",
        "pasta",
        "pizza",
    ]
);

console.log(ordersSet);
const setOfName = new Set(`Abhishek Kumar`);
console.log(setOfName) //possible because sets are iterable
// the data inside set is ofcourse case sensitive

// size of set
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("pizza"));

//to check if an element is present
console.log(setOfName.has("z"));
console.log(setOfName.has("A"));

//we can add new elements as well
ordersSet.add("burger");
ordersSet.add("noodles");
ordersSet.add("burger");
console.log(ordersSet)

//we can delete individual elements
ordersSet.delete("pizza");
console.log(ordersSet);

// how to access individual elements?
console.log(ordersSet[0]); // will not work

//delete all of the elements of a set
setOfName.clear();
console.log(setOfName)

//sets are iterables, we can loop over them

for(const elements of ordersSet){
    console.log(elements);
}

// example where an array contains many duplicate values. in that case we use a set to clean the array such that it contains only unique elements
const staff = ["waiter", "chef", "waiter", "manager", "chef", "receptionist", "waiter", "receptionist", "janitor"];
const uniqueStaff = new Set(staff);
console.log(uniqueStaff);

// because sets are iterable we can use the spread operator
const uniqueStaffArr = [...uniqueStaff];
const numberOfUniquePositions = uniqueStaff.size;
console.log(numberOfUniquePositions)
console.log(uniqueStaffArr);

// how many different type of alphabets are present in your name
const fullName = `abhishek kumar`;
const setOfFullName = new Set(fullName);
console.log(`total length of my name: ${fullName.length}`);
console.log(`number of unique alphabets in my name : ${setOfFullName.size}`);