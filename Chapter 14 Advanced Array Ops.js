// In this chapter we are going to discuss about 3 advanced array operations which can be used to perform even more complicated things. 
// Let's learn about them one by one.

let sample1 = ["a", 3, 5, 10, 200, "cat", true, "pray", 778], sample2 = [14, 32, 22, 100, 43]

// 1. MAP : It is used to create a new array by performing operation on each element. Works same as ForEach but when you return the element, it will form an array of it.
function mapping (element) {
    return element+20
}
let b = sample2.map(mapping)
console.log(b)                          // See the magic. It will return the elements in a form of an array! 
// You can add 'index' and 'array' as parameters in the function created. It will return the index of the element and the original array that is being used (when you print).

// Quick question : Will you be able to perform Exercise 9 using map?

// 2. FILTER, is used to get the elements which follow a particular condition. Suppose I want the array of only numbers which are greater than 30. Also, this time we are going to use the arrow function to practice.

console.log(sample2.filter((element)=>{ 
    return element > 30
}))

// See how much short our syntax has become? That is why using arrow function is a good practice. Also, these functions don't alter the original array so you needn't fear using them.

// 3. REDUCE, a tought concept to understand. To understand it better, we are going to create a new array for this method.
let sample3 = [2, 4, 6, 8, 10]

console.log(sample3.reduce((ab, cd)=>{
    return ab + cd
}))

// So, first it takes two arguments from the array which is 2 and 4, then it adds them up resulting in 6. Now it will take the sum of the next number which is 6 and adds the old 6 (which we got from 2 + 4) resulting in 12. After that, it will add 12 to the next number which is 8, making it 20 and at last 20 will be added to 10, giving the result as 30.
// You can use the reduce function to either multiply or add or anything in the array. Hence, the sum of the array is 30.






