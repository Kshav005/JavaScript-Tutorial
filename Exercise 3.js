// A car company 'McLaren' created a small survey in a town and they want to know whether a person can afford their cheapest car of $10000. 
// They want you to write a JS program to determine whether they are able to purchase a car on the basis of their 3 month salary. Ask the people about their monthly income and then see if they are able to purchase the car.

// If you couldn't solve this statement question, then don't worry. We got you covered, with a detailed answer below. Hope you learn it and next time, don't forget to keep on practicing in order to master your skills! Good luck.

























// Asking the user about their monthly salary.
let sal = prompt("What is your monthly income? : ")

// Changing the string value to number (integer).
sal = Number.parseInt(sal)

// Multiplying by 3, since we have to calculate on the basis of 3 month salary.
sal = sal*3

// Checking the situation.

// 1. Using 'if-else' statement.........................
if (sal>=10000) {
    console.log("You can afford our McLaren Car! Your 3 month salary equals to", sal)
}
else {
    console.log("Sorry to say but you cannot buy our car. Your 3 month salary equals to", sal)
}

// 2. Using ternary operator
console.log(sal>=10000? "You can afford our McLaren Car!" : "Sorry to say but you cannot buy our car.")


// You cannot use the 'switch-case' statement, as it is only used for string case matching. 
// Hence the exercise is complete! Keep on practicing and you will be able to learn in no time!
