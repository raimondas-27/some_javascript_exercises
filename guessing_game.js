let maximumPrompt = parseInt(prompt("enter your answer number which you have to guess: "));

while (!maximumPrompt) {
    maximumPrompt = parseInt(prompt("enter a valid answer number, which you have to guess: "));
}

const targetNum = Math.floor(Math.random() * maximumPrompt) + 1;
console.log(targetNum);

let guess = parseInt(prompt("enter your first guess: "));
let attempts = 1;

while (guess != targetNum) {
    if (guess > targetNum) {
        guess = prompt(" too hight. enter a new guess: ");
         attempts += 1;
    }
    else if (guess < targetNum) {
        guess = prompt("too low. enter a new guess: ");
        attempts += 1;
    }
    else if (guess === "quit") {
        break
    }
}

if (guess === "quit") {
    console.log("quitting...")
}
else {
    console.log("you guessed it right!")
    console.log(`you have tried ${attempts} attempts.`)
}
