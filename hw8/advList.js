//part 1
let myItems = document.querySelectorAll('#codeBox li');
let totalItems = myItems.length;

console.log("myItems: " + myItems + " totalItems: " + totalItems);

for (let i = 0; i < totalItems; i++) {
    //create an img element
    let trash = document.createElement('img');
    //set the src attribute of the img element
    trash.setAttribute('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png');
    //class name of img to listIcon
    trash.className = 'listIcon';
    //add the image to list items
    myItems[i].appendChild(trash);
}

//part 3 + 4
let codeBox = document.querySelector("#codeBox ul");

codeBox.addEventListener('click', changeProp);

function changeProp(e) {
    let target = getTarget(e);
    let tParent = target.parentNode;

    //check if it is a list item
    if (tParent.tagName === "LI") {
        //remove list item
        tParent.remove();
    } else if (tParent.tagName === "UL") {
        //add or remove class 'selected' -->toggle used to add/remove class name on clicks<--
        target.classList.toggle('selected');
    }
}