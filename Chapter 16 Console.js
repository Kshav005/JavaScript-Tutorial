// Welcome back to new chapter, this time we are going to learn more about console object of JS.
// We have been using 'console.log' without actually realizing what all things console can do. Let's start!
// Before starting, I recommend you to run them all in the browser (inspect >>> console) and that's when you will be able to see differences between them.

// LOG, as normally used. It is used to print something.
console.log("HELLOOOOOO")

// ERROR, used to show an error (not in browser, it will will show under the inspect > console tab).
console.error("Error? Are you joking?")

// ASSERT, used to assert a condition.
console.assert(5>10)        // It is false, then it will return an error
console.assert(8>3)         // As it is true, then it will not return anything

// ClEAR, as it's name says, clears all the previous used JS scripts from the browser console.
console.clear()

// TABLE, converts an object into a table beautifully.
let randomobj = {"Hello" : 12, "Meow" : 8, "Dog" : 1, "Umbrella" : 5}
console.table(randomobj)

// WARN, used to warn about something in the browser console.
console.warn("Where are you going?")

// INFO, same as log
console.info("Hello, I am same as log :)")

// TIME and TIMEEND, used to measure the amount of time. (takes a lable, which is just a unique name to note down the timings).
console.time("start here")
for (let i=0; i<100; i++) {
    console.log(i)
}
console.timeEnd("start here")           // Will print, in how much time this command came