//let v var
let x = 10;
if (x==10) {
    let x = 20;
    document.getElementById('s1').innerHTML = "<p>X where x=20: " + x + "</p>";
}

document.getElementById('s1').innerHTML += "<p>default x-value: " + x + "</p>";

var y = 10;
if (y==10) {
    var y = 20;
    document.getElementById('s1').innerHTML += "<p>y where y=20: " + y + "</p>";
}

document.getElementById('s1').innerHTML += "<p>default y-value: " + y + "</p>";

let z = true;

function fnScope() {
    let z = false;
    console.log(z);
}
fnScope();
console.log(z);

//default parameters

function multiplication(a, b=2) {
    return a*b;
}

document.getElementById('s2').innerHTML = "<p>" + multiplication(5) + "</br>" + multiplication(5,8) + "</p>";

let t2 = `I have so much work 
to 
do`;

document.getElementById('s8').innerHTML = t2;

//template literals
var first = "Gary";
var last = "Smith";

document.getElementById('s3').innerHTML = `<p>My name is ${first} ${last}.</p>`;

//arrow fn
function fullName(f, l) {
    return `${f} ${l}`;
}

document.getElementById('s4').innerHTML = `<p>Traditional function: ${fullName(first, last)}</p>`;

//one line fn
fullName1 = (f,l)=>`${f} ${l}`;

document.getElementById('s4').innerHTML += `<p>One Line Arrow Function: ${fullName1(first, last)}</p>`;

//multiline arrow fn
fullName2 = (f,l)=> {
    console.log(f,l);
    return `${f} ${l}`;
}

document.getElementById('s4').innerHTML += `<p>MultiLine Function: ${fullName2(first, last)}</p>`;

//classes
class Book {
    constructor(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }
}

const jsBook = new Book("JSBook", "Christian Forbes", 2023);

document.getElementById('s5').innerHTML = `<p>Title: ${jsBook.title} by ${jsBook.author} </br>Published in ${jsBook.pubDate}</p>`;

//array destructuring
const course = ["N220", "Into to JS"];

let [courseNum, courseTitle] = course;
document.getElementById('s7_array').innerHTML = `<p>${courseNum}: ${courseTitle}</p>`;

let [t,fn,,ln] = ['Mr.', 'Greg', 'Michael', 'Smith', 'Jr.'];

document.getElementById('s7_array').innerHTML += `<p>${t} ${fn} ${ln}</p>`;

let g = 4;
let h = 9;
// let temp = g; g = h; h = temp;
[g,h] = [h,g];