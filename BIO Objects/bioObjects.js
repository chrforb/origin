const course = {
    courseNumb: 'N220',
    courseTitle: 'Intro to Media App Developement',
    totalSeats: 20,
    totalStudents: 18,
    availability: function(){
        return this.totalSeats > this.totalStudents;
    }
}

console.log(course.courseNumb + " Open: " + course.availability());
//alternative: course.totalStudents=course.totalStudents+2;
course.totalStudents+=2;

console.log(course.totalStudents);

console.log(course.courseNumb + " Open: " + course.availability());

//window object
document.getElementById('hwDetails').innerHTML = "height: " + window.innerHeight + "<br> Width: " + window.innerWidth; 

function IUPUIWebsite() {
    open('http://www.iupui.edu');
}

function printPage() {
    print();
}

document.getElementById('wpDetails').innerHTML = window.location;
//document object // above and below are same, prefer above
document.getElementById('dpDetails').innerHTML = document.URL;

document.getElementById('update').innerHTML = document.lastModified;

//str object
function getGreeting() {
    let gMsg = document.getElementById('greeting').value;
    gMsg = gMsg.trim();
    let half = gMsg.charAt(gMsg.length/2) //charAt = character at '_', find character at half  gMsg len
    document.getElementById('messageInfo').innerHTML = "Your greeting is " + gMsg.length + " characters long and the middle character is " + half;
}

var coolText = document.getElementById('coolText').innerHTML;
console.log(coolText);

document.getElementById('coolText').innerHTML = coolText.toUpperCase();
coolText = coolText.replace('pretty' , 'really');
console.log(coolText);

let classList = document.getElementById('classes').innerHTML;
let classArray = classList.split(', ');
console.log(classArray);

//number object
let myNum = 45.61616168;
document.getElementById('fixed').innerHTML = myNum.toFixed(1);
document.getElementById('precise').innerHTML = myNum.toPrecision(13);

//math object
let myPi = Math.PI;
//console.log(myPi);
document.getElementById('round').innerHTML = Math.round(myPi);
document.getElementById('ceil').innerHTML = Math.ceil(myPi);
document.getElementById('floor').innerHTML = Math.floor(myPi);

let mRand = Math.floor(Math.random()*10)+1;//Math.random generates 0-1, *10 to get 1-10, round down + 1

document.getElementById('random').innerHTML = mRand;

//date object
let today = new Date();
document.write(today);
document.write(`<br>Date: ` + today.getDate());
document.write(`<br>Month: ` + (today.getMonth()+1)); //+1 because month arrays start at 0, but months start at 1
document.write(`<br>Day: ` + (today.getDay()+1)); //+1 because day arrays start at 0, but days start at 1
document.write(`<br>Year: ` + today.getFullYear());
document.write(`<br>Shortened Method: ` + today.toDateString());