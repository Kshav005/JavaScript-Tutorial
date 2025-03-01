// This chapter is going to be interesting as we are going to learn about how to handle errors, like printing out the customized errors or anything like this. If you have already studied python's try/except condition then it's easy for you to understand.
// For beginners, we use 'try' to tell JS to try running a code, and suppose if it gives error, then print such and such which comes under 'except' condition in Python. For JS, this handling is known as try/catch condition. This can prove to be a savior as it doesn't stop the code suddenly after getting an error!
// Also, before starting, you can now complete all exercises till 21. I hope you learn something from them!


// Now suppose, I did a mistake in the code.
try {
    console.log(ErrorOrNoError)
}

catch (error) {
    console.log(error, "Eww")                    // To print the error or customized error
}

// If try/catch wasn't there, then this code below wouldn't have ran.
console.log("Hey there")

