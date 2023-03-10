// Write your code here!
let delMain = document.getElementById('main');
delMain.remove();
// removes the main#main node from the DOM

let newHeader = document.createElement("h1");
// creates a new h1 node to the DOM

newHeader.id = "victory";
// the new header variable is assigned to the h1#victory node

newHeader.textContent = "Brian is the champion";
// neHeader points to the text content of the h1#victory node with my name