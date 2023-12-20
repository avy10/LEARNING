const restaurant1 = {
    fname : "Dominozzzzzzzz",
    numGuests: 0,
}

const restaurant2 = {
    fname : "le McD",
    owner : "idk who.com"
}

//set a default number of guests to all the objects that do not have the numGuests property
// restaurant1.numGuests = restaurant1.numGuests ?? 10;
// restaurant2.numGuests = restaurant2.numGuests ?? 10;
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;
console.log(restaurant1.numGuests);
console.log(restaurant2.numGuests);

//annonymise names of restaurant owners
restaurant1.owner &&= "Anonymous";
restaurant2.owner &&= "Anonymous"
console.log(restaurant1.owner);
console.log(restaurant2.owner);