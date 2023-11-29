let zipTxt = document.getElementById('zip');
let phoneTxt = document.getElementById('phone');

//verify zip
function validateZip() {
    let vz1 = /^([0-9]{5})([0-9]{4})$/; //validates format --> 123456789
    let vz2 = /^([0-9]{5})-([0-9]{4})$/; //validates format --> 12345-6789
    let vz3 = /^([0-9]{5}) ([0-9]{4})$/; //validates format --> 12345 6789
    let vz4 = /^([0-9]{5})$/; //validates format --> 12345

    //check if 1 OR 2 OR 3 OR 4 are valid (only one needs to be valid)
    let validity = vz1.test(zipTxt.value) || vz2.test(zipTxt.value) || vz3.test(zipTxt.value) || vz4.test(zipTxt.value);
    //display valid zip
    document.getElementById('zipAns').innerText = validity;
}
zipTxt.addEventListener('blur', validateZip);

//verify phone
function validatePhone() {
    let vp1 = /^\d{3}-\d{3}-\d{4}$/; // validates format --> 123-456-7890
    let vp2 = /^\(\d{3}\)\d{3}-\d{4}$/; // validates format --> (123)456-7890
    let vp3 = /^\(\d{3}\) \d{3}-\d{4}$/; // validates format --> (123) 456-7890
    let vp4 = /^\d{3}.\d{3}.\d{4}/; // validates format --> 123.456.7890
    let vp5 = /^\d{10}/; // validates format --> 1234567890

    //check if any format is matched
    let validity = vp1.test(phoneTxt.value) || vp2.test(phoneTxt.value) || vp3.test(phoneTxt.value) || vp4.test(phoneTxt.value) || vp5.test(phoneTxt.value);
    //display true or false
    document.getElementById('phoneAns').innerText = validity;
}


phoneTxt.addEventListener('blur', validatePhone);