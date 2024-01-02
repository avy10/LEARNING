const prom = new Promise((resolve, reject) => {
    let rand = Math.random();

    if(rand < 0.5) {
        resolve(`Success : ${rand}`);
    } else {
        reject(`Failure : ${rand}`);
    }
});

prom
 .then((val) => {
   console.log(val);
 })
 .catch((val) => {
   console.log(val);
 });

console.log("I am Groot")