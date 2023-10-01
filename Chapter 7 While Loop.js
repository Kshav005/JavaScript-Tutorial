// Hello and welcome back, here we are going to look into the 'while' loop which is famous for it's unstoppable iteration.

// The 'while' loop is a dangerous loop as it iterates until a condition becomes false. Let's look at some examples along with the syntax!
let a = 0; 
while (a<=10) {
    console.log(a++)
}

// The syntax is pretty easy, right?
// Let's try another example
let b = prompt("Please enter the number till what you need to print -  ")
let c = 0
b = Number.parseInt(b)
while (c<=b) {
    console.log(c++)
}

// The above program prints the numbers till the user wants!


// DO WHILE LOOP
// It work exactly same like the while loop but the only difference is in its working. This type of loop first executes the block first then check the condition.
// The normal while loop first checked the condition, then ran the code but the case here is different.
// Let's look at the example along with it's syntax
j = 0
do {
    console.log(j++)            // This block will be ran first
} while (j < 0)                    // After that, JS will check the condition.

 
// The program will not run as JS will check the condition first, and if it's false then it won't run the block.
k = 0 
while (k < 0) {
    console.log(k++)
}



