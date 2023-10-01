// In this chapter, we are going to learn about manipulation of strings today! 
// It is really usefull when you want to make a string uppercase, or lowercase and more things!
// Let's study about them.

let a = "AbCdEfGhIjKlMnOpQrStUvWxYz"

// If you want to change to uppercase
console.log(a.toUpperCase())

// To change into lowercase
console.log(a.toLowerCase())

// Slicing : To select only particular characters from a string.
// To print first 3 characters from string, use 'string.slice(start, end)', here don't forget to use the position (which starts from 0) also known as index. The 'end' is not included while printing. It means only 0, 1 and 2 index will be printed, not 3rd.
console.log(a.slice(0, 3))
console.log(a.slice(10, undefined))        // If 'end' is 'undefined' then prints till last postion
console.log(a.slice(10))        // means same as above.
console.log(a.slice(undefined, 8))          // Starts from 0 to the end

// To replace characters in a string, use 'string.replace(find, replacewith)'
let b = a.replace("fGh", "MEOW")
console.log(b)

// To join to strings using either space or any character, use 'string.concat(variable/string, variable/string)'
console.log(a.concat("123456", "?", "hero", "none"))
console.log(a + "123456" + "?" + "hero" + "none")           // Works same as above

// To remove extra spaces from starting, ending and both
let c = "            Hey                     "
console.log(c)
console.log(c.trim())                   // See the difference
console.log(c.trimStart())             // Only from the start
console.log(c.trimEnd())            // Only on the end.

// To check if a string is starting or ending with some character, gives result in form of boolean
console.log(a.startsWith("f"))
console.log(a.endsWith("z"))     

// To check if the whole string contain characters (returns boolean)
console.log(a.includes("fox"))          // Returns false as 'fox' is not in the string
console.log(a.includes("f"))

// The main point to keep in mind is that a string is immutable. It means that you cannot change the characters of a string. The above all the operations we have learnt like uppercase, replace, etc. may look like they are changing the string. But the actual thing is that they make a copy of that string and return it. That's why if you try to print the original value again, you will be receive the same old one. Hence, you cannot change a string.

// We have covered all the popular operations, but you can see the MDN docs for more operations! Keep on practicing and will meet in the next chapter.