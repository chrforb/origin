function validateForm() {
    let validForm = true;
    //zip
    let zipValue = document.getElementById('zip').value;
    let validateZip = /^\d{5}$/;

    if (!validateZip.test(zipValue)) {
        document.getElementById('zipError').innerText = "Your zip code must contain five numbers!";
        validForm = false;
    } else {
        document.getElementById('zipError').innerText = "";
    }

    //phone
    let phoneValue = document.getElementById('phone').value;
    let validatePhone = /^\d{3}-\d{3}-\d{4}$/;

    if (!validatePhone.test(phoneValue)) {
        document.getElementById('phoneError').innerText = "Correctly format phone number: xxx-xxx-xxxx";
        validForm = false;
    } else {
        document.getElementById('phoneError').innerText = "";
    }

    //email
    let emailValue = document.getElementById('myEmail').value;
    //at least: Aa-Zz, 0-9, or ! # $ % .
    //@ symbol
    //at least: Aa-Zz, 0-9, or dash after @ && before .
    //. period
    //2-3 Aa-Zz
    let validateEmail = /^([a-zA-Z0-9!#$%.]+)@[a-zA-Z0-9-]+\.([a-zA-Z]{2,3})$/;
    if (!validateEmail.test(emailValue)) {
        document.getElementById('emailError').innerText = "Email format incorrect. Please try again.";
        validForm = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    //get values for names,address,city from input
    let nameValue = document.getElementById('myName').value;
    let addressValue = document.getElementById('address').value;
    let cityValue = document.getElementById('city').value;

    if (nameValue == "" || addressValue == "" || cityValue == "") {
        validForm = false;
    }

    if (validForm) {
        let items = document.querySelectoraAll('ul li');
        items[0].innerText += nameValue;
        items[1].innerText += addressValue;
        items[2].innerText += cityValue;
        items[3].innerText += zipValue;
        items[4].innerText += phoneValue;
        items[5].innerText += emailValue;

        document.getElementsByTagName('div')[0].style.display = "block";
    }

}

document.getElementsByTagName('form')[0].addEventListener('submit', function(e) {
    //prevent default submission
    e.preventDefault();
    //function to validate fields
    validateForm();
})