// In this exercise, you need to create a rock, paper and scissors game! You can also create similar games but the solution that will be provided below will be having rock, paper and scissor game. Good luck!





















let user = prompt("Choose rock, paper or scissors")
user = user.toLowerCase()
let comp = (Math.floor(Math.random()*3))
let realcomp
if (comp == 0) {
    realcomp = "rock"
}
else if (comp == 1) {
    realcomp = "paper"
}
else {
    realcomp = "scissors"
}
if (user== "rock") {
    if (realcomp == "paper") {
        console.log(`You chose ${user} and the computer chose ${realcomp}. You won!`)
    }
    else if (realcomp == "scissors") {
        console.log(`You chose ${user} and the computer chose ${realcomp}. You lost!`)
    }
    else {
        console.log(`You chose ${user} and the computer chose ${realcomp}. It's a draw!`)
    }
}
else if (user== "paper") {
    if (realcomp == "scissors") {
        console.log(`You chose ${user} and the computer chose ${realcomp}. You won!`)
    }
    else if (realcomp == "rock") {
        console.log(`You chose ${user} and the computer chose ${realcomp}. You lost!`)
    }
    else {
        console.log(`You chose ${user} and the computer chose ${realcomp}. It's a draw!`)
    }
}
else if (user== "scissors") {
    if (realcomp == "rock") {
        console.log(`You chose ${user} and the computer chose ${realcomp}. You won!`)
    }
    else if (realcomp == "paper") {
        console.log(`You chose ${user} and the computer chose ${realcomp}. You lost!`)
    }
    else {
        console.log(`You chose ${user} and the computer chose ${realcomp}. It's a draw!`)
    }
}
else {
    alert("Invalid choice!")
}
