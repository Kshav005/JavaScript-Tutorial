// Just like in python, there are data types in JS too. 
// There are 7 data types which are fundamental in JS.
// They are strings, number, bigint, undefined, null, symbol and boolean. We are going to look into each data type today and see what each means!
// We can also store objects in a variable. Objects are basically key:value pairs just like dictionaries in python.

// PRIMITIVE DATA TYPES
let a = null                                     // Null
let b = 37                                      // Number
let c = "hello"                               // String
let d = false                                  // Boolean
let e = BigInt("3722")                 // Bigint
let f = Symbol("This is a symbol")                  // Symbol
let g = undefined                        // Undefined
let h                                   // Automatically JS considers it as undefined.

// Now let's try printing all the variables.
console.log(a, b, c, d, e, f, g)            

// To know about the type of a variable, we use 'typeof'
console.log(typeof(b))
console.log(typeof e)               // Both ways are correct

// NON PRIMITIVE DATA TYPES (objects)
let i = {
    "name" : "Potter",
    "human" : false,
    "work" : "magician"
}
// To get the value of a key, 'variablename["key"]'
console.log(i["work"])

// If no such key exist, then it gives the output as 'undefined'
console.log(i["age"])

// This will be pretty familiar to those who know JSON and have studied about in my repository of JSON.
// JSON and Object in JS, are used to create mapping.
// Hence we can use objects to store and retrieve data!

// Hence, this chapter ends, I hope you enjoyed till so far. Happy coding and see you in the next chapter!