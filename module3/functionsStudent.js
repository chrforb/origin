function paragraph() {
    document.getElementById('changeTxt').innerHTML = "This text changed.";
}

paragraph();

function print() {
    document.write("This function does not take parameters.");
}

print();

function conLog() {
    console.log("Hello, World.");
}

conLog();

let band = "band1";

function favBand(b) {
document.getElementById('favBand').innerHTML += "My favorite band is " + b + ".";
}

favBand(band);

let fName = "Christian";

function nameLog(x) {
    console.log(x);
}

nameLog(fName);

var num1 = 8;
var num2 = 5;

function recPerimiter(x,y) {
    perimeter = 2*x + 2*y;
    return perimeter;
}
document.getElementById('panswer').innerHTML += "Perimeter: " + recPerimiter(num1,num2) + " ft.";
console.log("Rectangle Perimeter: " + recPerimiter(num1,num2));

function calcArea() {
    var h = document.getElementById('height').value;
    var w = document.getElementById('width').value;
    area = w*h;
    document.getElementById('answer').innerHTML = "Area: " + area + " sq ft.";
}

/* practice/example for return values
function test() {
    return true;
    return false;
}
*/

function multiAnswer(x,y) {
    let perm = recPerimiter(x,y);
    let area2 = x*y;
    let recValues =[perm, area2];
}

document.getElementById('multiAnswer').innerHTML = "<ul><li>Perimeter: " + multiAnswer(num1,num2)[0] + "</li><li>Area: " + multiAnswer(num1,num2)[1] + "</li></ul>";

function myFunction() {
    alert("Who goes there?");
    //window.alert
}

function wizard(name, job) {
    document.getElementById('future').innerHTML = "Welcome " + name + ", the " + job + ".";
}

function addItem() {
    let item = prompt("Add item:");
    console.log("Item added: " + item);
    alert("You have added " + item + " to your list!");
}