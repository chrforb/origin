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

function recPerimiter(x,y) {
    perimeter = 2*x + 2*y;
    return perimeter;
}
document.getElementById('panswer').innerHTML += "Perimeter: " + recPerimiter(2,5) + " ft.";
console.log("Rectangle Perimeter: " + recPerimiter(5,8));

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
    let area = x*y;
    let recValues =[perm, area];
}

document.getElementById('multiAnswer').innerHTML = "<ul><li>Perimeter: " + multiAnswer(3,9)[0] + "</li><li>Area: " + multiAnswer(3,9)[1] + "</li></ul>";