// To make things easier, a student was a programmer to create a function which returns factorial of the number it wants. If you don't know what a factorial is, then search it up on google and you will find it. If the student enters '6' then it should print the result of 6*5*4*3*2*1, and if it is '3' then it should print the result of 3*2*1. You are the programmer that the student has been searching for. Can you prove it by creating such program?
// The solution has been provided below, good luck!




















const factorial = (x)=>{
    total = 1
    for (let i=1; i<x+1; i++) {
        total = total * i
    }
   return total
}

let num = prompt("Enter a number for factorial : ")
num = Number.parseInt(num)
console.log(factorial(num))

// The exercise completes here! Nice work, and keep on practicing friend.