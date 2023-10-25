//bank
let bank = 45.67;
let toy = 45.99;
let buyToy = bank>toy;//T or F

if(buyToy) {
    document.getElementById('bank').innerHTML = "You can buy the toy! You'll have $" + (bank-toy).toFixed(2) + " leftover.";
} else {
    document.getElementById('bank').innerHTML = "You do not have enough! Get a job :(";
}

//birth month
let birthMonth = 8;
let today = new Date();
let thisMonth = (today.getMonth()+1);

if (birthMonth == thisMonth) {
    document.getElementById('birthday').innerHTML = "Congrats, it's your birth month!";
} else {
    document.getElementById('birthday').innerHTML = "It isn't your birth month. Get lost.";
}

//voting age
let age = document.getElementById('age').value;
let ageText;

function checkAge() {
    if(age < 18) {
        ageText = "Sorry - You cannot vote.";
    } else if(age == 18) {
        ageText = "You can now vote!";
    } else {
        ageText = "You've been able to vote for " + (age-18) + " years.";
    }
    document.getElementById('voteAge').innerHTML = ageText;
}

//greeting 
let tHours = today.getHours();
let greeting;

if(tHours <= 12) {
    greeting = "Good Morning.";
} else if(12<tHours && tHours<=16) {
    greeting = "Good Afternoon.";
} else if(tHours>16 && tHours<=20){
    greeting = "Good Evening.";
} else {
    greeting = "Good Night.";
}

document.getElementById(`myTime`).innerHTML = greeting;

//grade check
let midterm = 78;
let final = 87;
var studentText;
let total = midterm+final+47+62;
let avg = (total/350)*100;

if (midterm > 50 && final>72) {
    studentText = `You've passed the course.`;
} else {
    studentText = `You did NOT pass the course. See you next semester.`;
}

if ((midterm > 50 && final>72) || avg>80) {
    studentText += `<br>The class is complete.`;
} else {
    studentText += `<br>You did not complete the class.`;
}

document.getElementById(`msg`).innerHTML = studentText;

//random number
function newNum() {
    let rNum = Math.floor(Math.random()*20)+1;
    document.getElementById(`rNum20`).innerHTML = rNum;
}

//roll dice

function rollDie() {
    let dieImage = ``;
    let dice = Math.floor(Math.random()*6)+1;
    switch(dice) {
        case 1: 
            dieImage = `img/die_face_1.png`;
            break;
        case 2: 
            dieImage = `img/die_face_2.png`;
            break;
        case 3: 
            dieImage = `img/die_face_3.png`;
            break;
        case 4: 
            dieImage = `img/die_face_4.png`;
            break;
        case 5: 
            dieImage = `img/die_face_5.png`;
            break;
        case 6: 
            dieImage = `img/die_face_6.png`;
            break;
            default:
                console.log('Something went wrong.');
    }
    document.getElementById(`dice_1`).innerHTML = `<img src="` + dieImage + `"/>`;
    
    dice = Math.floor(Math.random()*6)+1;
    switch(dice) {
        case 1: 
            dieImage = `img/die_face_1.png`;
            break;
        case 2: 
            dieImage = `img/die_face_2.png`;
            break;
        case 3: 
            dieImage = `img/die_face_3.png`;
            break;
        case 4: 
            dieImage = `img/die_face_4.png`;
            break;
        case 5: 
            dieImage = `img/die_face_5.png`;
            break;
        case 6: 
            dieImage = `img/die_face_6.png`;
            break;
            default:
                console.log('Something went wrong.');
    }
    document.getElementById(`dice_2`).innerHTML = `<img src="` + dieImage + `"/>`;
}

//season
//using thisMonth var from different problem
let season = ``;

switch (true) {
    case (thisMonth == 12 || thisMonth <=2):
    season = `It is Winter.`;
    break;
    case (thisMonth>=3 && thisMonth <=5):
    season = `It is Spring.`;
    break;
    case (thisMonth>=6 && thisMonth <=8):
    season = `It is Summer.`;
    break;
    case (thisMonth>=9 && thisMonth <=11):
    season = `It is Fall.`;
    break;
    default:
        season = `This is not an option.`;
}
document.getElementById(`season`).innerHTML = season;