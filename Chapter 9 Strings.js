// Strings are used to store and manipulate text.
// Collection of characters is basically string.
// Also, a string can be created using both type of quotes, single (') and double ("")
// Although keep in mind to keep open and close the string with same type of quote signs.

// Let's use a sample string and try to learn about concepts!
let a = "School"

// To print the length of a string 
console.log(a.length)

// Just like in python, the access of string starts with 0, i.e. the first character will have 0th position, second character will have 1st position and so on.
console.log(a[3])       // Printing the 3rd position (4th character)
console.log(a[1])       // Printing the 1st position

// In new version of JS, we can also create strings using backticks (`), this will allow users to use double and single quotes in their sentences.
let b = `Cat`
console.log(b)

// If you want to use variables values inside a string without typing the value then just use '${variable_name}', but make sure you use the backticks (`) to open and close the string.
console.log(`There is a ${b} in the ${a}`)              // This will print 'There is a cat in the school', making our task easier.

// This type of usage of backticks is known as template literals and the usage of variables inside the string is known as string interpolation.

// Escape sequence characters.
// If you want to use single quote inside single quoted string then use escape sequence character (\), also works with double quote.
console.log('There is Brother\'s cat')
console.log("He spoke to me, \"Who are you?\"")

// You can also use '\n' which is known as newline character and plays the role of 'Enter key' in ms word. It means, it will break the line and continue in the next one.
console.log("Twinkle Twinkle Little Star,\nHow I wonder what you are?\nUp above the world, so high\nblah blah blah..................")

// '\t' used to give 4 space bar worth spaces, a 'tab' space.
console.log("ABCDE........\tXYZ")

// '\r' known as carriage return, which brings the cursor to the starting point creating an overlapping.
console.log("I am a mon\rster")

// To explain it better, if printed without the carriage return, it would have printed 'I am a monster'. But now let's see how it works. It printed the string till '/r' first resulting in 'I am a mon', then JS saw the carriage return and moved the cursor to it's starting position. Then printed 'ster' which overlapped the 'I am' (4 characters) and gave the output as 'ster a mon'




