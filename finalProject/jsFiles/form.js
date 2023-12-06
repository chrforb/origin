document.getElementById('registration').addEventListener('submit', function (e) {
    e.preventDefault(); //stop default submission
    validateForm(); //call validate form function to check fields
});

function validateForm() {
    //account info validation
    //get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const verifyPassword = document.getElementById('verifyPassword').value;
    //format validation
    let validateEmail = /^([a-zA-Z0-9!#$%.]+)@[a-zA-Z0-9-]+\.([a-zA-Z]{2,3})$/;
    let validatePassword = /^[^\s]{8,10}$/; //allows any non-space character
    //test
    //email format
    if (!validateEmail.test(email)) {
        document.getElementById('emailError').innerText = `Must be valid email address.`;
    } else {
        document.getElementById('emailError').innerText = ``;
    }

    //password length 
    if (!validatePassword.test(password)) {
        document.getElementById('passwordError').innerText = 'Password must be 8-10 characters.';
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    //password match?
    if (password !== verifyPassword) {
        document.getElementById('verifyPasswordError').innerText = 'Passwords must match.';
    } else {
        document.getElementById('verifyPasswordError').innerText = '';
    }

    //contact info validation
    //get input values
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const phone = document.getElementById('phone').value;
    //format validation
    let validateState = /^[a-zA-Z]{2}$/;
    let validateZip = /^\d{5}(-\d{4})?$/;
    let validatePhone = /^\d{3}-\d{3}-\d{4}$/;
    //test
    //state abbrev?
    if (!validateState.test(state)) {
        document.getElementById('stateError').innerText = `Use 2 character abbreviation.`;
    } else {
        document.getElementById('stateError').innerText = ``;
    }

    //zip length
    if (!validateZip.test(zip)) {
        document.getElementById('zipError').innerText = `Use 5 or 9 digit ZIP code.`
    } else {
        document.getElementById('zipError').innerText = ``;
    }

    //phone format
    if (!validatePhone.test(phone)) {
        document.getElementById('phoneError').innerText = `Use xxx-xxx-xxxx format.`;
    } else {
        document.getElementById('phoneError').innerText = ``;
    }

    //payment info validation
    //get inputs
    const cardNumb = document.getElementById('cardNumber').value;
    const expDate = document.getElementById('expiration').value;
    //format validation
    let validateCard = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    let validateExp = /^\d{2}\/\d{4}/;
    //test
    //card format
    if (!validateCard.test(cardNumb)) {
        document.getElementById('cardError').innerText = `Use xxxx-xxxx-xxxx-xxxx format.`;
    } else {
        document.getElementById('cardError').innerText = ``;
    }

    //exp format
    if (!validateExp.test(expDate)) {
        document.getElementById('expError').innerText = `Use mm/yyyy format.`;
    } else {
        document.getElementById('expError').innerText = ``;
    }
}