//creating a restaurant map
    //easiest way to create a map is to create an empty map and then pass elements to it

const restaurant = new Map();

restaurant.set("name", "Classico Italiano");
restaurant.set(1, "Firenze, Italy");
//the set method also returns the map it updates
console.log(restaurant.set(2, "Lisbon, Portugal"));
//because the set method returns the new updated map, we can chain multiple set method together
restaurant.set("categories", ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set("open", 11).set("close", 23);
console.log(restaurant);
restaurant
    .set(true, "we are open")
    .set(false, "we are closed");

//to retrieve an element from a map, we need to use get method where we pass a key
console.log(restaurant.get(true));
console.log(restaurant.get("name"));
console.log(restaurant.get("1")); //undefined
console.log(restaurant.get(1));

const time = 21;
console.log(restaurant.get(time > restaurant.get("open") && time < restaurant.get("close")));
const time2 = 8;
console.log(restaurant.get(time2 > restaurant.get("open") && time2 < restaurant.get("close")));

// check if the map contains a certain key
console.log(restaurant.has(1));
console.log(restaurant.has("open"));

//we can delete elements
// the delete() methods true or false when we delete an element
console.log(restaurant.delete(2));

console.log(restaurant.delete(2)); //false cz the key has already been deleted

//size of map
console.log(restaurant.size);

//clear the maps
restaurant.clear();
console.log(restaurant);

//setting array as keys
console.log(restaurant.set[1,2], "TEsting");
console.log(restaurant.get[1, 2]);

//solving the problem
const arr = [1,2];
console.log(restaurant.set(arr, "TESTING 2.0"));
console.log(restaurant.get(arr));

// use of any data structure as key can be helpful in selection DOM Elements
restaurant.set(document.querySelector("h1"), "H1 is selected inside a map");
console.log(restaurant);