// Array, this chapter's topic can be important for those who want to learn about data.
// It is a collection which can contain strings, numbers, objects and even more things.
// They work almost same as lists of Python.

//It can contain different data types at once.
let b = ["hello", 378, true, undefined, 5.4]

// To access an array value, use index methods
console.log(b[2], b[0])

// You can even redefine values in an array using indexing (Remember that it makes changes in original list, so it is advised to create copy and perform functions).
b[2] = "Restart"
console.log(b)

// To know the length, you know what to use 
console.log(b.length)

// If you try to access invalid index then it would print 'undefined'.
// Also the data type of an array is always 'object'

// The chapter has been completed. In the next one, we are going to look at some array operations. 
// Moreover, you can start solving exercise is you hadn't done yet. You can complete the first 8 exercises which are based on topics covered yet.
