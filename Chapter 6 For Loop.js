// In this chapter, we are going to talk about loops in JS.
// Some of you may know about loops who are from programming background. 
// For those who don't know, it's just simple program which keeps on running and running, can be any number of times or infinite.
// There are two types of loops in JS, 'for' and 'while'.
// This whole chapter is dedicated to 'for' loop because it has more types internally, so let's check it out!

// So, loops are useful for automating tough jobs, like write same line of program for 100s, 1000s of times.
// You can do so, just by typing a single line code, which will print the same statement any number of times you want.

// 1. For - loop a block of code for number of times.
// 2. For in - loops through keys of an object.
// 3. For of - loops through values. (not for objects)

// FOR LOOP
for (let i=5; i<=50; i++) {
    console.log(i)
}

// As the syntax here, first we have to define a variable and give it the value from where we have to start. 
// Suppose I want to start from 5, and end it till 50. Then I will give 'i' (or any variable you can take) the value of 5, then in next part, I will be telling it the ending condition, which should be smaller or equal to 50, in order to print 0 to 50. Lastly, we give it a condition or the number of steps. 'i++' represents that the value should increase by 1 with every loop. Hence, the loop will stop when 'i' will be equal to 50 because, if it continues then the condition of smaller or equal than 50 will break, and the loop will not work. Now let's run the code.

// FOR IN LOOPS
// It is used to print the keys in an object.
let obj = {
    "name" : "Mark",
    "role" : "CEO",
    "age" : 21,
}
for (let x in obj) {
    console.log(x)
}

// To print the values along with the keys,
for (let q in obj) {
    console.log("The", q ,"is", obj[q])
}

// FOR OF LOOPS
// Basically the use of this loop is to iterate a given string or an array. Array will be discussed later however, we are going to use the syntax to demonstrate what is used for.
let country = "America"
for (let g of country) {
    console.log(g)
}

// Also remember, if you try to print the value of the variables of loop, then it would not be able to show as we discussed in earlier chapters that 'let' is only used to specify variables for block of code. Therefore, we use 'var' in order to define a global variable.
// To revise, global variables are defined for the whole program, while the local variables are valid till a block of code i.e. '{}' for the curly brackets. If you try to print the variable value again after one time, then it's obvious that it would throw an error.

// Anyways, the chapter completes here and let's go to the next chapter where we are going to learn about 'while' loop!