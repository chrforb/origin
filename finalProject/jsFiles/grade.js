let gradingScale = ["A", 90, 100, "B", 80, 89, "C", 70, 79, "D", 60, 69, "F", 59, "lower"];
const max = 500;

var result = document.getElementById('result');

function calculateGrade() {
    //clear previous highlights
    document.getElementById('a').style.color = '';
    document.getElementById('b').style.color = '';
    document.getElementById('c').style.color = '';
    document.getElementById('d').style.color = '';
    document.getElementById('f').style.color = '';
    
    var userPoints = parseFloat(document.getElementById('points').value);
    //check if input is a number between 0 and 499
    if (isNaN(userPoints) || userPoints < 0 || userPoints > max) {
        result.innerText = 'Please enter a valid point total.';
        return;
    }

    //calculate grade %
    var percentage = userPoints / max * 100;

    result.innerText = `Grade Average: ${percentage.toFixed(2)}%`;

    if (percentage >= 90 && percentage <= 100) {
        result.innerHTML += '</br>Grade: A';
        document.getElementById('a').style.color = 'red';
    } else if (percentage >= 80 && percentage < 90) {
        result.innerHTML += '</br>Grade: B';
        document.getElementById('b').style.color = 'red';
    } else if (percentage >= 70 && percentage < 80) {
        result.innerHTML += '</br>Grade: C';
        document.getElementById('c').style.color = 'red';
    } else if (percentage >= 60 && percentage < 70) {
        result.innerHTML += '</br>Grade: D';
        document.getElementById('d').style.color = 'red';
    } else {
        result.innerHTML += '</br>Grade: F';
        document.getElementById('f').style.color = 'red';
    }
}