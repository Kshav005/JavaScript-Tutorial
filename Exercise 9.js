// ABC school has hired a programmer which notes down the marks of students in the form of an array. Two weeks earlier, the maths teacher promised his 5 students to give them extra 10 marks. Being a programmer, use loops and arrays to give them 10 extra marks. The marks are as follows : '65, 78, 19, 67 and 82'. 
// If you couldn't solve the question then you needn't worry as the solution is already given below. Happy coding!






















let marks = [65, 78, 19, 67, 82]

for (let i = 0; i<marks.length; i++) {
    marks[i] = marks[i] + 10
}
console.log("The new marks are :", marks)