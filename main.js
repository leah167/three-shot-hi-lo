const prompt = require('prompt-sync')();

// the random number generated and cannot be changed
const randomNum = Math.floor(Math.random() * 100) + 1

// by formatting it this way, I can have it prompt the number at the '>' like in the example.
console.log("Guess a number between 1-100: ");
let guess = Number(prompt("> "));

// establish counter to limit how many tries you get (sets while loop condition and increment)
// starts at 2 because first turn was used at prompt
let turns = 2;

// encompass everyhting in while loop to allow for the 'correct' message to display after wrong 
// initial guess.

while (turns > 0) {
    // use if statements to cover all possibilities
    // est increment based on which 'if' statement is true
   if (guess === randomNum) {
       turns = 0
       console.log("Congratulations! " + randomNum + " is the correct number!");
    } else if (guess < randomNum) {
        turns--;
        console.log("Sorry, too low! Guess again: ");
        guess = prompt("> ");
    } else if (guess > randomNum) {
        turns--;
        console.log("Sorry, too high! Guess again: ");
        guess = prompt("> ");
    }
}
if (turns === 0) {
    console.log("Wrong! Out of turns! The correct number is " + randomNum + ".");
}

    
    




// only three attempts.
// first question: does guess = randomNum
// if yes: congrats message
// if no: check next 'if' condition
// make while loop condition countdown turns from 3 
// make while loop increment by subtracting one each time guess is checked
// use if statements to check guess:
// if guess is less than randomNum, output "sorry too low message" and prompt another guess
// if guess is higher than randomNum, output "sorry too high message" and prompt another guess
// allow for congrats message to appear when correct answer guessed after an initial wrong answer
// when counter gets to three tries, output sorry message and answer.