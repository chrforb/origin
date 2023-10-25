//target answers section
var aText = document.getElementById(`answers`);

let grades = [78, 86, 92, 77];
aText.innerHTML = `Array: ` + grades + `</br>`;//just call array to see all values
aText.innerHTML += `Second Value: ` + grades[1] + `</br>`;//array placements start at 0
grades[1]=83;//target placement
aText.innerHTML += `Array: ` + grades + `</br>`;
aText.innerHTML += `Array Length: ` + grades.length + `</br>`;//.length function returns length
let lastGrade = grades.length-1; //3
let lgValue = ++grades[lastGrade];//++before to increment and then save value
aText.innerHTML += `Last Grade Change: ` + lgValue + `</br>`;
aText.innerHTML += `Array: ` + grades + `</br>`;
aText.innerHTML += `Third Value: ` + grades[2] + `</br>`;
let gradeTotal = grades[0] + grades[1] + grades[2] + grades[3];//add all values in array together, here we did it manually
aText.innerHTML += `Average Grade: ` + (gradeTotal/grades.length) + `</br>`;//grade total divided by array length for avg

let aboveAvg = Boolean(gradeTotal/grades.length > 80);//t/f gradeAvg above 80

aText.innerHTML += `Above Average: ` + aboveAvg + `</br>`;//print boolean value (t or f) of `aboveAvg`

//target extra answers section
var eText = document.getElementById(`extraAnswers`);

let tops = [`tShirt`, `sweater`, `sweatshirt`, `blouse`, `polo`, `hoodie`];

tops.push(`tank`);//add value to end of array
eText.innerHTML = `Array Push: ` + tops + `</br>`;

tops.pop();//remove last value
eText.innerHTML += `Array Pop: ` + tops + `</br>`;

tops.shift();//remove first value
eText.innerHTML += `Array Shift: ` + tops + `</br>`;

tops.unshift(`T-Shirt`);//add value at beginning
eText.innerHTML += `Array Unshift: ` + tops + `</br>`;

//delete values in middle
tops.splice(2,1);//(starting placement, amount to delete)
eText.innerHTML += `Delete Sweatshirt: ` + tops + `</br>`;

//add values in middle
tops.splice(3,0,`sweatshirt`, `tank`);
eText.innerHTML += `Add Sweatshirt and Tank: ` + tops + `</br>`;

let bottoms = [`jeans`, `shorts`, `skirts`, `slacks`, `sweatpants`];

let outfits = [tops,bottoms];

document.write(outfits[0][1] + ` ` + outfits[1][3]);

//objects

const friend = {
    fName: `William`,
    lName: `Williamson`,
    age: 21,
    student: false,
    fullName: function(){//function inside object is a method
        return this.fName + ` ` +this.lName; //'this.' refers to the object currently in
    }
}

console.log(friend.fullName() + ` is ` + friend.age + ` years old.`);

const car = {
    year: 2001,
    make: `Chrysler`,
    model: `Sebring`,
    automatic: true,
    mpg: 20,
    efficiency: function() {
        return Boolean(this.mpg > 40);
    }
}

document.getElementById(`car`).innerHTML = `I own a ` + car.year + ` ` + car.make + ` ` + car.model + `.`;
document.getElementById(`carEff`).innerHTML = car.make + ` ` + car.model + ` Efficiency: ` + car.efficiency() + `.`;
