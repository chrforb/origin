function mortgageCalc() {
    //get input values
    var l = document.getElementById('loan').value;
    var term = document.getElementById('term').value;
    var int = document.getElementById('interest').value;
    var n = term*12;

    if (l == '' || term == '' || int == '') {
        document.getElementById('monthly').innerHTML = `All fields are required.`;
    } else if (isNaN(l) || isNaN(term) || isNaN(int)) {
        document.getElementById('monthly').innerHTML = `Please fill out all fields with numbers.`;
    } else {

    var c = (int / 100) / 12;

    //monthly mortgage formula
    let monthlyPayment = (l * (c * Math.pow((c + 1), n))) / (Math.pow((c + 1), n) - 1);

    document.getElementById('monthly').innerHTML = `Your monthly payment will be $${monthlyPayment.toFixed(2)}`;
    }
}