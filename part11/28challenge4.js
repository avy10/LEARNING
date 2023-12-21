const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

(function a(dogs){
    dogs.forEach(element => {
        element.recFood = Math.trunc(element.weight ** 0.75 * 28);
    });
    dogs.forEach(element => {
        element.owners.includes("Sarah") && console.log(`${element.curFood > element.recFood ? "Yes the dog is overEating" : "No the dog is not overeating"}`)
    })
})(dogs);
console.log(dogs);
const ownersEatTooMuch = dogs.filter(element => element.curFood > element.recFood);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(element => element.curFood < element.recFood);
console.log(ownersEatTooLittle);
ownersEatTooMuch.forEach(element => {
    const names = element.owners.join(" and ");
    // console.lo
})