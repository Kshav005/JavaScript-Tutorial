// In this exercise, you need to ask the user for their age and then see if they can drive or not. If they are able to drive then print 'You can drive' otherwise give them an alert.
// The solution is provided below for you, all the best!


















let age = prompt("Enter your age : ")
age = Number.parseInt(age)
if (age<18) {
    alert("You cannot drive! Must be 18 or greater.")
} 
else {
    console.log("You are able to drive!")
}


