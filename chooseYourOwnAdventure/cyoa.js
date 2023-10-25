let comp;

function testPowerCat() {
    alert("You test your powers and find out you have lightning and wind abilities. Sweet!");
    alert("Uh oh. An evil wizard approaches and challenges you to a duel after seeing your impressive powers.");
    let catDuel = prompt("Since you're dueling this wizard, which power will you use,'LIGHTNING' or 'WIND'?");
    if (catDuel.toUpperCase() == "LIGHTNING") {
        alert("He is weak to lightning abilities! You win the duel!");
        alert("You have cemented yourself as a powerful wizard, and your adventure is over.");
    } else if (catDuel.toUpperCase() == "WIND") {
        alert("Turns out, the evil wizard is a master of wind and he parries your wind attack.");
        alert("You are gusted away and the wizard council is embarrassed of you.");
        alert("The wizard council has revoked your powers due to poor performance. You go back to being a normal dude.");
        alert("Your adventure is over, go home.");
    }
}

function noPowerCat() {
    alert("You decided not to test your powers and continue about your day, but someone taps you shoulder...");
    alert("It's an evil wizard who wants to duel you!");
    alert("You did not try out your abilities so you don't know how to defend yourself.");
    let noCatDuel = prompt("Will you beg for mercy or attempt to get the cat to help you? Type BEG or CAT.");
    if (noCatDuel.toUpperCase() == "BEG") {
        alert("Your attempt at begging worked, and the evil wizard spares you from a duel.");
        alert("In turn, he steals your powers and you are no longer a wizard.");
        alert("You are now back to being regular, and decide to go home since your adventure is now over.");
    } else if (noCatDuel.toUpperCase() == "CAT") {
        alert("You asked the <i>cat</i> for help?");
        alert("Wait! He seems to understand you and steps up to defend you!");
        alert("Apparently, your cat has psychic powers. He lifts the wizard up and launches him away!");
        alert("No wonder the wizards liked him! He saves you and now you can go home. Your adventure is over.");
    }

}

function testPowerBob() {
    alert("You chose to test your powers, and find out you now have fire and ice abilities!");
    alert("An evil wizard sees your new powers and challanges you to a wager.");
    alert("You must duel each other, each other's powers as the stakes. Winner takes all!");
    let duelChoice = prompt("Will you use FIRE or ICE?");
    if (duelChoice.toUpperCase() == "FIRE") {
        alert("You defeat him with your impressive fire abilities, and win the wager!");
        alert("You now have this wizard's abilities and become the strongest wizard in the land.");
        alert("You are now the head of the wizard council.");
        alert("Your adventure is now over, as you retire as the most powerful of all time.");
    } else if (duelChoice.toUpperCase() == "ICE") {
        alert("Your ice powers are effective, but he was not a man of his word, and fled before you could collect your wager.");
        alert("I'm sure he will be back. You must train as hard as you can for when he returns.");
        alert("Your adventure is over... for now.");
    }
}

function noPowerBob() {
    alert("You decided not to test your new powers.");
    alert("An evil wizard overheard your newly found abilities and wants to fight for them as he knows you haven't practiced them.");
    let noBobChoice = prompt("Since you do not know your powers for this duel, will you flee or ask Bob for help? Type RUN or BOB.");
    if (noBobChoice.toUpperCase() == "RUN") {
        alert("You decide to flee the fight. The wizard council sees this and deems you a coward.");
        alert("Your powers are revoked and you are now back to being regular. Your adventure is over.");
    } else if (noBobChoice.toUpperCase() == "BOB") {
        alert("Bob accepts the challenge on your behalf.");
        alert("Your companion is a very powerful wizard, and banishes the dueler into the shadow realm.");
        alert("Bob is recognized for the massive extent of his powers, and is made the head of the wizard council.");
        alert("Bob likes you, so he offers you a spot in the council. You take it, and your adventure is over.");
    }

}

function leaveRoom() {
    alert("You chose to avoid the room. Probably for the best.");
    alert("Adventure Over.")
}

function enterRoom() {
    alert("You enter the room and realize you stumbled across a secret wizard conference.");
    if (comp.toUpperCase()== "DOG") {
        alert("You should not have been here. The wizards are merciful, though, and turn you into a dog to match your companion.");
    } else if(comp.toUpperCase()== "CAT") {
        alert("The wizards love your cat. They love him so much, they let you become a wizard.");
        let wizardChoice = prompt("Since you're a wizard now, would you like to test your powers? YES or NO?");
        if (wizardChoice.toUpperCase()=="YES") {
            testPowerCat();
        } else {
            noPowerCat();
        }

    } else if(comp.toUpperCase()== "BOB") {
        alert("Good thing you chose Bob. He knows these guys and now you are welcome to become a wizard.");
        let wizardChoice = prompt("Since you're a wizard now, would you like to test your powers? YES or NO?");

        if (wizardChoice.toUpperCase()=="YES") {
            testPowerBob();
        } else {
            noPowerBob();
        }
    } else {
        alert("You didn't pick a companion? The wizards vaporized you.");
    }
}

function startGame() {
    let player = prompt("What is your name?");
    alert("Welcome, " + player + ". Today we depart!");
    comp = prompt('To begin, you must select a companion: dog, cat, or Bob');
    let room = prompt('You hear strange noises from a neighboring room. ENTER or LEAVE?')

    if (room.toUpperCase()=="ENTER") {
        enterRoom();
    } else {
        leaveRoom();
    }
}