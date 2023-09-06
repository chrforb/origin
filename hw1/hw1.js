//variables
//dating problem
var tickets = 3;
var cost = 14;
var totalTicketCost = cost*tickets;

//shopping problem
var myMoney = 235.87;
var shirt = 35;
var pants = 75;
var shoes = 60;
var jacket = 70;

var totalShopping = myMoney - (shirt+shoes+pants);
var jacketAfford = Boolean(totalShopping > jacket);

//pizza problem
var pizzas = 4;
var perStudent = 2.5;
var slicePerPizza = pizzas*8;

var studentsFed = slicePerPizza / perStudent;
var leftOver = slicePerPizza % perStudent;

//monty's problem
var adult = 12;
var child = 6;
var drink = 1.5;

var montyTotal = 2*adult + child + 3*drink;

//avg tips problem
var w1 = 202.45;
var w2 = 134.97;
var w3 = 256.63;
var w4 = 178.22;

var weeklyAvg = (w1+w2+w3+w4)/4;

//innerHTML
//innerHTML for dating problem
document.getElementById('ticketNum').innerHTML += tickets;
document.getElementById('ticketCost').innerHTML += cost;
document.getElementById('ttCost').innerHTML += totalTicketCost;

//innerHTML for shopping problem
document.getElementById('bank').innerHTML += "Balance: " + totalShopping;
document.getElementById('addJacket').innerHTML += Boolean(jacketAfford) + ", you cannot afford the jacket.";

//innerHTML for pizza problem
document.getElementById('profPizza').innerHTML += "She can feed " + Math.floor(studentsFed) + " students. She has " + leftOver + " slices for herself.";

//innerHTML for monty problem
document.getElementById('Monty').innerHTML += "The total will be $" + montyTotal.toFixed(2) + ".";

//innerHTML for tips problem
document.getElementById('tips').innerHTML += "Your average tips were $" + weeklyAvg.toFixed(2) + " a week.";