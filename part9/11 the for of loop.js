const restaurant = {
  restaurantName: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let item of menu) console.log(item);

for (let item of menu.entries()) {
  console.log(item);
}

console.log(" ");
for (let item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
  // item[0] contains index of the item. we are adding 1 to convert 0-based indexing into 1-based serialisation
  //   console.log(`${item[0]}`); //item[0] gives index. it starts from 0 and inc till array.length-1
  //   console.log(`${item[1]}`); //item[1] gives element at index 0
}
console.log("  ");
//using destructuring
for (let [i, item] of menu.entries()) {
  console.log(`${i} : ${item}`); //recall each array returned by entries() contains [key, value] pair
  //so we can destructure them like [i, item]
}
// console.log(menu)

// we can also write anything we want in place of [i, item], cz it is a simple destructuring of array
for(let [rank, winner] of menu.entries()){
  console.log(`At rank ${rank + 1} we have player ${winner}`);
}