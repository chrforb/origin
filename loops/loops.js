//for
for (let i=0;i<5;i++) {
    document.getElementById(`for`).innerHTML+= i + ' ';
}

//while
let w=0;
while (w<5) {
    w++;
    document.getElementById(`while`).innerHTML+= w + ' ';
}

//do while
let d=10;
do {
    document.getElementById(`doWhile`).innerHTML+= d + " ";
    d--;
} while (d>4);

//problem 1
let months = ["January", "February", "March", "April", "May", "June"];
for (let m=0; m<months.length; m++) {
    document.getElementById(`an1`).innerHTML+= months[m] + '<br/>';
}

//problem 2
let mt2 = '<ol>';
for (let m=0; m<months.length; m++) {
    mt2+="<li>" + months[m] + "</li>";
}
mt2+= "</ol>";
document.getElementById(`an2`).innerHTML = mt2;

//problem 3
let slices = 9;
while(slices >=2) {
    document.getElementById(`an3`).innerHTML += "There are " + slices + " slices left.<br/>";
    slices--;
}

//problem 4
let number = 15;
do {
    document.getElementById(`an4`).innerHTML += "Number Count: " + number + "<br/>";
    number++
} while(number < 20);

//problem 5
let tday = new Date();
let tDate = tday.getDate()-1;
for (let prob5 = 50; prob5 >= 5; prob5-=5) {
    document.getElementById(`an5`).innerHTML += "Number: " + prob5 + "<br/>";
    if (prob5 == tDate) {
        document.getElementById(`an5`).innerHTML += "That is today's date!";
        break;
    } else {
        continue;
    }
}

//problem 6
let pizza = 10;
while (pizza > 1) {
    pizza--;
    document.getElementById(`an6`).innerHTML += "Another slice down the hatch -- " + pizza + " left.<br/>";
}
document.getElementById(`an6`).innerHTML += "There is only " + slices + " slices left.";

//problem 7
for (let tickets = 10; tickets >= 0; tickets--) {
    if (tickets == 5) {
        document.getElementById(`an7`).innerHTML += "Half of the tickets are gone. Get yours now!<br/>";
    } else if (tickets == 0) {
        document.getElementById(`an7`).innerHTML += "Tickets are SOLD OUT!<br/>";
    } else {
        document.getElementById(`an7`).innerHTML += "Another ticket sold. " + tickets + " left -- Get yours now!<br/>";
    }
}

//for in loop
const Course = {
    "cNum": "N220",
    "cTitle": "IMAD",
    "offering": ['Fall', 'Spring', 'Summer'],
    "enrolled": 20
}
let holiday = 'halloween';

for (attribute in Course) {
    document.getElementById(`forIn`).innerHTML+= attribute + ": " + Course[attribute] + "<br/>";
}
for (month in months) {
    document.getElementById(`forIn`).innerHTML+= month + ": " + months[month] + "<br/>";
}

for (h in holiday) {
    document.getElementById(`forIn`).innerHTML+= h + ": " + holiday[h] + "<br/>";
}

//for of loop
for (h of holiday) {
    document.getElementById(`forOf`).innerHTML+= h + "<br/>";
}

for (h of months) {
    document.getElementById(`forOf`).innerHTML+= h + "<br/>";
}

for (h of Course) {
    document.getElementById(`forOf`).innerHTML+=Course[h] + "<br/>";
}