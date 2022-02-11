const prompt = require('prompt-sync')();

// the number I chose is 16 and cannot be changed
const myNum = 16

// by formatting it this way, I can have it prompt the number at the '>' like in the example.
console.log("Guess what number I'm thinking of between 1-100: ");
let guess = Number(prompt("> "));

// establish counter to limit how many tries you get (sets while loop condition and increment)
let count = 1;

// Start with 'if' statement that checks whether or not the number was guessed correctly (guess=myNum)
if (guess !== myNum) {
    // 'while' loop created when guess does not equal myNum to limit tries to 3 (based on 'count'). 
    while (count < 3) {
        // adds one to count after each loop
        count++;
        // two separate 'if' statements must be made to check 'guess' so the 'guess' is checked separately when looped
        if (guess < myNum) {
            console.log("Sorry, too low! Guess again: ")
            guess = prompt("> ");
        } 
        if (guess > myNum) {
            console.log("Sorry, too high! Guess again: ")
            guess = prompt("> ");
        }
        
    }
    // displays when loop ends and correct number has not been guessed
    // if (count === 3) {
    console.log("Sorry! Out of tries! The number I was thinking of is " + myNum + ".")
    // } 
    
} else if (guess === myNum) {
    console.log("Congratulations! " + myNum + " is the number I was thinking of!")
}

// count has to start at count=1 and the count++; has to be before the 'if' statements under the while loop 
// or the amount of tries ends up being too many