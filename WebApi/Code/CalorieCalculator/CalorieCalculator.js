// get Calorie object include: birthDate, gender, height, weight
let objCalc = JSON.parse(sessionStorage.getItem("userCalc"));

// birth day
var year = Number(objCalc.Bdate.substr(0, 4));
var month = Number(objCalc.Bdate.substr(5, 2));
var day = Number(objCalc.Bdate.substr(8, 2));

// age
var today = new Date();
var age = today.getFullYear() - year;
if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
    age--;
}

// fill input text
$('#age').val(age);
//$('#gender').text(objCalc.gender);
$('#height-cm').val(objCalc.height);
$('#weight').val(objCalc.weight);
Calc();

function Calc() {
    const form = document.getElementById('calc-form');
    const results = document.getElementById('results');
    const errors = document.getElementById('form-error');

    /**
     * Display a form validation error
     *
     * @param   {String}  msg  The validation message
     * @return  {Boolen}       Returns false
    */

    function ErrorMessage(msg) {
        errors.innerHTML = msg;
        errors.style.display = '';
        return false;
    }

    /**
     * Display the calculation results
     *
     * @param   {Integer}  calories   The calories burned
     * @param   {Integer}  distance   The distance run
     * @param   {String}   unit       The distance unit (miles or kilometers)
     * @param   {Integer}  burnRate   The calories per distance burn rate
     * @param   {Integer}  calsPerHr  The calories burned per hour
    */

    function ShowResults(calories) {
        results.innerHTML = `<p>קצב חילוף החומרים שלך (BMR) הוא: <strong>${(calories).toFixed(2)} </strong> קלוריות ביום. </t></p>
                             <div></div>` +
                             `<br/>` +
                            `<a href='#' id='rs'>חשב שוב</a>` +
                            `<br/>` +
                            `<br/>` +
                            `<br/>` +
                            `<h6>בחיטוב- מומלץ לצרוך פחות קלוריות ממה שמוצג כאן.</h6>
                            <h6>במסה- מומלץ לצרוך יותר קלוריות ממה שמוצג כאן.</h6>
                            <h6>באימוני כוח- מומלץ לצרוך כמות קלוריות שווה למה שמוצג כאן.</h6>`;
        results.style.display = ''
        form.style.display = 'none'
        //errors.style.display = 'none'
    }

    /**
     * Hide the results and reset the form
     */

    function ResetForm(e) {
        if (e.target.id = 'rs') {
            e.preventDefault();
            results.style.display = 'none';
            form.style.display = '';
            form.reset();
            $('#age').val(age);
            //$('#gender').text(objCalc.gender);
            $('#height-cm').val(objCalc.height);
            $('#weight').val(objCalc.weight);
        }
    }

    /**
    * Handle form submit
    */

    function SubmitHandler(e) {
        e.preventDefault();

    // Age
    let age = parseFloat(form.age.value);
    //let unit = form.distance_unit.value;
        if (isNaN(age) || age < 0) {
            return ErrorMessage('Please enter a valid age');
        }

    // Height
        let heightCM = parseFloat(form.height_cm.value);
        if (isNaN(heightCM) || heightCM < 0) {
            let heightFeet = parseFloat(form.height_ft.value);
            if (isNaN(heightFeet) || heightFeet < 0) {
                return ErrorMessage('Please enter a valid Height in feet or centimeters');
            }

            let heightInches = parseFloat(form.height_in.value);
            if (isNaN(heightInches) || heightInches < 0) {
                heightInches = 0;
            }
            heightCM = (2.54 * heightInches) + (30.4 * heightFeet)
        }
    
        let weight = parseFloat(form.weight.value);
        if (isNaN(weight) || weight < 0) {
            return ErrorMessage('Please enter a valid weight');
        }
    
    
    
        let calories = 0;
        if (form.gender.value == 'Female') {
            //females =  655.09 + 9.56 x (Weight in kg) + 1.84 x (Height in cm) - 4.67 x age
            calories = 655.09 + (9.56 * weight) + (1.84 * heightCM) - (4.67 * age);
        }
        else {
            calories = 66.47 + (13.75 * weight) + (5 * heightCM) - (6.75 * age);
        }
    
        // Display results
        ShowResults(calories);
    }
    
    // Add Event Listeners
    form.addEventListener('submit', SubmitHandler);
    results.addEventListener('click', ResetForm, true);
    
}
