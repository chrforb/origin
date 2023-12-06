var flips = 0;
var heads = 0;
var tails = 0;

function flip() {
    var random = Math.random();//random between 0 and 1
    var newRow = document.createElement('tr');//will use this to append new rows to table w results

    if (random > 0.5) {
        heads++;//+1 to head
        newRow.innerHTML = `<td>Flip ${flips + 1}</td><td>Heads</td>`;
    } else {
        tails++;//+1 to tails
        newRow.innerHTML = `<td>Flip ${flips + 1}</td><td>Tails</td>`;
    }
    //add new flip count and result in table
    document.getElementById('resultTable').appendChild(newRow);
    //log ratio
    document.getElementById('ratio').innerHTML = `Heads --> ${heads} : Tails --> ${tails}`;

    flips++;
}