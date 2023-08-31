var fName = "Greg"; //str
var book = "Greg's Dog";
var lName = "Brown";
var age = 19; //int
var student = true; //bool

//contatenate first and last to make a full name
let fullName = fName + " " +lName; //empty str for space

//let acts the same as var for declaring values
let hometown="Indy";

//const(ant) values can't be changed
const DIMEVAL = 10;

console.log(hometown); //used to see value/error check

document.write("Apples </br>");//writes on page for you

//target specific id and make changes
document.getElementById('fullName').innerHTML = fullName + " is <i>" + age + "</i> years old.";

console.log("Student: " + typeof student);
console.log("DIMEVAL: " + typeof DIMEVAL);

//lunch problem
let banana = 1.5;
let sandwich = 4.5;
let chips = 1.75;
let drink = 2.0;
let myOrder = banana + sandwich + 2 * chips + drink;

console.log("My Order: " + myOrder);

const TAX = 0.07

let orderTotal = myOrder + (myOrder * TAX)

let myMoney = 15.35;

if (orderTotal > myMoney) {
    food = "</br>You cannot afford this lunch."
} else {
    food = " </br>You can afford this lunch! Your change: " + (myMoney-orderTotal) + " "
}

document.write(food)