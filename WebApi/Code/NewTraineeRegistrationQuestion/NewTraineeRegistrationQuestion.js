// get Algoritem JS
var imported = document.createElement('script');
imported.src = 'Algoritem.js';
document.head.appendChild(imported);

// get Trainee object
objRegister = JSON.parse(sessionStorage.getItem("userRegister"));

var str = "";
var day, param, res, status, retAlgoritem;
let traineeToRegisterQuestion, Obj;
let build = [];
let count = 1;

// RegisterQuestion function
function RegisterQuestion() {

    // get body problem in one string
    $('input:checkbox:checked').each(function () {
        if (str == "") {
            str = str + $(this).next().text();
        }
        else {
            str = str + ',' + $(this).next().text();
        }
    });
    console.log(objRegister.Date_Of_Birth);

    traineeToRegisterQuestion = {
        First_Name: objRegister.First_Name,                                 // firstName
        Last_Name: objRegister.Last_Name,                                   // lastName
        User_Name: objRegister.User_Name,                                   // userName
        Trainee_Id: objRegister.Trainee_Id,                                 // id
        Password: objRegister.Password,                                     // password
        Phone_Number: objRegister.Phone_Number,                             // phoneNumber
        Date_Of_Birth: new Date(Date.parse(objRegister.Date_Of_Birth)),     // birth date
        Gender: objRegister.Gender == 'זכר' ? true : false,                 // gender
        Height: parseFloat(objRegister.Height),                             // height
        Weight: parseFloat(objRegister.Weight),                             // weight
        Address: objRegister.Address,                                       // address
        Amount_Of_Training_Per_Week: parseInt($("#training_per_week option:selected").text()),
        Perform_Exercises: $("#perform_exercises option:selected").text() == 'לבצע תרגילים במשקלים נמוכים' ? true : false,
        Training_Goal: $("#training_goal option:selected").text(),
        Fitness_Level: parseInt($("#fitness_level option:selected").text()),
        Body_Problem: str
    };

    console.log(traineeToRegisterQuestion.Date_Of_Birth);

    // create new Trainee
    $.ajax({
        url: "/api/Trainee",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        //data: JSON.stringify(),
        data: JSON.stringify(traineeToRegisterQuestion),
        success: function (data) {

            //function Algoritem
            Algoritem();

            //move to LoginTrainee
            sessionStorage.setItem("userTrainee", JSON.stringify(traineeToRegisterQuestion));
            window.location.href = '../LoginTrainee/LoginTrainee.html';
        },
        error: function (err) {
            if (!err) {
                alert("שגיאה ברישום");
            }
        }
    });

}

function Algoritem() {
    param = GetAllFacility();
    res = param.responseJSON;
    status = param.status;
    console.log(res);

    //let res1 = BuildTraineeProgram(3, 4, MASS_BUILD, ["גב"], false, 73, 183);
    //console.log(res1);

    str = traineeToRegisterQuestion.Body_Problem.split(",");
    //console.log(str);

    retAlgoritem = BuildTraineeProgram(
        traineeToRegisterQuestion.Fitness_Level,
        traineeToRegisterQuestion.Amount_Of_Training_Per_Week,
        traineeToRegisterQuestion.Training_Goal,
        str,
        traineeToRegisterQuestion.Perform_Exercises,
        traineeToRegisterQuestion.Weight,
        traineeToRegisterQuestion.Height);

    BuildTrainerFacilityRecommendation();

}

// get All Facility in gym
function GetAllFacility() {

    return $.ajax({
        async: false,
        url: "/api/TraineeProgram/allFacilities",
        method: "GET",
        dataType: "json",
        contentType: "application/json"
    });
}

// function Build Trainer Facility Recommendation
function BuildTrainerFacilityRecommendation() {
    let performExercises = traineeToRegisterQuestion.Perform_Exercises;

    for (let i = 0; i < res.length; i++) {
        if (str.includes(res[i].Category) && (!performExercises)) {
            continue;
        }

        if (retAlgoritem.two_days == false) {
            day = "A";
        }
        else {
            if (res[i].Category == "חזה" || res[i].Category == "רגליים" || res[i].Category == "יד קדמית") {
                day = "A";
            }
            else if (res[i].Category == "בטן") {
                    day = "C";
            }
            else
                day = "B";
        }

        if (res[i].Category == "בטן") {
            Obj = {
                Trainer_Id: "111111111",
                Facility_Code: res[i].Facility_Code,
                Amount_Of_Personal_Repetitions: 0,
                Amount_Of_Recommended_Repetitions: "",
                Recommended_Weight_To_Lift: "",
                Personal_Weight_To_Lift: 0,
                Days_to_Train: day,
                Trainee_Id: traineeToRegisterQuestion.Trainee_Id,
                Creation_Date: GetFormattedDate()
            }
        }
        else if (str.includes(res[i].Category) && performExercises) {
            Obj = {
                Trainer_Id: "111111111",
                Facility_Code: res[i].Facility_Code,
                Amount_Of_Personal_Repetitions: 0,
                Amount_Of_Recommended_Repetitions: MASS_BUILD_REPETITIONS,
                Recommended_Weight_To_Lift: res[i].Big_Muscle ? BIG_LOW : SMALL_LOW,
                Personal_Weight_To_Lift: 0,
                Days_to_Train: day,
                Trainee_Id: traineeToRegisterQuestion.Trainee_Id,
                Creation_Date: GetFormattedDate()
            }

        } else {
            Obj = {
                Trainer_Id: "111111111",
                Facility_Code: res[i].Facility_Code,
                Amount_Of_Personal_Repetitions: 0,
                Amount_Of_Recommended_Repetitions: retAlgoritem.amount_of_repetitions,
                Recommended_Weight_To_Lift: res[i].Big_Muscle ? retAlgoritem.big_muscle_recommandation : retAlgoritem.small_muscle_recommandation,
                Personal_Weight_To_Lift: 0,
                Days_to_Train: day,
                Trainee_Id: traineeToRegisterQuestion.Trainee_Id,
                Creation_Date: GetFormattedDate()
            }

        }
        
        // check just 3 facilities for Category
        if (i < res.length - 1) {
            if (res[i].Category == res[i + 1].Category) {
                count = count + 1;
                if (count >= 4 && res[i].Category != "בטן") {
                    continue;
                }
            }
            else {
                count = 1;
            }
        }
        
        build.push(Obj);
        console.log(i + "-> ");
        console.log(Obj);
    }
    console.log(build);

    // function for New Program
    NewTraineeRec(build);

}

// function create Date
function GetFormattedDate() {
    var now = new Date();
    var date = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();

    return date;
}

// function create New Trainee Recommendation
function NewTraineeRec(build) {
    return $.ajax({
        async: false,
        url: "/api/TraineeProgram/newProgram",
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(build),
    });
}