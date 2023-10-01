// In this chapter we are going to discuss about parents in HTML theoritically. So, just image an HTML file. If you look at it, you will be finding 3 types of parents : html, head, title and body.
// The elements which will be coming under parent elements will be known as children elements. Thus, more children elements like this will be called siblings (relative to other children). Sometimes, children will be having children elements and they will be also called children elements. 
// Now let's discuss some JS code which can be used to access parent and children elements.

document.body.firstChild          // returns the first child under body tag

document.body.firstChild.parentNode    // returns the parent (can be text, comment or an element)
document.body.firstChild.parentElement      // returns the parent too but the difference is that it will return only those parent which is valid HTML element.
document.body.firstChild.nextSibling         // Used to get the next or right child of the (parent).
document.body.lastChild.previousSibling     // Used to the previous or the left child of the parent

// Thus, by this method you can select various children and parents to manipulate them and enhance your web development skills even more.
// In the next chapter, we will be making our sample website using HTML and use these methods to get the desired results!