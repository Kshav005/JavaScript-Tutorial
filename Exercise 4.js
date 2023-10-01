// This exercise wants you to create a JS program where the user will be entering a random number and you have to check whether the number is divisible by 2 and 3 both.
// There are two ways to perform this activity. The solution will be having both ways, so good luck and try to solve it by yourself first.






















// METHOD 1 : 
let num = prompt("Enter a number : ")
num = Number.parseInt(num)

if (num%2==0 && num%3==0) {
    console.log(num, "is divisible by 2 and 3 both.")
}
else {
    console.log(num, "is not divisible by 2 and 3 both.")
}

// METHOD 2 : 
if (num%6) {
    console.log(num, "is divisible by 2 and 3 both.")
}
else {
    console.log(num, "is not divisible by 2 and 3 both.")
}

// Hence, the exercise is completed. Now you can move to next one!


