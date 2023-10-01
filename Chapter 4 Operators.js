// Just like python, there are various operators that are used to perform calculations in coding.
// Today we will be looking at them!

// So, operators are of four types : Arithmatic, Assignment, Comparison and Logical Operators.

// 1. Arithmatic Operators
// +        --> Addition (Adds the number)
// -         --> Subtraction (Subtracts the number)
// *        --> Multiplication (Multiplies the number)
// /        --> Division (Divides the number)
// %       --> Modulus (Returns the remainder after dividing)
// ++      --> Increament (Increases the value by 1)
// --         --> Decreament (Decreases the value by 1)
// **      --> Exponention (Power)

let a = 10 
let b = 5

console.log("10 + 5 =", a+b)
console.log("10 - 5 =", a-b)
console.log("10 * 5 =", a*b)
console.log("10 / 5 =", a/b)
console.log("10 % 5 =", a%b)
console.log("10 raised to power 5 =", a**b)
console.log("10++ =", a++)      // Here the value of 'a' increases by 1 after printing 'a'
console.log("++10 =", ++a)      // The value of 'a' will be increases by 1 first, then print the increased value of 'a'
console.log("--10 =", --a)          // Same is with decreament. First print original, then decrease.
console.log("10-- =", a--)          // First decrease, then print decreased value


// 2. ASSIGNMENT OPERATORS
// Used to assign value to the variables, just like in python.
// =        --> k = c
// +=       --> k + c
// -=       --> k - c
// *=       --> k * c
// /=       --> k / c
// %=       --> k % c
// **=      --> k ** c

// where k is a variable, while c is a number
let t = 3
let u = 3
let v = 3
let w = 3
let x = 3
let y = 3

t += 2
console.log(t)

u -= 3
console.log(u)

v *= 3
console.log(v)

w /= 3
console.log(w)

x %= 3
console.log(x)

y **= 3
console.log(y)

// 3. COMPARISON OPERATOR

// ==            --> equal to
// !=             --> not equal to
// ===          --> equal to and same data type
// !==           --> not equal to and not same data type
// >,<              --> greater/less than
// >=, <=       --> greater/less than or equal to
// ?                --> ternary operator    (Will be explained in later chapters)

let k = 8
let c = 8

console.log("8 == 8?", k==c)
console.log("8 != 8?", k!=c)
console.log("8 >= 8?", k>=c)
console.log("8 <= 8?", k<=c)
console.log("8 === 8?", k===c)      // If one of them is string, then it will return false, because they don't have same data type
console.log("8 !== 8?", k!==c)
console.log("8 > 8?", k>c)
console.log("8 < 8?", k<c)

// 4. LOGICAL OPERATORS

// && - Logical And
// || - Logical Or
// ! - Logical Not
let z = 1

console.log(x==z && z==2)       // Will return false because one condition is not met.
console.log(t<1 || z==1)        // Will return true because one condition is met.
console.log(t !=1)                  // Will return true as the conditions are met.


// The chapter ends here, hope you understood everything. Happy coding, keep practicing!