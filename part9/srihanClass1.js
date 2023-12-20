const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 15,
      f: {
        x: 52,
        y: 26,
        z: {
          p: 223,
        },
      },
      g: 17,
    },
  },
};
let {
  a: varA,
  b: {
    c: varC,
    d: {
      e: varE,
      g: varG,
      f: {
        z: { p: varP },
        x: varX,
        y: varY,
      },
    },
  },
} = obj;
// console.log(varA);
// console.log(varC);
// console.log(varE);
// console.log(varG);
// console.log(varP);
// console.log(varX);
// console.log(varY);
// varA varC varE varG varP varX varY are the variables that hold the value of keys a, c, e, g, p, x, y
// now, the keys b, d, f, z themselves store object in them, they do not hold single values in them so we did not destructure them
const avy = {
  fname: "abhishek",
  lname: "kumar",
  games: {
    current: "Valorant",
    pastWan: "SOTR",
    pastTwo: "FIFA",
  },
};

// let {{current : game1, pastWan : game2, pastTwo : game3}} = avy.games;
//if intention is to write like that then we only need one destructure brackets, not two
// let { current: game1, pastWan: game2, pastTwo: game3 } = avy.games;
// console.log(game1, game2, game3);
//or we can destructure games object inside the destructuring of avy
let {
  games: {},
} = avy; //this is destructuring of "games" key present inside object avy. the "games" key holds an object inside it

let {
  games: { current: game1, pastWan: game2, pastTwo: game3 },
} = avy;
console.log(game1, game2, game3);

//what if we destructured games object in this way:
let { games: allTheGames } = avy;
console.log(allTheGames);
// this is essentially another way of writing
let allTheGamesCopy = avy.games;
console.log(allTheGamesCopy);
console.log(allTheGames == allTheGamesCopy);
console.log(allTheGames === allTheGamesCopy);
