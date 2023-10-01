// We are going to learn about Functions.
// Those who don't know about functions, basically they are used to minimize the code.
// For example, for pythagorus theorum, we use a formula and not a scale to measure the hypotenuse of the triangle.
// By the same way, we use functions rather than copy pasting the same calculation code all over the program, making it messy and uneasy to read.
// A function contains arguments or parameters, function name, and the code which has to be run when the function is called.
// Calling a function means using the function to calculate (or anything).

// You might repeatedly use some calculating formula, that is why functions are created!
// Let's see how that works.

// We define a funtion using 'function'
function avg(a, b, c) {                                 // a, b & c represent the arguments (information required for the function to run) and work as local variables
                                                                // The 'avg' is a function name, and you can name it anything (works like a variable)
    console.log("The average of", a, b, "&", c, "is", (a+b+c)/3)                        // Here we specify what to do with those arguments.
}

let x = 10, y = 5, z = 6                    // We can define multiple variables like this too!

// Invoking or calling the function and using the arguments for calculation.
avg(x, y, z)

// So basically, the 'x', 'y' and 'z' values gets assigned to the local variables 'a', 'b' and 'c' and then it calculates the average as usual.
// That's how we can run variables!

// Let's create a function and see if it can be used multiple times.
function AddThenMultiplyTwo(g, h) {
    return (g + h)*2               // 'return' works like a variable, you need to use and print the function name in order to access that return value.
}

let u=10, v=5, h=25, l=87
console.log(u, "+", v, "=", AddThenMultiplyTwo(u, v))
console.log(h, "+", l, "=", AddThenMultiplyTwo(h, l))
console.log(h, "+", u, "=", AddThenMultiplyTwo(h, u))
console.log(v, "+", v, "=", AddThenMultiplyTwo(v, v))

// Hence, this states that function can be used inumerable number of times.

// There's another way to create a function using 'const' :
const me = (a1, a2) => {                
    return a1*a2
}
let n3 = 8, n4 = 5
console.log(me(n3, n4))             // 'me' is a function name

// The above function is known as arrow function. It may look a little bit complicated but you will learn as you grow!

// Also, we can create function without arguments.
function emptyfunc() {
    console.log("Hello World!")
}
emptyfunc()