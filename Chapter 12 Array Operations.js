// We will be learning about some of the awesome operations which are used in arrays!
// Let's start without wasting any time by creating our sample arrays.

let a = ["hello", "what", 1.5, 43], b = [1, 3, 53, 10, true], c = ["cat", "dog", "cute", "play"], d = [1, 43, 5, 2, 3, 14] 

// To change an array to a string
console.log(a.toString())
console.log(typeof(a.toString()))

// To change an array to a string using a seperator
console.log(b.join(""))             // joins without spaces
console.log(b.join("?"))            // joins using '?'
console.log(b.join(" | "))          // joins with ' | '

// To remove the last element (beware, it makes changes in the original array)
a.pop()
console.log(a)

// To add element in the array (to last position), (Modifies original array)
a.push("New item!")
console.log(a)

//To remove the first element (Modifies original array)   
a.shift()
console.log(a)

// To add element in the first position (Modifies original array)
a.unshift("Another One.")
console.log(a)

// To remove element from any index (modifies original array)
delete c[2]                     // This will just delete the element but not affect the length of the array, it will be showing 'empty item' at that index instead.
console.log(c)

// To join two arrays (makes a copy)
console.log(a.concat(b))

// To sort an array (modifies original array)
c.sort()                    // It doesn't sort according to numbers. It only sorts them alphabetically
console.log(c)

d.sort()           // That is why the result will be wrong.
console.log(d)

// In case you need to create a valid number sorting function, you need to pass a function as an argument.
function asc (a, b) {           // For ascending order
    return a - b            // Checks if the result is negative. If it is, then places it in array according to this result. The smalles number will be the one which will result in negative number with all other numbers.
}
function desc (a, b) {
    return b - a                // For descending order
}
d.sort(asc)
console.log(d)
d.sort(desc)
console.log(d)

// To reverse the array (makes changes in the original array)
d.reverse()
console.log(d)

// Splice and Slice

// SPLICE : is used to add new items to an array. It takes argument.
// array.splice(pos, nrem, elements), where pos is the position in the array where you need to add the element, nrem is the number of elements to removes from the array and elements are the element values which you need to add.

// Let's understand it's working along with the syntax
let e = [3, 29, 103, 54, 10]
console.log(e)      //before
e.splice(2, 2, 1, 1000, 10002, 3434343, 479892128)
console.log(e)      //after

// So, first argument as said, represent position. JS first moved to that index which is 103. Now next argument was passsed which meant I want 2 elements to be deleted at this position, so JS did as it was told, deleted 103 and 54. Finally we passed the elements which I need to add, that are '1, 1000, 10002, 3434343, 479892128'.
// Hope you understood the concept. Only the first 2 arguments will be treated while the arguments after that will be added into the array.
// Also, the 'pop' and 'splice' both operations return the deleted values when printed.
let k = [2, 1, 3, 4, 10]
console.log(k.splice(1, 3, 5, 100, 300))            // Will print the deleted values (same thing can be performed using pop)

// SLICE : Creates an array with sliced elements (same as the string slice)
console.log(a.slice(3))                             // Starts from index 3 to the last element index
console.log(a.slice(undefined, 4))               // Starts from starting element index to index 4
console.log(a.slice(2, 4))                           // Starts from index 2 to index 4

// Remember that the ending index will not be included in slicing. 

// Hence, the chapter comes to an end, I hope you understood everything. 
// Keep on coding, and practicing! Good luck.



