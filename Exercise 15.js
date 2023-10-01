// For this exercise, you are required to create a prgram to ask for user input (number) and if the number is greater than 4, then redirect the user to 'google.com'.
// If you couldn't solve, then don't worry. The solution has been provided below but before that try your best on your own to solve the problem!


















let num = Number.parseInt(prompt("Enter a number : "))
if (num > 4) {
    location.href = "https://www.google.com//"
} 
else {
    alert(`You entered ${num}`)
}