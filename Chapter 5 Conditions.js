// This chapter is going to be interesting and it will be teaching the conditional expressions like 'if', 'else' and 'ifelse'!
// You can use these keywords to check and apply it in checking whether a condition is true or not.

// Before learning about conditions, let's have a look at the 'prompt' keyword.
// So many of you might have learnt python and may know about 'input'. Basically they both are technically same but in different languages. For those who don't know then basically 'prompt' is used to ask the user input. They can add either strings, symbols, integers, anything you can type. 
// Moreover, by default, the data type of the user input in 'prompt' is a string. Remember that!
// Also to use prompt, you need to use a browser as prompt opens up a browser window in order to accept an output. So, just search how to use JS on the google (or any browser) console. Then run the  command, there you will see the result.
// You won't be able to see the results in Nodejs. or VsCode.

// Now let's try using conditions along with user input.
let b = prompt("Enter a number here: ") 

// So, if you know python, then you must be knowing typecasting. Typecasting is just the changing of data type to another data type.
// How can you change a string to an interger?

b = Number.parseInt(b)          // We use 'Number.parseint()' to change from string to an integer (known as number in JS)
if (b > 10) {
    console.log("The number is greater than 10.")               // Will run if the condition is true
}
else {
    console.log("The number is either equal or less than 10")           // Will run if the condition is false
}

// Let's try running elseif statement. Those who don't know, 'elseif' is always used between 'if' and 'else' in replacement of multiple 'if's.
// Those who know python, this same thing exists there and is known as 'elif'
let c = prompt("What is your age? : ")
c = Number.parseInt(c)

if (c>0) {
    console.log("It is a positive number")
}
else if (c==0) {
    console.log("It is 0!")
}
else {
    console.log("It is a negative number")
}

// You can add unlimited 'else if' in conditional codes. But remember that only one of them will run. Because out of all the possibilites, only one can be matched.

// Now let's talk about what the ternary operator.
// It can be a little complicated but is helpful in one liner codes.
// '?', also known as ternary operator is used as 'if else' conditions!
let z = 17              // Let's create a variable in order to understand
console.log(z>18? "You are adult." : "You are kid." )

// Now let's understand the line.
// Basically we use '?' to ask whether the condition is true or not. If 'z' will be greater than 18, then it would print 'You are adult.' but suppose if the condition is false, i.e. 'z' is smaller than 18 then it would print the other statement 'You are kid.' which is shown by using ':' colon symbol.

// In one sentence, the ternary operator will check if the condition is met and prints the left side of ':' if true, otherwise the right side if false.

// There is one more thing called 'switch' which is used as conditional statement too.
let y = "Mario"
switch (y) {
    case "Fast & Furious":
        console.log("It is a movie!")
        break;
    case "Mario" : 
        console.log("It is a game!")
        break;
    case "Potato" : 
        console.log("It is a vegetable")
        break;
    case "Papaya" :
        console.log("It is a fruit.")
        break;
}

// Now let's understand the code. Basically switch is used to change a condition on the basis of value. 'switch (y)' is used to focus on 'y' value. Then we use the 'case' keyword to define different cases. Suppose the value in 'y' is 'Papaya', then according to the case, that part of the code will run and hence will print 'It is a fruit.'. If one of the case is matched, then it runs the code below it. Also, to end a case, you need to use the 'break;' keyword in order to let JS know that if the case is matched, then it needs to do these things and not perform actions after 'break'.
// Hope you understood all the conditional keywords. Keep on practicing and I will see you in the next chapter!
