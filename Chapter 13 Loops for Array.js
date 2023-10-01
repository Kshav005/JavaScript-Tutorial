// Let us study about different loops that can be used with arrays in this chapter!

let sample1 = [1, 3, 5, 2, "Hello", true]

// To print all the elements one by one
for (let i=0; i < sample1.length; i++) {
    console.log(sample1[i])
}

// Same can be done with a function using ForEach
function hey (element) {
    console.log(element)
}
sample1.forEach(hey)

// You can even perform some calculations using ForEach
function multby2 (element) {
    console.log(element*2)
}
sample1.forEach(multby2)

// FROM function of ARRAY
// It is used to create an array from any other object (useful for web developers)
let a = "Musical"
let b = Array.from(a)
console.log(b)                      // See the result.

// FOR OF 
// Can be used to print elements of an array one by one, more easily (got introduced in new JS)
for (let z of sample1) {
    console.log(z)
}

// FOR IN, it is used to print the keys of the array. But as we know that there are no keys in an array. But, keys are there in arrays and they are just index of each element. That is why we get from 0 to the last element of index.
for (let y in sample1) {
    console.log(y)
}


// With this, you are now able to solve Exercise 9 and 10! 
// This chapter has been completed and in the next one, we are going to discuss about the 3 awesome ops which we can use with arrays to make our tasks easier!



