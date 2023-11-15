let stringTxt = document.getElementById('string');
let zipTxt = document.getElementById('zip');
let ccardTxt = document.getElementById('ccard');
let phoneTxt = document.getElementById('phone');

//regular expression: /text/

//string
function validateString() {
    let vs1 = /ralph/i; //i is case insensitive
    let vs2 = /^(cat)/; //beginning of str
    let vs3 = /dog$/; //end of str
    document.getElementById('stringAns').innerText = vs1.test(stringTxt.value);
}

stringTxt.addEventListener('blur', validateString);

//zip
function validateZip() {
    let vz1 = /^([0-9]{5})([0-9]{4})?$/;

    document.getElementById('zipAns').innerText = vz1.test(zipTxt.value);
}

zipTxt.addEventListener('blur', validateZip);

//ccard
function validateCcard() {
    let vc1 = /^\d{12}$/;

    document.getElementById('ccAns').innerText = vc1.test(ccardTxt.value);
}

ccardTxt.addEventListener('blur',validateCcard);