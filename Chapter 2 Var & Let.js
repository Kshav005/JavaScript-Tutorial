// In old version of JS, 'var' was commonly used to define variables. But now it has disappeared as it may introduce bugs to your code.

// There is a keyword called 'const' which is a term for constant, it means you cannot change it's value (while running code) once defined.
// Moving further, let's understand the difference between all these terms.

// '1. var' is globally scoped while 'let' & 'const' are both block scoped.
// Blocks are lines of codes which start with '{}' (curly brackets.)
var a = 8
{
    var a = "There"
    console.log(a)
}
console.log(a)

// If we run the above line, then we see that we get 'There' as the output. Now let's check the result with 'let'
let b = 10
{
    let b = 6
    console.log(b)
}
console.log(b)

// This time, we got two different values. So, hence proved that 'let' and 'const' are block specific. It means the variable value changes with every block.

//2. 'var' can be redeclared, it means if you use this keyword elsewhere in the program then you might get some bugs in your code. 
// But you cannot redeclare 'let', while 'const' can't be update neither redeclared.
let z = 1
let z = "Nothing"       // Will give an error.

// Once declared, the change the value directly as the variable already exists in the memory.
z = "What"      // This one will work

const coder = "Me"
coder = "No one"
console.log(coder)          // This one will give an error, as constant variables cannot be changed.

// There is a data type called 'undefined'.
//4. 'var' can be set as 'undefined' but not let & const.

//5. const cannot be initialized later unlike var & let.
let n;
n = 3
console.log(n)

// Hence, use 'const' to write code and 'let' should be used where the value should be changed later on. 'var' is old fashioned, and is no longer used.
// The chapter ends here, in the next chapter, new topic 'Data Types' will be discussed. Happy coding!