// In this exercise, you need to create an array which keeps on taking input from the user until it is given input 0.
// Keep it simple and good luck solving it, however, for your convinience, the solution has been given below!
















let a = []
let b
while (true) {
    b = prompt("Enter a number : ")
    b = Number.parseInt(b)
    if (b == 0) {
        break;
            }
    else {
        a.push(b)
        }
    }
console.log(a)

// The exercise has been completed! Congrats!



