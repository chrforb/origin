//assign current as 50
var current = 50;
//function to roll dice on click
function roll() {
    let rand = Math.floor((Math.random()*6)+1);
    document.getElementById('uRoll').innerHTML = 'You rolled a ' + rand + '!';
    var winnings;
    let rollSix = 25;

    //display current winnings
    document.getElementById('current').innerHTML = 'Current Winnings: ' + current;

    //switch for dice rolls
    switch(rand) {
        case 1:
            winnings = current*2;
            document.getElementById('uRoll').innerHTML += '<br/>It is good to be number 1! Double your winnings!';
            document.getElementById('winnings').innerHTML = 'New Winnings: ' + winnings;
            break;
        case 2:
            winnings = current-20;
            document.getElementById('uRoll').innerHTML += '<br/>Second best is not good enough! You lose 20 points.';
            document.getElementById('winnings').innerHTML = 'New Winnings: ' + winnings;
            break;    
        case 3:
            winnings = current-current;
            document.getElementById('uRoll').innerHTML += '<br/>Three is not a lucky number at all! Lose all your winnings!';
            document.getElementById('winnings').innerHTML = 'New Winnings: ' + winnings;
            break;
        case 4:
            winnings = current+400;
            document.getElementById('uRoll').innerHTML += '<br/>Four is lucky like a four-leafed clover! You won 400 points!';
            document.getElementById('winnings').innerHTML = 'New Winnings: ' + winnings;
            break;
        case 5:
            winnings = current;
            document.getElementById('uRoll').innerHTML += '<br/>Five Alive! Your are still in the game, but no change in winnings.';
            document.getElementById('winnings').innerHTML = 'New Winnings: ' + winnings;
            break;
        case 6:
            document.getElementById('uRoll').innerHTML += '<br/><input id="userNumb" type="number"><input type="button" onclick="guess()" value="Guess">';
            function guess() {//i tried :/
                let userNumb = document.getElementById('userNumb').value;
            if (rollSix == userNumb) {
                winnings = current*rollSix;
                document.getElementById('uRoll').innerHTML += '<br/>You are lucky indeed! Multiply your winnings by this number!';
                document.getElementById('winnings').innerHTML = 'New Winnings: ' + winnings;
            } else if (rollSix > userNumb) {
                winnings = current+Number(userNumb);
                document.getElementById('uRoll').innerHTML += '<br/>You picked a rather low number, but you win those points.';
                document.getElementById('winnings').innerHTML = 'New Winnings: ' + winnings;
            } else {
                winnings = current - Number(userNumb);
                document.getElementById('uRoll').innerHTML += '<br/>Not what I was hoping for. Lose points equal to your guess.';
                document.getElementById('winnings').innerHTML = 'New Winnings: ' + winnings;
            }
            }
            break;
    }
    current = winnings;
}
