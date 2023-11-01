//question 1
document.querySelector('h1').textContent = 'DOM Manipulation';
//question 2
document.querySelector('#container').style.backgroundColor = 'lightblue';
//question 3
let ulElement = document.querySelector('ul');
let newItem = document.createElement('li');
newItem.textContent = 'Item 7';
ulElement.appendChild(newItem);
//question 4
ulElement.children[0].style.color = 'crimson';
//question 5
ulElement.children[2].style.backgroundColor = 'pink';
//question 6
ulElement.children[4].style.backgroundColor = 'yellow';
//question 7
ulElement.children[6].style.backgroundColor = 'lightGray';
ulElement.children[6].style.color = 'royalBlue';
//question 8
const yourNameItem = document.createElement('li');
yourNameItem.textContent = 'Christian';
ulElement.appendChild(yourNameItem);
//question 9
ulElement.children[3].remove();
//question 10
const button = document.querySelector("button");
const italicElement = document.createElement("i");
italicElement.textContent = button.textContent;
button.textContent = "";
button.appendChild(italicElement);

button.style.backgroundColor = "rebeccapurple";
button.style.color = "white";
button.style.border = "1px solid white";