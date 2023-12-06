function mortgageCalc() {
    //get input values
    var loan = document.getElementById('loan').value;
    var term = document.getElementById('term').value;
    var int = document.getElementById('interest').value;

    if (loan == '' || term == '' || int == '') {
        document.getElementById('monthly').innerHTML = `All fields are required.`;
    } else if (isNaN(loan) || isNaN(term) || isNaN(int)) {
        document.getElementById('monthly').innerHTML = `Please fill out all fields with numbers.`;
    } else {

    var monthlyInterestRate = (int / 100) / 12;

    //loan term into amount of payments
    var totalPayments = term * 12;

    //monthly mortgage formula
    var monthlyPayment = (loan * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

    document.getElementById('monthly').innerHTML = `Your monthly payment will be $${monthlyPayment.toFixed(2)}`;
    }
}