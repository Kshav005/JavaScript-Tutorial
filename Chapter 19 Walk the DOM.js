// When you try to manipulate HTML code using JS, we use DOM.
// Suppose you want to get all the elements which are addressed using some class name. We can do it in by using various functions which are built in DOM.

// To get all elemens using class name 'document.getElementsByClassName("classname")'
document.getElementsByClassName("class")        // object will be given

// Now to manipulate the styling, we will be selecting the index number of that element.
document.getElementsByClassName("class")[3]

// After that just use the STYLE DOM to do whatever you want.
document.getElementsByClassName("class")[3].style.color = "red" 

// Same, you can use 'document.getElementsById' to manipulate elements further
document.getElementById("id").style.fontSize = "10vw"

// Also make sure you learn HTML and CSS. If you don't know then, you can have a look at my HTML CSS tutorial!

// So, the conversion of HTML to JS object is known as DOM tree and thus you can manipulate them according to their index like we have done above. The HTML elements that were converted as known as nodes and we have 3 types of nodes : 
// text nodes, element nodes and comment nodes
// In HTML, <html> is at the root while <head> and <body> are it's children and it's continued further, having <p> and many more things. // Text node is the text that is written within <p>, <h1>, <span> etc.
// Most of time, the browser uses autocorrect and thus sometimes if you forget to apply the closing tag in HTML, the browser will automatically apply it if you check in the inspect tab.

// Let's try changing the title of the webpage 
document.title = "Meow"

// However, you cannot change the title or make any changes permanently because it should be done in the original HTML file, it won't be working in inspect tab. It will just show you but actually if you refresh the page, then the changes will be gone.
