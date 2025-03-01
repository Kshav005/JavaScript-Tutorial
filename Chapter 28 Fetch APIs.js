// Welcome back to another chapter and here we are going to learn about how can we fetch data from an API. Before starting, some topics have not been covered in this JS tutorial which are Promises, Async, Await and Finally Clause. I recommend you to learn them by yourselves as they can serve a good purpose in various tasks. 

// Now let's start with the API. APIs are a type of server which contain data and we use some codes to retrieve that data and turn it into readable format and use that data to do some other task. For example, let's say, you ordered a food in a restaurant. Now, you tell the waiter about your order items.
// The waiter will tell the cook. Later on, the waiter will serve you your dish which was made by the cook but waiter brought it to you. 
// Hence, you can say that an API is equal to waiter which brings you data (dish) which was actually made by the cook (API servers) and it's brought to you at last. Now you can either eat the food, throw it or give it to some other person, that's your call. Same thing is done through APIs.
// We can get random facts, jokes, riddles, etc by using APIs and show it in our program. Let's know about how can we do so!

// We are going to use a random weather API to learn about APIs. You can use random APIs by searching on your browser. Make sure you use free APIs because some APIs require authentication key which is usually bought using money. Here I am going to use free API in order to explain things.

// WEATHER API - https://joke.deno.dev/

let apiuse = fetch("https://goweather.herokuapp.com/weather/Ny")

// Fetching an API request is a 2 process step
// 1. status - The HTTPS code, like 200, etc.
// 2. ok - boolean, if the HTTPS code is 200-299
// And hence we are need to use 'then' 2 times, in order to get the proper JSON format. JSON is nothing but an object of JS which has the data in it.

apiuse.then((request1) => {
    console.log(request1.status)
    console.log(request1.ok)
    return request1.json()              // Returns the json
}).then((request2)=> {
    console.log(request2)
})
