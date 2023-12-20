'use strict';
/* 
//SELECTING AND MANIPULATING ELEMENTS

console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!! 😍😍";

document.querySelector(".number").textContent = 11;
document.querySelector(".score").textContent = 20;

document.querySelector(".guess").value;
console.log(document.querySelector(".guess").value);
*/


//HANDLING CLICK EVENTS
//selecting the button element with class check
const userName = prompt("Enter your Name.");
document.querySelector("#un").textContent = userName;
const reset = function (){
    score = 20;
    number = Math.trunc(Math.random()*20)+1;
    document.querySelector(".number").textContent = "?";
    document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
    document.getElementsByClassName("message").textConntent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".highscore").textContent = highScore;
    console.log("ORIGINAL NUMBER", number);
}
const gameLogic = function () {
    const guess = Number(document.querySelector(".guess").value);
    // console.log(guess);
    console.log(typeof(guess), guess, "original num", number);
    
    if(!guess) {
        document.querySelector(".message").textContent = "!!No Number!!";
        
        //manipulating css part 2
        //when input is empty
    } else if(guess === number) {
        document.querySelector(".message").textContent = "YAY!! Correct guess. 😍😍";
        score--;
        highScore = score;
        document.querySelector(".score").textContent = score;
        document.querySelector(".highscore").textContent = highScore;
        document.querySelector(".number").textContent = guess;

        //manipulating css part 1
        //when player wins
        document.querySelector("body").style.backgroundColor = "#60b347"; 
        document.querySelector(".number").style.width = "25rem";
        document.querySelector(".number").style.height = "20rem";
        document.querySelector(".number").style.fontSize = "12rem";
        return;
    } else if(guess > number) {
        document.querySelector(".message").textContent = "Too High!!";
        score--;
        document.querySelector(".score").textContent = score;
    } else if(guess < number) {
        document.querySelector(".message").textContent = "Too Low!!";
        score--;
        document.querySelector(".score").textContent = score;
    }

    if(score === 0) {
        //manipulating css part 3
        // when player had lost 
        window.alert("Sorry you lost. All attempts exhausted. Restarting game.");
        reset();
        return;
    }
}
// function gameLogic(){
//     const guess = document.querySelector(".guess").value;
//     console.log(guess);
// }


let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
console.log("ORIGINAL NUMBER", number);
// document.querySelector(".guess").value = 19;



document.querySelector(".check").addEventListener("click", function () {
    // const guess = document.querySelector(".guess").value;
    // console.log(guess);
    gameLogic();
});
document.querySelector(".again").addEventListener("click", function(){
    reset();
});


