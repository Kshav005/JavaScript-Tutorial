// Ms. Jones is an english teacher in XYZ school. Few days back, she took a class test of sentence types whether the given sentence is declarative, interrogative or exclamatory. You are a programmer and she wants you to create a program where the computer has to tell which type of sentence is this. Use conditions and string operations in order to achieve! Good luck.
// If you were unable to solve this question then the solution is provided below. Always try and then check the solution (if failed). That will make you practice your concepts and learn effectively.






















let a = prompt("Enter the sentence : ")

if (a.endsWith("?")) {
    console.log("This sentence is an interrogative sentence")
}
else if (a.endsWith("!")) {
    console.log("This sentence is an exclamatory sentence!")
}
else if (a.endsWith(".")) {
    console.log("It is a normal, declarative type of sentence")
}
else {
    console.log("Invalid sentence provided.")
}