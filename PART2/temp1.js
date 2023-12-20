function cutFruitPieces(fruit) {
    //this function returns the fruit after cutting it into 4 pieces
    return fruit*4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(`${applePieces} slices of apples and ${orangePieces} slices of oranges available.`);
    const juice = `Juice with ${apples} and ${oranges} oranges have been made and served. Enjoy!!`;
    return juice;
}

console.log(fruitProcessor(2, 3));