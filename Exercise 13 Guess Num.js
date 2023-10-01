// Your friend is hosting a party and you are his programmer friend. He thought of an idea to use your skills and create an awesome game for the party. So, he wants you to create a program to generate a random number from 1 to 9 and the user has to guess it within 3 chances. You can use math.random function (Search it on google and learn about it) to create such program. Good luck!
// If you couldn't solve it by yourself then the solution has been given below but make sure to try it all by yourself first! Also don't forget to learn about the math.random.



























let randomnum = Math.floor(Math.random()*10)+1
let win = false
for (let chance=1; chance<4; chance++) {
    guess = prompt("Enter your guess : ")
    guess = Number.parseInt(guess)
    if (guess == randomnum) {
        win = true
        console.log(`You guessed the correct number! The number was ${randomnum}`)
        break;
    }
    else {
        console.log("Wrong!")
    }
}
if (win==false) {
    console.log("You lost, better luck next time.")
}

// The exercise has been completed. Congrats on getting everything right!


